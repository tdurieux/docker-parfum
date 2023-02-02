"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["bash"],
    prefix: "SC-BASH",
    scenarios: [
        {
            captureAfterFirstNonOption: "args",
            captureAllAfter: { "match": ["-c"], "name": "args" },
            postProcess: [{ "subCommand": "args" }],
            cmd: "$0",
            name: "SC-BASH",
            prefix: "SC-BASH",
            paths: ["init-file", "rcfile"],
            booleans: ["i", "L", "login", "r", "s", "D", "noediting", "noprofile", "norc", "posix", "restricted", "v", "verbose", "version", "rpm-requires", "debugger", "dump-po-strings", "dump-strings", "help"],
            argv: function () {
                return yargs()
                    .describe("bash", "SC-BASH")
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
                    .command("$0", "SC-BASH")
                    .option("i", { "type": "boolean" })
                    .option("L", { "alias": "login", "type": "boolean" })
                    .option("r", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("D", { "type": "boolean" })
                    .option("noediting", { "type": "boolean" })
                    .option("noprofile", { "type": "boolean" })
                    .option("norc", { "type": "boolean" })
                    .option("posix", { "type": "boolean" })
                    .option("restricted", { "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("rpm-requires", { "type": "boolean" })
                    .option("debugger", { "type": "boolean" })
                    .option("dump-po-strings", { "type": "boolean" })
                    .option("dump-strings", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("c", { "type": "string" })
                    .option("init-file", { "type": "string" })
                    .option("rcfile", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=bash.js.map