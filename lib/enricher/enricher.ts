import { nodeType } from "@tdurieux/dinghy";
import { Argv } from "yargs";
import { enrichers } from "./enrichers";

interface Scenario {
  fixBadLongNames?: string[];
  captureAllAfter?: {
    name: string;
    match: string[];
  };
  rejectIf?: string[];
  mustHave?: string[];
  replaceEmptyArgsWith?: string[];
  fixupNonSpacedArgs?: boolean;
  stealFromArrayFor?: {
    array: string;
    for: string;
  };
  saveLastNonOption?: string;
  rejectIfIs?: {
    name: string;
    values: string[];
  };
  captureAfterThirdNonOption?: string;
  captureAfterSecondNonOption?: string;
  captureAfterFirstNonOption?: string;
  postProcess?: {
    tagLastElement?: {
      source: string;
      tag: string;
    };
    subCommand?: string;
  }[];
  // detailed: (args: string[]) => DetailedArguments;
  argv: () => Argv;
  cmd: string;
  name: string;
  categories: string[];
  prefix: string;
  // tags: string[];
  paths?: string[];
  booleans?: string[];
  counts?: string[];
}
interface Enricher {
  providerFor: string[];
  prefix: string;
  scenarios: Scenario[];
  categories: string[];
}

/**
 * Check if flag is in args
 * @param flag command flag
 * @param args command passed args
 * @returns true if the flag is in args
 */
function matchFlag(flag: string, args: string[]) {
  flag = flag.trim();
  if (args.includes(flag)) {
    return true;
  }

  // Support -axfsfsdg style
  flag = flag.replace("-", "");
  for (let i = 0; i < args.length; i++) {
    if (/^-\w/.test(args[i]) && flag.length === 1) {
      if (args[i].includes(flag)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Returns the options that have values (strings or arrays)
 * @param argv
 * @returns
 */
function getValuedOptions(argv: Argv<{}>): string[] {
  const theOpts: { [key: string]: any } = (argv as any).getOptions();

  return theOpts.string
    .concat(theOpts.array)
    .map((opt: string) =>
      theOpts.alias[opt] ? theOpts.alias[opt].concat([opt]) : opt
    )
    .flat();
}

/**
 * Split args that do not have spaces between the key and value (like -DTHIS_OPTION=FALSE)
 */
function fixupNonSpacedArgs(args: string[], argv: Argv) {
  const selections = getValuedOptions(argv);
  return args
    .map((arg) => {
      for (const selection of selections) {
        const matches =
          arg !== selection &&
          (arg.startsWith(`-${selection}`) || arg.startsWith(`--${selection}`));

        if (matches) {
          const value = arg.replace(new RegExp(`^(-{1,2}${selection})\=?`), "");
          if (value.trim().length === 0) {
            return [arg];
          }
          const key = arg.slice(0, arg.indexOf(value));
          return [key, value];
        }
      }

      return [arg];
    })
    .flat();
}

function prepareArgs(args: string[], scenario: Scenario) {
  // Sometimes we have a default arg if we are passed none (like cd ...)
  if (scenario.replaceEmptyArgsWith && args.length === 0) {
    args = scenario.replaceEmptyArgsWith;
  }
  if (scenario.fixupNonSpacedArgs) {
    args = fixupNonSpacedArgs(args, scenario.argv());
  }
  // const scenarios = scenario.cmd.replace("$0", "").trim().split(" ");
  // for (const s of scenarios) {
  //   for (const arg of [...args]) {
  //     if (arg === s) {
  //       args = args.slice(args.indexOf(arg) + 1);
  //     }
  //   }
  // }
  // remove the = from the end of args
  args = args.map((arg) =>
    arg.startsWith("-") ? arg.replace(/\=$/, "") : arg
  );
  // at an addition - to the start of args that are missing it
  if (scenario.fixBadLongNames) {
    args = args.map((arg) => {
      return scenario.fixBadLongNames.includes(arg) ? `-${arg}` : arg;
    });
  }
  return args;
}

function captureAllAfter(args: string[], scenario: Scenario) {
  const captures: string[] = [];
  const newArgs: string[] = [];

  let capturing = false;
  for (const arg of args) {
    if (capturing) {
      captures.push(arg);
      continue;
    }

    if (scenario.captureAllAfter.match.includes(arg)) {
      capturing = true;
    }

    newArgs.push(arg);
  }
  return { args: newArgs, captures };
}
function captureAfterN(args: string[], scenario: Scenario) {
  const captures: string[] = [];

  let skipXFirst = 0;
  if (scenario.captureAfterSecondNonOption) {
    skipXFirst = 1;
  } else if (scenario.captureAfterThirdNonOption) {
    skipXFirst = 2;
  }

  const valuedOpts = getValuedOptions(scenario.argv())
    .map((opt) => [`-${opt}`, `--${opt}`])
    .flat();

  const newArgs = [];

  let capturing = false;
  let skipNext = false;
  for (const arg of args) {
    // cpature all the arg that follow the arguements
    if (capturing) {
      captures.push(arg);
      continue;
    }

    // it is the value of a previous option is not compatured
    if (skipNext) {
      newArgs.push(arg);
      skipNext = false;
      continue;
    }

    // it is a value start capturing
    if (!arg.startsWith("-")) {
      if (skipXFirst > 0) {
        skipXFirst--;
        newArgs.push(arg);
        continue;
      }
      capturing = true;
      captures.push(arg);
      continue;
    }

    skipNext = valuedOpts.includes(arg);
    if (!skipNext) {
      // check if the arg is in a group of short options
      if (!arg.startsWith("--") && arg.length > 2) {
        skipNext = arg.split("").some((c) => valuedOpts.includes(`-${c}`));
      }
    }
    newArgs.push(arg);
  }

  return { args: newArgs, captures };
}

function compaturesArgs(args: string[], scenario: Scenario) {
  const output: { args: string[]; captures: string[] } = {
    args,
    captures: [],
  };
  // Some commands have flags that start a capture of all the rest
  // of the arguments (like find -exec ...)
  if (scenario.captureAllAfter) {
    const o = captureAllAfter(args, scenario);
    output.args = o.args;
    output.captures = o.captures;
  }
  if (
    scenario.captureAfterFirstNonOption ||
    scenario.captureAfterSecondNonOption ||
    scenario.captureAfterThirdNonOption
  ) {
    const r = captureAfterN(output.args, scenario);
    const captures = r.captures;
    const newArgs = r.args;

    // Possibly reclaim on or two args
    // if (scenario.captureAfterSecondNonOption && captures.length >= 1) {
    //   newArgs.push(captures.shift());
    // } else if (scenario.captureAfterThirdNonOption && captures.length >= 2) {
    //   newArgs.push(captures.shift());
    //   newArgs.push(captures.shift());
    // }
    output.args = newArgs;
    output.captures = captures.concat(output.captures);
  }

  return output;
}

function checkScenarioValidity(args: string[], scenario: Scenario) {
  // Check early rejection
  if (scenario.rejectIf && scenario.rejectIf.some((a) => args.includes(a))) {
    return false;
  }

  let valid = true;
  const parts = scenario.cmd.split(/ /g);
  // check if the command is valie
  if (
    parts.length > 1 &&
    !parts[1].trim().startsWith("<") &&
    !parts[1].trim().startsWith("[")
  ) {
    valid = valid && args.includes(parts[1].trim());
  }

  // check if the required arguments are present
  if (valid && scenario.mustHave && scenario.mustHave.length > 0) {
    valid = valid && scenario.mustHave.every((flag) => matchFlag(flag, args));
  }

  return valid;
}

function parseArgWithScenario(commandArgsString: string[], scenario: Scenario) {
  const args = prepareArgs(commandArgsString, scenario);
  const r = compaturesArgs(args, scenario);
  const captures = r.captures;
  const newArgs = r.args;

  // check if the scenario is a potential candidate
  if (!checkScenarioValidity(newArgs, scenario)) {
    return;
  }

  const argv = scenario.argv();

  let saveLastNonOption: string | null = null;
  if (scenario.saveLastNonOption && args.length > 0) {
    if (
      !args[args.length - 1].startsWith("-") &&
      !getValuedOptions(argv).includes(args[args.length - 2])
    ) {
      saveLastNonOption = args[args.length - 1];
      args.pop();
    }
  }
  interface ArgvReturn {
    [x: string]: any;
    _: (string | number)[];
    $0: string;
    $: {
      args: string[];
      captures: string[];
    };
  }
  let fallbackResult: ArgvReturn | null = null;
  let results = argv
    .fail((msg, err, yargs) => {
      // handle the case where the command is missing a required argument
      // it the case of arrays
      const match = msg.match(
        /Not enough non-option arguments: got ([0-9]+), need at least ([0-9]+)/
      );
      if (match) {
        const got = parseInt(match[1]);
        const need = parseInt(match[2]);
        const diff = need - got;
        fallbackResult = argv.parse(
          args.slice(0, -diff).concat(["--"]).concat(args.slice(-diff))
        ) as ArgvReturn;
      }
    })
    .parse(newArgs) as ArgvReturn;
  if (fallbackResult) {
    results = fallbackResult;
  }
  // This validity predicate can't be checked until after we've tried the parse
  if (
    scenario.rejectIfIs &&
    results[scenario.rejectIfIs.name] &&
    scenario.rejectIfIs.values.includes(results[scenario.rejectIfIs.name])
  ) {
    return;
  }

  // Array in argv is too greedy sometimes
  if (
    scenario.stealFromArrayFor &&
    results[scenario.stealFromArrayFor.array] &&
    results[scenario.stealFromArrayFor.array].length > 0
  ) {
    if (!results[scenario.stealFromArrayFor.for]) {
      results[scenario.stealFromArrayFor.for] =
        results[scenario.stealFromArrayFor.array].pop();
    } else if (results[scenario.stealFromArrayFor.for].length === 0) {
      results[scenario.stealFromArrayFor.for].push(
        results[scenario.stealFromArrayFor.array].pop()
      );
    }
  }

  // check if all parameters of the command are present
  if (
    scenario.cmd
      .split(/ /g)
      .filter(
        (x) => !x.startsWith("$") && !x.startsWith("[") && !x.startsWith("<")
      )
      .some((x) => results[x.trim()] !== true && results[x.trim()] != x.trim())
  ) {
    return;
  }

  // Add back special capture-after arguments
  if (scenario.captureAllAfter && captures && captures.length > 0) {
    if (!results[scenario.captureAllAfter.name.trim()]) {
      results[scenario.captureAllAfter.name.trim()] = captures;
    } else {
      results[scenario.captureAllAfter.name.trim()].push(...captures);
    }
  } else if (captures.length > 0) {
    let captureAfterN =
      scenario.captureAfterFirstNonOption ||
      scenario.captureAfterSecondNonOption ||
      scenario.captureAfterThirdNonOption;
    if (captureAfterN) {
      if (!results[captureAfterN.trim()]) {
        results[captureAfterN.trim()] = captures;
      } else {
        results[captureAfterN.trim()].push(...captures);
      }
    }
  }

  if (saveLastNonOption) {
    results[scenario.saveLastNonOption] = saveLastNonOption;
  }

  // Capture this for post processing
  results["$"] = {
    args,
    captures,
  };

  return results;
}

function getAliases(scenario: Scenario) {
  const options = (scenario.argv() as any).getOptions();
  const aliases: { [key: string]: string[] } = options.alias;

  Object.keys(aliases).forEach((k1) => {
    Object.keys(aliases).forEach((k2) => {
      if (k1 === k2) {
        return;
      }
      if (
        aliases[k1].length === aliases[k2].length &&
        aliases[k1].every((x, i) => x === aliases[k2][i])
      ) {
        aliases[k1].push(k2);
        aliases[k2].push(k1);
      }
    });
  });
  // sort the aliases by length
  Object.keys(aliases).forEach((k) =>
    aliases[k].sort((a, b) => b.length - a.length)
  );
  return aliases;
}

function matchArgumentAST(
  scenario: Scenario,
  strNode2AST: (x: string | void) => nodeType.DockerOpsNodeType[],
  argName: string
) {
  if (strNode2AST("-" + argName).length > 0) return strNode2AST("-" + argName);
  if (strNode2AST("--" + argName).length > 0)
    return strNode2AST("--" + argName);

  const output: nodeType.DockerOpsNodeType[] = [];
  if (argName.length == 1 && (scenario.booleans || scenario.counts)) {
    strNode2ASTLoop: for (const node of strNode2AST()) {
      const nodeStr = node.toString().replace(/^-+/, "");
      for (let i = 0; i < nodeStr.length; i++) {
        if (
          !scenario.booleans?.includes(nodeStr[i]) &&
          !scenario.counts?.includes(nodeStr[i])
        ) {
          continue strNode2ASTLoop;
        }
      }
      if (
        nodeStr.match(
          new RegExp(argName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        )
      ) {
        output.push(node);
      }
    }
  } else {
    for (const node of strNode2AST()) {
      if (
        node
          .toString()
          .match(
            new RegExp(
              "^--" + argName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
              "i"
            )
          )
      ) {
        output.push(node);
      }
    }
  }
  return output;
}

function annotateAST(
  scenario: Scenario,
  type: string,
  argName: string,
  aliases: string[],
  value: string,
  cmdAST: nodeType.DockerOpsNodeType,
  strNode2AST: (x: string | void) => nodeType.DockerOpsNodeType[]
): void {
  if (
    scenario.postProcess?.filter((x) => x.subCommand && x.subCommand == argName)
      .length > 0
  ) {
    return;
  }
  const options = (scenario.argv() as any).getOptions();

  let keyAST: nodeType.DockerOpsNodeType[] = matchArgumentAST(
    scenario,
    strNode2AST,
    argName
  );
  if (keyAST.length == 0) {
    for (const k of aliases) {
      keyAST = matchArgumentAST(scenario, strNode2AST, k);
      if (keyAST.length > 0) break;
    }
  }
  const valueAST: nodeType.DockerOpsNodeType[] = strNode2AST(value);
  if (valueAST.length == 0 && value?.trim && value.trim().length > 0) {
    for (const node of strNode2AST()) {
      if (node.toString().includes(value)) {
        valueAST.push(node);
      }
    }
  }

  // add the value as a child of the command option if not boolean
  if (
    keyAST.length > 0 &&
    valueAST.length === keyAST.length &&
    !options.boolean.includes(argName)
  ) {
    for (let i = 0; i < keyAST.length; i++) {
      if (keyAST[i] == valueAST[i] || valueAST[i].hasChild(keyAST[i])) continue;

      const isChanged = valueAST[i].isChanged;
      valueAST[i].remove();
      keyAST[i].addChild(valueAST[i]);
      valueAST[i].isChanged = isChanged;

      const p = keyAST[i].position.clone();
      p.lineEnd = Math.max(valueAST[0].position.lineEnd, p.lineEnd);
      p.columnEnd = Math.max(valueAST[0].position.columnEnd, p.columnEnd);
      keyAST[i].setPosition(p);
    }
  }
  if (keyAST.length == 0 && valueAST.length == 0 && !Array.isArray(value)) {
    if (typeof value == "boolean") {
      keyAST = [cmdAST];
    } else if (
      scenario.replaceEmptyArgsWith == undefined ||
      value !== scenario.replaceEmptyArgsWith[0]
    ) {
      console.log(
        "\n",
        "[ENRICH]",
        scenario.name,
        argName,
        type,
        value,
        ": ",
        Object.keys(strNode2AST).join(" ")
      );
    }
  }

  if (typeof argName == "string" && scenario.paths?.includes(argName)) {
    const annotationName = `${scenario.prefix}-${type}`;
    for (const node of valueAST) {
      if (node.annotations.includes(annotationName)) continue;
      node.annotations.push(`BASH-PATH`);
      node.annotations.push(annotationName);
    }
    for (const node of keyAST) {
      if (node.annotations.includes(annotationName)) continue;
      node.annotations.push(annotationName);
    }
    return;
  } else if (scenario.booleans?.includes(argName)) {
    const annotationName = `${scenario.prefix}-F-${type}`;
    for (const node of keyAST) {
      if (node.annotations.includes(annotationName)) continue;
      node.annotations.push(annotationName);
    }
    return;
  } else if (Array.isArray(value) && keyAST.length !== value.length) {
    if (value.length === 0) {
      return;
    }
    if (!type.endsWith("S")) {
      type += "S";
    }
    value.forEach((x) => {
      const annotation = `${scenario.prefix}-${type.slice(0, -1)}`;
      for (const node of strNode2AST(x)) {
        for (const key of keyAST) {
          if (key == node) continue;
          const isChanged = node.isChanged;
          node.remove();
          key.addChild(node);
          node.isChanged = isChanged;

          const p = key.position.clone();
          p.lineEnd = Math.max(node.position.lineEnd, p.lineEnd);
          p.columnEnd = Math.max(node.position.columnEnd, p.columnEnd);
          key.setPosition(p);

          if (!key.annotations.includes(annotation)) {
            key.annotations.push(annotation);
          }
        }
        if (!node.annotations.includes(annotation)) {
          node.annotations.push(annotation);
        }
      }
    });
    return;
  }

  const annotationName = `${scenario.name}-${type}`;
  for (const node of keyAST.concat(valueAST)) {
    if (!node.annotations.includes(annotationName)) {
      node.annotations.push(annotationName);
    }
  }

  return;
}

function enrichAST(
  cmdAST: nodeType.BashCommand,
  commandArgs: nodeType.DockerOpsNodeType[],
  commandArgsString: string[],
  enricher: Enricher,
  scenario: Scenario,
  parseResult: ReturnType<typeof parseArgWithScenario>
) {
  // cache the ast node for its string representation
  // const argsASTCache: { [key: string]: DockerOpsNodeType } = {};

  const argsASTCache = (
    nodeStr: string | void
  ): nodeType.DockerOpsNodeType[] => {
    if (!nodeStr) return commandArgs;
    const output: nodeType.DockerOpsNodeType[] = [];
    for (const i in commandArgsString) {
      if (Array.isArray(nodeStr)) {
        if (nodeStr.includes(commandArgsString[i])) {
          output.push(commandArgs[i]);
        }
      } else if (commandArgsString[i] === nodeStr) {
        output.push(commandArgs[i]);
      }
    }
    return output;
  };

  if (!cmdAST.annotations.includes(scenario.name)) {
    cmdAST.annotations.push(scenario.name);
  }
  if (!(cmdAST as any).categories) {
    (cmdAST as any).categories = [];
  }
  // add the enricher categories to the command annotations
  enricher.categories.concat(scenario.categories || []).forEach((c) => {
    if (!(cmdAST as any).categories.includes(c)) {
      (cmdAST as any).categories.push(c);
    }
  });

  const ignores = new Set(
    scenario.cmd
      .split(/ /g)
      .filter((x: string) => !x.startsWith("[") && !x.startsWith("<"))
      .concat(["$", "_"])
  );

  // ignore co  unt args that are zero
  scenario.counts
    ?.filter((c: string) => parseResult[c] === 0)
    .forEach(ignores.add, ignores);

  const aliases = getAliases(scenario);
  Object.keys(parseResult)
    .filter((r) => !ignores.has(r))
    .forEach((argName) => {
      // Okay, get a "good" name for this key
      // Then remove all possible aliases
      if (aliases[argName]) {
        aliases[argName].forEach(ignores.add, ignores);
        return annotateAST(
          scenario,
          aliases[argName][0].toUpperCase(),
          argName,
          aliases[argName],
          parseResult[argName],
          cmdAST,
          argsASTCache
        );
      } else if (
        Object.keys(aliases).some(
          (x) => aliases[x].includes(argName) && parseResult[x]
        )
      ) {
        return; // Just skip, we'll hit this later
      } else {
        ignores.add(argName);
        return annotateAST(
          scenario,
          argName.toUpperCase(),
          argName,
          [],
          parseResult[argName],
          cmdAST,
          argsASTCache
        );
      }
    });
  if (scenario.postProcess) {
    for (const p of scenario.postProcess) {
      if (
        p.tagLastElement &&
        parseResult[p.tagLastElement.source] &&
        parseResult[p.tagLastElement.source].length
      ) {
        const v = parseResult[p.tagLastElement.source]?.at(-1);
        for (const node of argsASTCache(v)) {
          if (!node.annotations.includes(p.tagLastElement.tag)) {
            node.annotations.push(p.tagLastElement.tag);
          }
        }
      } else if (p.subCommand) {
        const v = parseResult[p.subCommand];
        if (v) {
          const firstNode = argsASTCache(v[0])[0];
          const isChanged = firstNode.isChanged;
          const lastNode = argsASTCache(v[v.length - 1]).at(-1);
          if (!lastNode || !firstNode) return;
          const p = firstNode.position.clone();
          p.columnEnd = lastNode.position.columnEnd;
          p.lineEnd = lastNode.position.lineEnd;
          const command = new nodeType.BashCommand()
            .setPosition(p)
            .addChild(
              new nodeType.BashCommandCommand()
                .addChild(firstNode.children)
                .setPosition(firstNode.position)
            );
          const subCommandsArgs = commandArgs.slice(
            commandArgs.indexOf(firstNode)
          );
          for (let i = 1; i < v.length; i++) {
            if (subCommandsArgs[i]) {
              command.addChild(
                new nodeType.BashCommandArgs()
                  .addChild(subCommandsArgs[i].children)
                  .setPosition(subCommandsArgs[i].position)
              );
              subCommandsArgs[i].remove();
            }
          }
          firstNode.replace(command);
          command.traverse(
            (n) => {
              n.isChanged = false;
              return true;
            },
            { includeSelf: true }
          );
          command.isChanged = isChanged;
        }
      }
    }
  }
}

export function enrich(root: nodeType.DockerOpsNodeType) {
  root.traverse(
    (node) => {
      if (node instanceof nodeType.BashCommand) {
        const commandAST = node.command;
        if (!commandAST) return true;

        const command = commandAST
          .getElement(nodeType.BashLiteral)
          ?.value.replace(/^\/bin\//, "");
        if (!command) return true;

        const commandArgs = node.args.filter((e) => {
          return e.traverse(
            (e) => {
              if (
                e instanceof nodeType.DockerOpsValueNode &&
                e.value?.trim() == "--"
              )
                return false;
            },
            { includeSelf: true }
          );
        });
        const commandArgsString = commandArgs.map((c) =>
          c.toString(false).trim()
        );

        enrichers
          .filter((e) => e.providerFor.includes(command))
          .forEach((e: Enricher) => {
            for (const scenario of e.scenarios) {
              try {
                const parseResult = parseArgWithScenario(
                  commandArgsString,
                  scenario
                );
                if (!parseResult) continue;
                enrichAST(
                  node,
                  commandArgs,
                  commandArgsString,
                  e,
                  scenario,
                  parseResult
                );
                break;
              } catch (error) {
                // scenario failed to parse
                console.error(error);
              }
            }
          });
      }
    },
    { includeSelf: true }
  );
  return root;
}
