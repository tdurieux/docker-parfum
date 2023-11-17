"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["python", "python2", "python2.7", "python3", "python3.4", "python.exe"],
    categories: ["DEVELOPMENT"],
    prefix: "SC-PYTHON",
    scenarios: [
        {
            captureAfterFirstNonOption: "args",
            captureAllAfter: { "match": ["-m"], "name": "args" },
            mustHave: ["-m"],
            postProcess: [{ "subCommand": "args" }],
            cmd: "$0 [args...]",
            name: "SC-PYTHON-MODULE",
            prefix: "SC-PYTHON",
            booleans: ["b", "B", "d", "E", "i", "I", "O", "OO", "P", "q", "s", "S", "u", "v", "V", "version", "x", "h", "help"],
            strings: ["c", "m", "W", "X"],
            argv: function () {
                return yargs()
                    .describe("python,python2,python2.7,python3,python3.4,python.exe", "SC-PYTHON")
                    .help(false)
                    .version(false)
                    .exitProcess(false)
                    .showHelpOnFail(false)
                    .parserConfiguration({
                    "short-option-groups": true,
                    "boolean-negation": false,
                    "camel-case-expansion": false,
                    "parse-numbers": false,
                })
                    .command("$0 [args...]", "SC-PYTHON-MODULE")
                    .option("b", { "type": "boolean" })
                    .option("B", { "type": "boolean" })
                    .option("d", { "type": "boolean" })
                    .option("E", { "type": "boolean" })
                    .option("i", { "type": "boolean" })
                    .option("I", { "type": "boolean" })
                    .option("O", { "type": "boolean" })
                    .option("OO", { "type": "boolean" })
                    .option("P", { "type": "boolean" })
                    .option("q", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("u", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("V", { "alias": "version", "type": "boolean" })
                    .option("x", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("c", { "type": "string" })
                    .option("m", { "type": "string" })
                    .option("W", { "type": "string" })
                    .option("X", { "type": "string" });
            }
        },
        {
            captureAfterFirstNonOption: "args",
            fixupNonSpacedArgs: true,
            cmd: "$0",
            name: "SC-PYTHON",
            prefix: "SC-PYTHON",
            booleans: ["b", "B", "d", "E", "i", "I", "O", "OO", "P", "q", "s", "S", "u", "v", "V", "version", "x", "h", "help"],
            strings: ["c", "m", "W", "X"],
            argv: function () {
                return yargs()
                    .describe("python,python2,python2.7,python3,python3.4,python.exe", "SC-PYTHON")
                    .help(false)
                    .version(false)
                    .exitProcess(false)
                    .showHelpOnFail(false)
                    .parserConfiguration({
                    "short-option-groups": true,
                    "boolean-negation": false,
                    "camel-case-expansion": false,
                    "parse-numbers": false,
                })
                    .command("$0", "SC-PYTHON")
                    .option("b", { "type": "boolean" })
                    .option("B", { "type": "boolean" })
                    .option("d", { "type": "boolean" })
                    .option("E", { "type": "boolean" })
                    .option("i", { "type": "boolean" })
                    .option("I", { "type": "boolean" })
                    .option("O", { "type": "boolean" })
                    .option("OO", { "type": "boolean" })
                    .option("P", { "type": "boolean" })
                    .option("q", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("u", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("V", { "alias": "version", "type": "boolean" })
                    .option("x", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("c", { "type": "string" })
                    .option("m", { "type": "string" })
                    .option("W", { "type": "string" })
                    .option("X", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=python.js.map