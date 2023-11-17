"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["bundle"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-BUNDLE",
    scenarios: [
        {
            cmd: "$0 install",
            name: "SC-BUNDLE-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-BUNDLE",
            paths: ["path PATH", "gemfile=GEMFILE", "clean", "deployment", "frozen", "full-index", "local", "no-cache", "no-prune", "quiet", "redownload", "shebang", "system"],
            booleans: ["no-color", "V", "verbose"],
            strings: ["r", "retry", "binstubs", "standalone", "trust-policy", "with", "without", "jobs", "retry"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("bundle", "SC-BUNDLE")
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
                    .command("$0 install", "SC-BUNDLE-INSTALL")
                    .option("no-color", { "type": "boolean" })
                    .option("V", { "alias": "verbose", "type": "boolean" })
                    .option("r", { "alias": "retry", "type": "string" })
                    .option("binstubs", { "type": "string" })
                    .option("standalone", { "type": "string" })
                    .option("trust-policy", { "type": "string" })
                    .option("with", { "type": "string" })
                    .option("without", { "type": "string" })
                    .option("jobs", { "type": "string" })
                    .option("retry", { "type": "string" })
                    .option("path PATH", { "type": "string" })
                    .option("gemfile=GEMFILE", { "type": "string" })
                    .option("clean", { "type": "string" })
                    .option("deployment", { "type": "string" })
                    .option("frozen", { "type": "string" })
                    .option("full-index", { "type": "string" })
                    .option("local", { "type": "string" })
                    .option("no-cache", { "type": "string" })
                    .option("no-prune", { "type": "string" })
                    .option("quiet", { "type": "string" })
                    .option("redownload", { "type": "string" })
                    .option("shebang", { "type": "string" })
                    .option("system", { "type": "string" });
            }
        },
        {
            cmd: "$0 update",
            name: "SC-BUNDLE-UPDATE",
            categories: ["UPDATE_PACKAGES"],
            prefix: "SC-BUNDLE",
            paths: [],
            booleans: ["no-color", "V", "verbose"],
            strings: ["r", "retry"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("bundle", "SC-BUNDLE")
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
                    .command("$0 update", "SC-BUNDLE-UPDATE")
                    .option("no-color", { "type": "boolean" })
                    .option("V", { "alias": "verbose", "type": "boolean" })
                    .option("r", { "alias": "retry", "type": "string" });
            }
        },
        {
            cmd: "$0 cache",
            name: "SC-BUNDLE-CACHE",
            prefix: "SC-BUNDLE",
            paths: [],
            booleans: ["no-color", "V", "verbose"],
            strings: ["r", "retry"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("bundle", "SC-BUNDLE")
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
                    .command("$0 cache", "SC-BUNDLE-CACHE")
                    .option("no-color", { "type": "boolean" })
                    .option("V", { "alias": "verbose", "type": "boolean" })
                    .option("r", { "alias": "retry", "type": "string" });
            }
        },
        {
            cmd: "$0 exec",
            name: "SC-BUNDLE-EXEC",
            prefix: "SC-BUNDLE",
            paths: [],
            booleans: ["no-color", "V", "verbose"],
            strings: ["r", "retry"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("bundle", "SC-BUNDLE")
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
                    .command("$0 exec", "SC-BUNDLE-EXEC")
                    .option("no-color", { "type": "boolean" })
                    .option("V", { "alias": "verbose", "type": "boolean" })
                    .option("r", { "alias": "retry", "type": "string" });
            }
        },
        {
            cmd: "$0 config",
            name: "SC-BUNDLE-config",
            prefix: "SC-BUNDLE",
            paths: [],
            booleans: ["no-color", "V", "verbose"],
            strings: ["r", "retry"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("bundle", "SC-BUNDLE")
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
                    .command("$0 config", "SC-BUNDLE-config")
                    .option("no-color", { "type": "boolean" })
                    .option("V", { "alias": "verbose", "type": "boolean" })
                    .option("r", { "alias": "retry", "type": "string" });
            }
        },
        {
            cmd: "$0 help",
            name: "SC-BUNDLE-HELP",
            prefix: "SC-BUNDLE",
            paths: [],
            booleans: ["no-color", "V", "verbose"],
            strings: ["r", "retry"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("bundle", "SC-BUNDLE")
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
                    .command("$0 help", "SC-BUNDLE-HELP")
                    .option("no-color", { "type": "boolean" })
                    .option("V", { "alias": "verbose", "type": "boolean" })
                    .option("r", { "alias": "retry", "type": "string" });
            }
        },
        {
            cmd: "$0 add <name>",
            name: "SC-BUNDLE-ADD",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-BUNDLE",
            paths: [],
            booleans: ["no-color", "V", "verbose"],
            strings: ["r", "retry"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("bundle", "SC-BUNDLE")
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
                    .command("$0 add <name>", "SC-BUNDLE-ADD")
                    .option("no-color", { "type": "boolean" })
                    .option("V", { "alias": "verbose", "type": "boolean" })
                    .option("r", { "alias": "retry", "type": "string" });
            }
        },
        {
            cmd: "$0 remove <name>",
            name: "SC-BUNDLE-REMOVE",
            categories: ["UNINSTALL_PACKAGES"],
            prefix: "SC-BUNDLE",
            paths: [],
            booleans: ["no-color", "V", "verbose"],
            strings: ["r", "retry"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("bundle", "SC-BUNDLE")
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
                    .command("$0 remove <name>", "SC-BUNDLE-REMOVE")
                    .option("no-color", { "type": "boolean" })
                    .option("V", { "alias": "verbose", "type": "boolean" })
                    .option("r", { "alias": "retry", "type": "string" });
            }
        },
        {
            cmd: "$0 exec",
            name: "SC-BUNDLE-EXEC",
            prefix: "SC-BUNDLE",
            paths: [],
            booleans: ["no-color", "V", "verbose"],
            strings: ["r", "retry"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("bundle", "SC-BUNDLE")
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
                    .command("$0 exec", "SC-BUNDLE-EXEC")
                    .option("no-color", { "type": "boolean" })
                    .option("V", { "alias": "verbose", "type": "boolean" })
                    .option("r", { "alias": "retry", "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=bundle.js.map