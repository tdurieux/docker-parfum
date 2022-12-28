import { CodeJar } from "https://medv.io/codejar/codejar.js";
import { withLineNumbers } from "https://medv.io/codejar/linenumbers.js";

angular
  .module("dinghy-website", ["ngRoute"])
  // .config(function ($routeProvider) {
  //   $routeProvider.when("/:lib/:version/:project", {
  //     controller: "mainController",
  //   });
  // })
  .directive("keypressEvents", [
    "$document",
    "$rootScope",
    function ($document, $rootScope) {
      return {
        restrict: "A",
        link: function () {
          $document.bind("keydown", function (e) {
            $rootScope.$broadcast("keypress", e);
            $rootScope.$broadcast("keypress:" + e.which, e);
          });
        },
      };
    },
  ])
  .filter("percentage", [
    "$filter",
    function ($filter) {
      return function (input, decimals) {
        return $filter("number")(input * 100, decimals) + "%";
      };
    },
  ])
  .filter("length", function () {
    return function (input) {
      if (!input) {
        return 0;
      }
      return Object.keys(input).length;
    };
  })
  .filter("filterObj", function () {
    return function (input, search) {
      if (!input) return input;
      if (!search) return input;
      var result = {};
      angular.forEach(input, function (value, key) {
        if (search(value)) {
          result[key] = value;
        }
      });
      return result;
    };
  })
  .controller(
    "mainController",
    function ($scope, $http, $routeParams, $location, $sce) {
      setTimeout(() => {
        monacoEditor.getModel().onDidChangeContent(() => {
          const code = monacoEditor.getValue();
          if (code !== $scope.dockerfile) {
            $scope.$apply(() => {
              $scope.dockerfile = code;
            });
          }
        });
        function findNodeByPosition(position) {
          let lastFound = undefined;
          $scope.ast.traverse((node) => {
            if (!node?.position) return true;
            if (
              node.position.lineStart >= position.lineNumber - 1 &&
              node.position.lineEnd <= position.lineNumber - 1
            ) {
              if (
                node.position.lineStart === position.lineNumber - 1 &&
                node.position.columnStart > position.column - 1
              ) {
                return true;
              }
              if (
                node.position.lineEnd === position.lineNumber - 1 &&
                node.position.columnEnd < position.column - 1
              ) {
                return true;
              }
              lastFound = node;
            }
          });
          if (
            !lastFound &&
            $scope.defaultPosition &&
            $scope.defaultPosition != position
          )
            return findNodeByPosition($scope.defaultPosition);
          let current = lastFound;
          let o = [];
          while (current != null) {
            if (current.type === "DockerFile") {
              break;
            }
            o.push(current.type);
            current = current.parent;
          }
          $scope.$apply(() => {
            $scope.cursorPosition = o.reverse();
          });
        }
        monacoEditor.onDidChangeCursorPosition((e) => {
          if (!$scope.ast || !e.position) return;
          $scope.defaultPosition = e.position;
          findNodeByPosition(e.position);
        });
        monacoEditor.onMouseMove((e) => {
          if (!$scope.ast || !e.target.position) return;
          findNodeByPosition(e.target.position);
        });
      }, 500);

      function parseQuery(queryStr) {
        const lines = queryStr.split("\n");
        let parentStack = [
          { indent: -1, query: dockerSmellRepair.dinghy.nodeType.Q("_") },
        ];
        for (const line of lines) {
          if (line.trim().length == 0) continue;
          const indent = line.match(/^\s*/)[0].length;
          const q = dockerSmellRepair.dinghy.nodeType.Q(line.trim());
          if (indent > parentStack.at(-1).indent) {
            parentStack.at(-1).query.children.push(q);
            parentStack.push({
              indent: indent,
              query: q,
            });
          } else if (indent < parentStack.at(-1).indent) {
            for (let i = parentStack.length - 1; i >= 0; i--) {
              if (parentStack[i].indent < indent) {
                parentStack = parentStack.slice(0, i + 1);
                break;
              }
            }
            parentStack.at(-1).query.children.push(q);
          } else {
            parentStack.at(-2).query.children.push(q);
          }
        }
        if (parentStack[0].query.children.length == 1) {
          return parentStack[0].query.children[0];
        }
        return parentStack[0].query;
      }

      $scope.results = undefined;
      $scope.queryStr = "";
      $scope.$watch("queryStr", function (newValue, oldValue) {
        if (newValue === oldValue) return;
        $scope.queryResults = undefined;
        if (newValue) {
          $scope.queryResults = $scope.ast.find(parseQuery(newValue));
        }
      });

      $scope.analyze = async function () {
        console.time("AST PARSING");
        const dockerParser =
          new dockerSmellRepair.dinghy.dockerfileParser.DockerParser(
            new dockerSmellRepair.dinghy.File(undefined, $scope.dockerfile)
          );

        const ast = await dockerParser.parse();
        $scope.ast = ast;
        const matcher = new dockerSmellRepair.Matcher(ast);
        const violations = matcher.matchAll();

        const output = { queries: {}, violations: [] };
        output.queries.packages = ast
          .find(dockerSmellRepair.dinghy.nodeType.Q("SC-APT-PACKAGE"))
          .map((n) => n.toString())
          .filter((v, i, a) => a.indexOf(v) === i);
        output.queries.urls = ast
          .find(dockerSmellRepair.dinghy.nodeType.Q("ABS-PROBABLY-URL"))
          .map((n) => n.toString())
          .filter((v, i, a) => a.indexOf(v) === i);
        output.queries.paths = ast
          .find(dockerSmellRepair.dinghy.nodeType.Q("ABS-MAYBE-PATH"))
          .map((n) => n.toString())
          .concat(
            ast
              .find(dockerSmellRepair.dinghy.nodeType.Q("BASH-PATH"))
              .map((n) => n.toString())
          )
          .filter((v, i, a) => a.indexOf(v) === i);
        output.queries.commands = ast
          .find(
            dockerSmellRepair.dinghy.nodeType.Q(
              dockerSmellRepair.dinghy.nodeType.BashCommandCommand
            )
          )
          .map((n) => n.toString())
          .filter((v, i, a) => a.indexOf(v) === i);

        const markers = [];
        for (const v of violations) {
          const node = await v.repair({ clone: true });
          output.violations.push({
            rule: v.rule,
            position: v.node.position,
            repaired: (
              node.getParent(dockerSmellRepair.dinghy.nodeType.DockerFile) ||
              node
            ).toString(true),
          });
          markers.push({
            message: v.rule.description,
            severity: monaco.MarkerSeverity.Error,
            startLineNumber: v.node.position.lineStart + 1,
            startColumn: v.node.position.columnStart + 1,
            endLineNumber: v.node.position.lineEnd + 1,
            endColumn: v.node.position.columnEnd + 1,
            source: v.rule.source,
          });
        }
        monaco.editor.setModelMarkers(
          monacoEditor.getModel(),
          "owner",
          markers
        );

        const nodes = {};
        ast.traverse((node) => {
          if (!nodes[node.type]) nodes[node.type] = [];
          nodes[node.type].push(node);
          node.annotations.forEach((a) => {
            if (!nodes[a]) nodes[a] = [];
            nodes[a].push(node);
          });
        });
        $scope.$apply(() => {
          $scope.results = output;
          $scope.nodes = Object.keys(nodes)
            .sort((a, b) => nodes[b].length - nodes[a].length)
            .map((n) => [n, nodes[n].length]);
        });
        console.timeEnd("AST PARSING");
      };
      $scope.hoverNodeType = function (nodeType) {
        if (!$scope.ast) return;

        const decorations = [];
        $scope.ast.traverse((node) => {
          if (!node.position) return true;
          if (node.type === nodeType || node.annotations.includes(nodeType)) {
            decorations.push({
              range: new monaco.Range(
                node.position.lineStart + 1,
                node.position.columnStart + 1,
                node.position.lineEnd + 1,
                node.position.columnEnd + 1
              ),
              options: { inlineClassName: "ast-highlight" },
            });
          }
        });

        const decorationIds = monacoEditor.deltaDecorations([], decorations);

        $scope.clearNodeType = () => {
          monacoEditor.removeDecorations(decorationIds);
        };
      };
      $scope.hoverNodePosition = function (position) {
        const decorations = [];
        decorations.push({
          range: new monaco.Range(
            position.lineStart + 1,
            position.columnStart + 1,
            position.lineEnd + 1,
            position.columnEnd + 1
          ),
          options: { inlineClassName: "ast-highlight" },
        });
        const decorationIds = monacoEditor.deltaDecorations([], decorations);

        $scope.clearNodeType = () => {
          monacoEditor.removeDecorations(decorationIds);
        };
      };
      $scope.clearNodeType = function () {
        monacoEditor.deltaDecorations([], []);
      };
      $scope.apply = function (repaired) {
        monacoEditor.getModel().setValue(repaired);
        $scope.dockerfile = repaired;
      };
      $scope.diff = function (repaired) {
        const diffLines = Diff.createTwoFilesPatch(
          null,
          null,
          $scope.dockerfile,
          repaired,
          null,
          null,
          {
            context: 0,
            ignoreWhitespace: true,
          }
        ).split("\n");
        const fragment = document.createElement("div");

        diffLines.forEach((part) => {
          if (
            part.startsWith("+++") ||
            part.startsWith("---") ||
            part.startsWith("Index") ||
            part.startsWith("===")
          ) {
            return;
          }
          // green for additions, red for deletions
          // grey for common parts
          const color = part.startsWith("+")
            ? "green"
            : part.startsWith("-")
            ? "red"
            : "grey";
          const span = document.createElement("div");
          span.style.color = color;
          span.appendChild(document.createTextNode(part));
          fragment.appendChild(span);
        });
        return $sce.trustAsHtml(fragment.innerHTML);
      };

      let lastTimeout;
      $scope.$watch("dockerfile", function (newValue, oldValue) {
        clearTimeout(lastTimeout);
        lastTimeout = setTimeout(() => {
          $scope.$apply(() => {
            monaco.editor.setModelMarkers(monacoEditor.getModel(), "owner", []);
            if (newValue) {
              $scope.analyze();
            } else {
              $scope.results = undefined;
            }
          });
        }, 250);
      });
    }
  );
