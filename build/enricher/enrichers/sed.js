"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["sed"],
    prefix: "SC-SED",
    scenarios: [
        {
            rejectIf: ["-e", "--expression", "-f", "--file"],
            cmd: "$0 <expression> [paths...]",
            name: "SC-SED",
            prefix: "SC-SED",
            paths: ["f", "file"],
            booleans: ["i", "in-place", "posix", "n", "quiet", "n", "silent", "s", "separate", "sandbox", "u", "unbuffered", "z", "null-data", "help", "version", "E", "regexp-extended", "E", "r"],
            argv: function () {
                return yargs()
                    .describe("sed", "SC-SED")
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
                    .command("$0 <expression> [paths...]", "SC-SED")
                    .option("i", { "alias": "in-place", "type": "boolean" })
                    .option("posix", { "type": "boolean" })
                    .option("n", { "alias": "quiet", "type": "boolean" })
                    .option("n", { "alias": "silent", "type": "boolean" })
                    .option("s", { "alias": "separate", "type": "boolean" })
                    .option("sandbox", { "type": "boolean" })
                    .option("u", { "alias": "unbuffered", "type": "boolean" })
                    .option("z", { "alias": "null-data", "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("E", { "alias": "regexp-extended", "type": "boolean" })
                    .option("E", { "alias": "r", "type": "boolean" })
                    .option("f", { "alias": "file", "type": "string" })
                    .option("e", { "alias": "expression", "type": "array" });
            }
        },
        {
            stealFromArrayFor: { "array": "e", "for": "paths" },
            mustHave: ["-e"],
            cmd: "$0 [paths...]",
            name: "SC-SED",
            prefix: "SC-SED",
            paths: ["f", "file"],
            booleans: ["i", "in-place", "posix", "n", "quiet", "n", "silent", "s", "separate", "sandbox", "u", "unbuffered", "z", "null-data", "help", "version", "E", "regexp-extended", "E", "r"],
            argv: function () {
                return yargs()
                    .describe("sed", "SC-SED")
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
                    .command("$0 [paths...]", "SC-SED")
                    .option("i", { "alias": "in-place", "type": "boolean" })
                    .option("posix", { "type": "boolean" })
                    .option("n", { "alias": "quiet", "type": "boolean" })
                    .option("n", { "alias": "silent", "type": "boolean" })
                    .option("s", { "alias": "separate", "type": "boolean" })
                    .option("sandbox", { "type": "boolean" })
                    .option("u", { "alias": "unbuffered", "type": "boolean" })
                    .option("z", { "alias": "null-data", "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("E", { "alias": "regexp-extended", "type": "boolean" })
                    .option("E", { "alias": "r", "type": "boolean" })
                    .option("f", { "alias": "file", "type": "string" })
                    .option("e", { "alias": "expression", "type": "array" });
            }
        },
        {
            stealFromArrayFor: { "array": "expression", "for": "paths" },
            mustHave: ["--expression"],
            cmd: "$0 [paths...]",
            name: "SC-SED",
            prefix: "SC-SED",
            paths: ["f", "file"],
            booleans: ["i", "in-place", "posix", "n", "quiet", "n", "silent", "s", "separate", "sandbox", "u", "unbuffered", "z", "null-data", "help", "version", "E", "regexp-extended", "E", "r"],
            argv: function () {
                return yargs()
                    .describe("sed", "SC-SED")
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
                    .command("$0 [paths...]", "SC-SED")
                    .option("i", { "alias": "in-place", "type": "boolean" })
                    .option("posix", { "type": "boolean" })
                    .option("n", { "alias": "quiet", "type": "boolean" })
                    .option("n", { "alias": "silent", "type": "boolean" })
                    .option("s", { "alias": "separate", "type": "boolean" })
                    .option("sandbox", { "type": "boolean" })
                    .option("u", { "alias": "unbuffered", "type": "boolean" })
                    .option("z", { "alias": "null-data", "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("E", { "alias": "regexp-extended", "type": "boolean" })
                    .option("E", { "alias": "r", "type": "boolean" })
                    .option("f", { "alias": "file", "type": "string" })
                    .option("e", { "alias": "expression", "type": "array" });
            }
        },
        {
            mustHave: ["-f"],
            cmd: "$0 [paths...]",
            name: "SC-SED",
            prefix: "SC-SED",
            paths: ["f", "file"],
            booleans: ["i", "in-place", "posix", "n", "quiet", "n", "silent", "s", "separate", "sandbox", "u", "unbuffered", "z", "null-data", "help", "version", "E", "regexp-extended", "E", "r"],
            argv: function () {
                return yargs()
                    .describe("sed", "SC-SED")
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
                    .command("$0 [paths...]", "SC-SED")
                    .option("i", { "alias": "in-place", "type": "boolean" })
                    .option("posix", { "type": "boolean" })
                    .option("n", { "alias": "quiet", "type": "boolean" })
                    .option("n", { "alias": "silent", "type": "boolean" })
                    .option("s", { "alias": "separate", "type": "boolean" })
                    .option("sandbox", { "type": "boolean" })
                    .option("u", { "alias": "unbuffered", "type": "boolean" })
                    .option("z", { "alias": "null-data", "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("E", { "alias": "regexp-extended", "type": "boolean" })
                    .option("E", { "alias": "r", "type": "boolean" })
                    .option("f", { "alias": "file", "type": "string" })
                    .option("e", { "alias": "expression", "type": "array" });
            }
        },
        {
            mustHave: ["--file"],
            cmd: "$0 [paths...]",
            name: "SC-SED",
            prefix: "SC-SED",
            paths: ["f", "file"],
            booleans: ["i", "in-place", "posix", "n", "quiet", "n", "silent", "s", "separate", "sandbox", "u", "unbuffered", "z", "null-data", "help", "version", "E", "regexp-extended", "E", "r"],
            argv: function () {
                return yargs()
                    .describe("sed", "SC-SED")
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
                    .command("$0 [paths...]", "SC-SED")
                    .option("i", { "alias": "in-place", "type": "boolean" })
                    .option("posix", { "type": "boolean" })
                    .option("n", { "alias": "quiet", "type": "boolean" })
                    .option("n", { "alias": "silent", "type": "boolean" })
                    .option("s", { "alias": "separate", "type": "boolean" })
                    .option("sandbox", { "type": "boolean" })
                    .option("u", { "alias": "unbuffered", "type": "boolean" })
                    .option("z", { "alias": "null-data", "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("E", { "alias": "regexp-extended", "type": "boolean" })
                    .option("E", { "alias": "r", "type": "boolean" })
                    .option("f", { "alias": "file", "type": "string" })
                    .option("e", { "alias": "expression", "type": "array" });
            }
        },
    ]
};
//# sourceMappingURL=sed.js.map