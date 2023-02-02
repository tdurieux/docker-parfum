"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrich = void 0;
var dinghy_1 = require("@tdurieux/dinghy");
var enrichers_1 = require("./enrichers");
function matchFlag(flag, args) {
    flag = flag.trim();
    if (args.includes(flag)) {
        return true;
    }
    flag = flag.replace("-", "");
    for (var i = 0; i < args.length; i++) {
        if (/^-\w/.test(args[i]) && flag.length === 1) {
            if (args[i].includes(flag)) {
                return true;
            }
        }
    }
    return false;
}
function getValuedOptions(argv) {
    var theOpts = argv.getOptions();
    return theOpts.string
        .concat(theOpts.array)
        .map(function (opt) {
        return theOpts.alias[opt] ? theOpts.alias[opt].concat([opt]) : opt;
    })
        .flat();
}
function fixupNonSpacedArgs(args, argv) {
    var selections = getValuedOptions(argv);
    return args
        .map(function (arg) {
        for (var _i = 0, selections_1 = selections; _i < selections_1.length; _i++) {
            var selection = selections_1[_i];
            var matches = arg !== selection &&
                (arg.startsWith("-".concat(selection)) || arg.startsWith("--".concat(selection)));
            if (matches) {
                var value = arg.replace(new RegExp("^(-{1,2}".concat(selection, ")=?")), "");
                if (value.trim().length === 0) {
                    return [arg];
                }
                var key = arg.slice(0, arg.indexOf(value));
                return [key, value];
            }
        }
        return [arg];
    })
        .flat();
}
function prepareArgs(args, scenario) {
    if (scenario.replaceEmptyArgsWith && args.length === 0) {
        args = scenario.replaceEmptyArgsWith;
    }
    if (scenario.fixupNonSpacedArgs) {
        args = fixupNonSpacedArgs(args, scenario.argv());
    }
    args = args.map(function (arg) {
        return arg.startsWith("-") ? arg.replace(/\=$/, "") : arg;
    });
    if (scenario.fixBadLongNames) {
        args = args.map(function (arg) {
            return scenario.fixBadLongNames.includes(arg) ? "-".concat(arg) : arg;
        });
    }
    return args;
}
function captureAllAfter(args, scenario) {
    var captures = [];
    var newArgs = [];
    var capturing = false;
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        if (capturing) {
            captures.push(arg);
            continue;
        }
        if (scenario.captureAllAfter.match.includes(arg)) {
            capturing = true;
        }
        newArgs.push(arg);
    }
    return { args: newArgs, captures: captures };
}
function captureAfterN(args, scenario) {
    var captures = [];
    var valuedOpts = getValuedOptions(scenario.argv())
        .map(function (opt) { return ["-".concat(opt), "--".concat(opt)]; })
        .flat();
    var newArgs = [];
    var capturing = false;
    var skipNext = false;
    for (var _i = 0, args_2 = args; _i < args_2.length; _i++) {
        var arg = args_2[_i];
        if (capturing) {
            captures.push(arg);
            continue;
        }
        if (skipNext) {
            newArgs.push(arg);
            skipNext = false;
            continue;
        }
        if (!arg.startsWith("-")) {
            capturing = true;
            captures.push(arg);
            continue;
        }
        skipNext = valuedOpts.includes(arg);
        if (!skipNext) {
            if (!arg.startsWith("--") && arg.length > 2) {
                skipNext = arg.split("").some(function (c) { return valuedOpts.includes("-".concat(c)); });
            }
        }
        newArgs.push(arg);
    }
    return { args: newArgs, captures: captures };
}
function compaturesArgs(args, scenario) {
    var output = {
        args: args,
        captures: [],
    };
    if (scenario.captureAllAfter) {
        var o = captureAllAfter(args, scenario);
        output.args = o.args;
        output.captures = o.captures;
    }
    if (scenario.captureAfterFirstNonOption ||
        scenario.captureAfterSecondNonOption ||
        scenario.captureAfterThirdNonOption) {
        var r = captureAfterN(output.args, scenario);
        var captures = r.captures;
        var newArgs = r.args;
        if (scenario.captureAfterSecondNonOption && captures.length >= 1) {
            newArgs.push(captures.shift());
        }
        else if (scenario.captureAfterThirdNonOption && captures.length >= 2) {
            newArgs.push(captures.shift());
            newArgs.push(captures.shift());
        }
        output.args = newArgs;
        output.captures = captures.concat(output.captures);
    }
    return output;
}
function checkScenarioValidity(args, scenario) {
    if (scenario.rejectIf && scenario.rejectIf.some(function (a) { return args.includes(a); })) {
        return false;
    }
    var valid = true;
    var parts = scenario.cmd.split(/ /g);
    if (parts.length > 1 &&
        !parts[1].trim().startsWith("<") &&
        !parts[1].trim().startsWith("[")) {
        valid = valid && args.includes(parts[1].trim());
    }
    if (valid && scenario.mustHave && scenario.mustHave.length > 0) {
        valid = valid && scenario.mustHave.every(function (flag) { return matchFlag(flag, args); });
    }
    return valid;
}
function parseArgWithScenario(commandArgsString, scenario) {
    var _a, _b;
    var args = prepareArgs(commandArgsString, scenario);
    var r = compaturesArgs(args, scenario);
    var captures = r.captures;
    var newArgs = r.args;
    if (!checkScenarioValidity(newArgs, scenario)) {
        return;
    }
    var argv = scenario.argv();
    var saveLastNonOption = null;
    if (scenario.saveLastNonOption && args.length > 0) {
        if (!args[args.length - 1].startsWith("-") &&
            !getValuedOptions(argv).includes(args[args.length - 2])) {
            saveLastNonOption = args[args.length - 1];
            args.pop();
        }
    }
    var fallbackResult = null;
    var results = argv
        .fail(function (msg, err, yargs) {
        var match = msg.match(/Not enough non-option arguments: got ([0-9]+), need at least ([0-9]+)/);
        if (match) {
            var got = parseInt(match[1]);
            var need = parseInt(match[2]);
            var diff = need - got;
            fallbackResult = argv.parse(args.slice(0, -diff).concat(["--"]).concat(args.slice(-diff)));
        }
    })
        .parse(newArgs);
    if (fallbackResult) {
        results = fallbackResult;
    }
    if (scenario.rejectIfIs &&
        results[scenario.rejectIfIs.name] &&
        scenario.rejectIfIs.values.includes(results[scenario.rejectIfIs.name])) {
        return;
    }
    if (scenario.stealFromArrayFor &&
        results[scenario.stealFromArrayFor.array] &&
        results[scenario.stealFromArrayFor.array].length > 0) {
        if (!results[scenario.stealFromArrayFor.for]) {
            results[scenario.stealFromArrayFor.for] =
                results[scenario.stealFromArrayFor.array].pop();
        }
        else if (results[scenario.stealFromArrayFor.for].length === 0) {
            results[scenario.stealFromArrayFor.for].push(results[scenario.stealFromArrayFor.array].pop());
        }
    }
    if (scenario.cmd
        .split(/ /g)
        .filter(function (x) { return !x.startsWith("$") && !x.startsWith("[") && !x.startsWith("<"); })
        .some(function (x) { return results[x.trim()] !== true && results[x.trim()] != x.trim(); })) {
        return;
    }
    if (scenario.captureAllAfter && captures && captures.length > 0) {
        if (!results[scenario.captureAllAfter.name.trim()]) {
            results[scenario.captureAllAfter.name.trim()] = captures;
        }
        else {
            (_a = results[scenario.captureAllAfter.name.trim()]).push.apply(_a, captures);
        }
    }
    else if (captures.length > 0) {
        var captureAfterN_1 = scenario.captureAfterFirstNonOption ||
            scenario.captureAfterSecondNonOption ||
            scenario.captureAfterThirdNonOption;
        if (captureAfterN_1) {
            if (!results[captureAfterN_1.trim()]) {
                results[captureAfterN_1.trim()] = captures;
            }
            else {
                (_b = results[captureAfterN_1.trim()]).push.apply(_b, captures);
            }
        }
    }
    if (saveLastNonOption) {
        results[scenario.saveLastNonOption] = saveLastNonOption;
    }
    results["$"] = {
        args: args,
        captures: captures,
    };
    return results;
}
function getAliases(scenario) {
    var options = scenario.argv().getOptions();
    var aliases = options.alias;
    Object.keys(aliases).forEach(function (k1) {
        Object.keys(aliases).forEach(function (k2) {
            if (k1 === k2) {
                return;
            }
            if (aliases[k1].length === aliases[k2].length &&
                aliases[k1].every(function (x, i) { return x === aliases[k2][i]; })) {
                aliases[k1].push(k2);
                aliases[k2].push(k1);
            }
        });
    });
    Object.keys(aliases).forEach(function (k) {
        return aliases[k].sort(function (a, b) { return b.length - a.length; });
    });
    return aliases;
}
function matchArgumentAST(scenario, strNode2AST, argName) {
    var _a, _b;
    if (strNode2AST("-" + argName).length > 0)
        return strNode2AST("-" + argName);
    if (strNode2AST("--" + argName).length > 0)
        return strNode2AST("--" + argName);
    var output = [];
    if (argName.length == 1 && (scenario.booleans || scenario.counts)) {
        strNode2ASTLoop: for (var _i = 0, _c = strNode2AST(); _i < _c.length; _i++) {
            var node = _c[_i];
            var nodeStr = node.toString().replace(/^-+/, "");
            for (var i = 0; i < nodeStr.length; i++) {
                if (!((_a = scenario.booleans) === null || _a === void 0 ? void 0 : _a.includes(nodeStr[i])) &&
                    !((_b = scenario.counts) === null || _b === void 0 ? void 0 : _b.includes(nodeStr[i]))) {
                    continue strNode2ASTLoop;
                }
            }
            if (nodeStr.match(new RegExp(argName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))) {
                output.push(node);
            }
        }
    }
    else {
        for (var _d = 0, _e = strNode2AST(); _d < _e.length; _d++) {
            var node = _e[_d];
            if (node
                .toString()
                .match(new RegExp("^--" + argName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"))) {
                output.push(node);
            }
        }
    }
    return output;
}
function annotateAST(scenario, type, argName, aliases, value, cmdAST, strNode2AST) {
    var _a, _b, _c;
    if (((_a = scenario.postProcess) === null || _a === void 0 ? void 0 : _a.filter(function (x) { return x.subCommand && x.subCommand == argName; }).length) > 0) {
        return;
    }
    var options = scenario.argv().getOptions();
    var keyAST = matchArgumentAST(scenario, strNode2AST, argName);
    if (keyAST.length == 0) {
        for (var _i = 0, aliases_1 = aliases; _i < aliases_1.length; _i++) {
            var k = aliases_1[_i];
            keyAST = matchArgumentAST(scenario, strNode2AST, k);
            if (keyAST.length > 0)
                break;
        }
    }
    var valueAST = strNode2AST(value);
    if (valueAST.length == 0 && (value === null || value === void 0 ? void 0 : value.trim) && value.trim().length > 0) {
        for (var _d = 0, _e = strNode2AST(); _d < _e.length; _d++) {
            var node = _e[_d];
            if (node.toString().includes(value)) {
                valueAST.push(node);
            }
        }
    }
    if (keyAST.length > 0 &&
        valueAST.length === keyAST.length &&
        !options.boolean.includes(argName)) {
        for (var i = 0; i < keyAST.length; i++) {
            if (keyAST[i] == valueAST[i] || valueAST[i].hasChild(keyAST[i]))
                continue;
            var isChanged = valueAST[i].isChanged;
            valueAST[i].remove();
            keyAST[i].addChild(valueAST[i]);
            valueAST[i].isChanged = isChanged;
            var p = keyAST[i].position.clone();
            p.lineEnd = Math.max(valueAST[0].position.lineEnd, p.lineEnd);
            p.columnEnd = Math.max(valueAST[0].position.columnEnd, p.columnEnd);
            keyAST[i].setPosition(p);
        }
    }
    if (keyAST.length == 0 && valueAST.length == 0 && !Array.isArray(value)) {
        if (typeof value == "boolean") {
            keyAST = [cmdAST];
        }
        else if (scenario.replaceEmptyArgsWith == undefined ||
            value !== scenario.replaceEmptyArgsWith[0]) {
            console.log("\n", "[ENRICH]", scenario.name, argName, type, value, ": ", Object.keys(strNode2AST).join(" "));
        }
    }
    if (typeof argName == "string" && ((_b = scenario.paths) === null || _b === void 0 ? void 0 : _b.includes(argName))) {
        var annotationName_1 = "".concat(scenario.prefix, "-").concat(type);
        for (var _f = 0, valueAST_1 = valueAST; _f < valueAST_1.length; _f++) {
            var node = valueAST_1[_f];
            if (node.annotations.includes(annotationName_1))
                continue;
            node.annotations.push("BASH-PATH");
            node.annotations.push(annotationName_1);
        }
        for (var _g = 0, keyAST_1 = keyAST; _g < keyAST_1.length; _g++) {
            var node = keyAST_1[_g];
            if (node.annotations.includes(annotationName_1))
                continue;
            node.annotations.push(annotationName_1);
        }
        return;
    }
    else if ((_c = scenario.booleans) === null || _c === void 0 ? void 0 : _c.includes(argName)) {
        var annotationName_2 = "".concat(scenario.prefix, "-F-").concat(type);
        for (var _h = 0, keyAST_2 = keyAST; _h < keyAST_2.length; _h++) {
            var node = keyAST_2[_h];
            if (node.annotations.includes(annotationName_2))
                continue;
            node.annotations.push(annotationName_2);
        }
        return;
    }
    else if (Array.isArray(value) && keyAST.length !== value.length) {
        if (value.length === 0) {
            return;
        }
        if (!type.endsWith("S")) {
            type += "S";
        }
        value.forEach(function (x) {
            var annotation = "".concat(scenario.prefix, "-").concat(type.slice(0, -1));
            for (var _i = 0, _a = strNode2AST(x); _i < _a.length; _i++) {
                var node = _a[_i];
                for (var _b = 0, keyAST_3 = keyAST; _b < keyAST_3.length; _b++) {
                    var key = keyAST_3[_b];
                    if (key == node)
                        continue;
                    var isChanged = node.isChanged;
                    node.remove();
                    key.addChild(node);
                    node.isChanged = isChanged;
                    var p = key.position.clone();
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
    var annotationName = "".concat(scenario.name, "-").concat(type);
    for (var _j = 0, _k = keyAST.concat(valueAST); _j < _k.length; _j++) {
        var node = _k[_j];
        if (!node.annotations.includes(annotationName)) {
            node.annotations.push(annotationName);
        }
    }
    return;
}
function enrichAST(cmdAST, commandArgs, commandArgsString, scenario, parseResult) {
    var _a, _b;
    var argsASTCache = function (nodeStr) {
        if (!nodeStr)
            return commandArgs;
        var output = [];
        for (var i in commandArgsString) {
            if (Array.isArray(nodeStr)) {
                if (nodeStr.includes(commandArgsString[i])) {
                    output.push(commandArgs[i]);
                }
            }
            else if (commandArgsString[i] === nodeStr) {
                output.push(commandArgs[i]);
            }
        }
        return output;
    };
    if (!cmdAST.annotations.includes(scenario.name)) {
        cmdAST.annotations.push(scenario.name);
    }
    var ignores = new Set(scenario.cmd
        .split(/ /g)
        .filter(function (x) { return !x.startsWith("[") && !x.startsWith("<"); })
        .concat(["$", "_"]));
    (_a = scenario.counts) === null || _a === void 0 ? void 0 : _a.filter(function (c) { return parseResult[c] === 0; }).forEach(ignores.add, ignores);
    var aliases = getAliases(scenario);
    Object.keys(parseResult)
        .filter(function (r) { return !ignores.has(r); })
        .forEach(function (argName) {
        if (aliases[argName]) {
            aliases[argName].forEach(ignores.add, ignores);
            return annotateAST(scenario, aliases[argName][0].toUpperCase(), argName, aliases[argName], parseResult[argName], cmdAST, argsASTCache);
        }
        else if (Object.keys(aliases).some(function (x) { return aliases[x].includes(argName) && parseResult[x]; })) {
            return;
        }
        else {
            ignores.add(argName);
            return annotateAST(scenario, argName.toUpperCase(), argName, [], parseResult[argName], cmdAST, argsASTCache);
        }
    });
    if (scenario.postProcess) {
        for (var _i = 0, _c = scenario.postProcess; _i < _c.length; _i++) {
            var p = _c[_i];
            if (p.tagLastElement &&
                parseResult[p.tagLastElement.source] &&
                parseResult[p.tagLastElement.source].length) {
                var v = (_b = parseResult[p.tagLastElement.source]) === null || _b === void 0 ? void 0 : _b.at(-1);
                for (var _d = 0, _e = argsASTCache(v); _d < _e.length; _d++) {
                    var node = _e[_d];
                    if (!node.annotations.includes(p.tagLastElement.tag)) {
                        node.annotations.push(p.tagLastElement.tag);
                    }
                }
            }
            else if (p.subCommand) {
                var v = parseResult[p.subCommand];
                if (v) {
                    var firstNode = argsASTCache(v[0])[0];
                    var isChanged = firstNode.isChanged;
                    var lastNode = argsASTCache(v[v.length - 1]).at(-1);
                    if (!lastNode || !firstNode)
                        return;
                    var p_1 = firstNode.position.clone();
                    p_1.columnEnd = lastNode.position.columnEnd;
                    p_1.lineEnd = lastNode.position.lineEnd;
                    var command = new dinghy_1.nodeType.BashCommand()
                        .setPosition(p_1)
                        .addChild(new dinghy_1.nodeType.BashCommandCommand()
                        .addChild(firstNode.children)
                        .setPosition(firstNode.position));
                    for (var i = 1; i < v.length; i++) {
                        if (argsASTCache(v[i])[0]) {
                            command.addChild(new dinghy_1.nodeType.BashCommandArgs()
                                .addChild(argsASTCache(v[i])[0].children)
                                .setPosition(argsASTCache(v[i])[0].position));
                            argsASTCache(v[i])[0].remove();
                        }
                    }
                    firstNode.replace(command);
                    command.traverse(function (n) {
                        n.isChanged = false;
                        return true;
                    }, { includeSelf: true });
                    command.isChanged = isChanged;
                }
            }
        }
    }
}
function enrich(root) {
    root.traverse(function (node) {
        var _a;
        if (node instanceof dinghy_1.nodeType.BashCommand) {
            var commandAST = node.command;
            if (!commandAST)
                return true;
            var command_1 = (_a = commandAST
                .getElement(dinghy_1.nodeType.BashLiteral)) === null || _a === void 0 ? void 0 : _a.value.replace(/^\/bin\//, "");
            if (!command_1)
                return true;
            var commandArgs_1 = node.args.filter(function (e) {
                return e.traverse(function (e) {
                    var _a;
                    if (e instanceof dinghy_1.nodeType.DockerOpsValueNode &&
                        ((_a = e.value) === null || _a === void 0 ? void 0 : _a.trim()) == "--")
                        return false;
                }, { includeSelf: true });
            });
            var commandArgsString_1 = commandArgs_1.map(function (c) {
                return c.toString(false).trim();
            });
            enrichers_1.enrichers
                .filter(function (e) { return e.providerFor.includes(command_1); })
                .forEach(function (e) {
                for (var _i = 0, _a = e.scenarios; _i < _a.length; _i++) {
                    var scenario = _a[_i];
                    try {
                        var parseResult = parseArgWithScenario(commandArgsString_1, scenario);
                        if (!parseResult)
                            continue;
                        enrichAST(node, commandArgs_1, commandArgsString_1, scenario, parseResult);
                        break;
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            });
        }
    }, { includeSelf: true });
    return root;
}
exports.enrich = enrich;
//# sourceMappingURL=enricher.js.map