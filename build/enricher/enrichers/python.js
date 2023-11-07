"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["python", "python2", "python2.7", "python3", "python3.4"],
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
            booleans: ["B", "d", "E", "i", "O", "R", "s", "S", "t", "u", "v", "V", "version", "x", "3", "h", "help"],
            argv: function () {
                return yargs()
                    .describe("python,python2,python2.7,python3,python3.4", "SC-PYTHON")
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
                    .option("B", { "type": "boolean" })
                    .option("d", { "type": "boolean" })
                    .option("E", { "type": "boolean" })
                    .option("i", { "type": "boolean" })
                    .option("O", { "type": "boolean" })
                    .option("R", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("t", { "type": "boolean" })
                    .option("u", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("V", { "alias": "version", "type": "boolean" })
                    .option("x", { "type": "boolean" })
                    .option("3", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("c", { "type": "string" })
                    .option("m", { "type": "string" })
                    .option("q", { "type": "string" });
            }
        },
        {
            captureAfterFirstNonOption: "args",
            fixupNonSpacedArgs: true,
            cmd: "$0",
            name: "SC-PYTHON",
            prefix: "SC-PYTHON",
            booleans: ["B", "d", "E", "i", "O", "R", "s", "S", "t", "u", "v", "V", "version", "x", "3", "h", "help"],
            argv: function () {
                return yargs()
                    .describe("python,python2,python2.7,python3,python3.4", "SC-PYTHON")
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
                    .option("B", { "type": "boolean" })
                    .option("d", { "type": "boolean" })
                    .option("E", { "type": "boolean" })
                    .option("i", { "type": "boolean" })
                    .option("O", { "type": "boolean" })
                    .option("R", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("t", { "type": "boolean" })
                    .option("u", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("V", { "alias": "version", "type": "boolean" })
                    .option("x", { "type": "boolean" })
                    .option("3", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("c", { "type": "string" })
                    .option("m", { "type": "string" })
                    .option("q", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=python.js.map