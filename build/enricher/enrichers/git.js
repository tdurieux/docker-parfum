"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["git"],
    prefix: "SC-GIT",
    scenarios: [
        {
            cmd: "$0 submodule init",
            name: "SC-GIT-SUBMODULE-INIT",
            prefix: "SC-GIT",
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 submodule init", "SC-GIT-SUBMODULE-INIT");
            }
        },
        {
            cmd: "$0 submodule update",
            name: "SC-GIT-SUBMODULE-UPDATE",
            prefix: "SC-GIT",
            booleans: ["init", "recursive"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 submodule update", "SC-GIT-SUBMODULE-UPDATE")
                    .option("init", { "type": "boolean" })
                    .option("recursive", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 pull",
            name: "SC-GIT-PULL",
            prefix: "SC-GIT",
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 pull", "SC-GIT-PULL");
            }
        },
        {
            cmd: "$0 remote set-url <target> <url>",
            name: "SC-GIT-REMOTE-SET-URL",
            prefix: "SC-GIT",
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 remote set-url <target> <url>", "SC-GIT-REMOTE-SET-URL");
            }
        },
        {
            cmd: "$0 reset <target>",
            name: "SC-GIT-RESET",
            prefix: "SC-GIT",
            booleans: ["hard"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 reset <target>", "SC-GIT-RESET")
                    .option("hard", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 rev-parse <target>",
            name: "SC-GIT-REV-PARSE",
            prefix: "SC-GIT",
            booleans: ["short"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 rev-parse <target>", "SC-GIT-REV-PARSE")
                    .option("short", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 clone <url> [directory]",
            name: "SC-GIT-CLONE",
            prefix: "SC-GIT",
            booleans: ["single-branch", "q", "quiet", "recursive", "no-recurse-submodules", "recurse-submodules", "no-checkout"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 clone <url> [directory]", "SC-GIT-CLONE")
                    .option("single-branch", { "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("recursive", { "type": "boolean" })
                    .option("no-recurse-submodules", { "type": "boolean" })
                    .option("recurse-submodules", { "type": "boolean" })
                    .option("no-checkout", { "type": "boolean" })
                    .option("b", { "alias": "branch", "type": "string" })
                    .option("depth", { "type": "string" });
            }
        },
        {
            cmd: "$0 init",
            name: "SC-GIT-INIT",
            prefix: "SC-GIT",
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 init", "SC-GIT-INIT");
            }
        },
        {
            cmd: "$0 checkout <target>",
            name: "SC-GIT-CHECKOUT",
            prefix: "SC-GIT",
            booleans: ["track", "q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 checkout <target>", "SC-GIT-CHECKOUT")
                    .option("track", { "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" });
            }
        },
        {
            cmd: "$0 gc",
            name: "SC-GIT-GC",
            prefix: "SC-GIT",
            booleans: ["aggressive", "p", "prune"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 gc", "SC-GIT-GC")
                    .option("aggressive", { "type": "boolean" })
                    .option("p", { "alias": "prune", "type": "boolean" });
            }
        },
        {
            cmd: "$0 config <setting> <value>",
            name: "SC-GIT-GC",
            prefix: "SC-GIT",
            booleans: ["global", "system"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 config <setting> <value>", "SC-GIT-GC")
                    .option("global", { "type": "boolean" })
                    .option("system", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 fetch [args...]",
            name: "SC-GIT-FETCH",
            prefix: "SC-GIT",
            booleans: ["q", "quiet", "tags", "f", "force", "no-recurse-submodules", "recurse-submodules", "all", "p", "prune"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 fetch [args...]", "SC-GIT-FETCH")
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("tags", { "type": "boolean" })
                    .option("f", { "alias": "force", "type": "boolean" })
                    .option("no-recurse-submodules", { "type": "boolean" })
                    .option("recurse-submodules", { "type": "boolean" })
                    .option("all", { "type": "boolean" })
                    .option("p", { "alias": "prune", "type": "boolean" });
            }
        },
        {
            cmd: "$0 describe",
            name: "SC-GIT-DESCRIBE",
            prefix: "SC-GIT",
            booleans: ["always", "tags"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 describe", "SC-GIT-DESCRIBE")
                    .option("always", { "type": "boolean" })
                    .option("tags", { "type": "boolean" })
                    .option("match", { "type": "string" })
                    .option("dirty", { "type": "string" });
            }
        },
        {
            cmd: "$0 commit",
            name: "SC-GIT-COMMIT",
            prefix: "SC-GIT",
            booleans: ["allow-empty", "allow-empty-message", "no-edit"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 commit", "SC-GIT-COMMIT")
                    .option("allow-empty", { "type": "boolean" })
                    .option("allow-empty-message", { "type": "boolean" })
                    .option("no-edit", { "type": "boolean" })
                    .option("m", { "alias": "message", "type": "string" });
            }
        },
        {
            cmd: "$0 cat-file <file>",
            name: "SC-GIT-CAT-FILE",
            prefix: "SC-GIT",
            booleans: ["t", "s", "e", "p"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 cat-file <file>", "SC-GIT-CAT-FILE")
                    .option("t", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("e", { "type": "boolean" })
                    .option("p", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 clean",
            name: "SC-GIT-CLEAN",
            prefix: "SC-GIT",
            booleans: ["d", "", "f", "force", "i", "interactive", "n", "dry-run", "q", "quiet", "x", "X"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0 clean", "SC-GIT-CLEAN")
                    .option("d", { "alias": "", "type": "boolean" })
                    .option("f", { "alias": "force", "type": "boolean" })
                    .option("i", { "alias": "interactive", "type": "boolean" })
                    .option("n", { "alias": "dry-run", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("x", { "type": "boolean" })
                    .option("X", { "type": "boolean" })
                    .option("e", { "alias": "exclude", "type": "array" });
            }
        },
        {
            cmd: "$0",
            name: "SC-GIT",
            prefix: "SC-GIT",
            booleans: ["version", "help"],
            argv: function () {
                return yargs()
                    .describe("git", "SC-GIT")
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
                    .command("$0", "SC-GIT")
                    .option("version", { "type": "boolean" })
                    .option("help", { "type": "boolean" });
            }
        },
    ]
};
//# sourceMappingURL=git.js.map