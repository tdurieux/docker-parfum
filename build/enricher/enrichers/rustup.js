"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["rustup"],
    categories: ["DEVELOPMENT"],
    prefix: "SC-RUSTUP",
    scenarios: [
        {
            cmd: "$0",
            name: "SC-RUSTUP",
            prefix: "SC-RUSTUP",
            booleans: ["v", "verbose", "q", "quiet", "h", "help", "V", "version"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0", "SC-RUSTUP")
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("V", { "alias": "version", "type": "boolean" });
            }
        },
        {
            cmd: "$0 show",
            name: "SC-RUSTUP-SHOW",
            prefix: "SC-RUSTUP",
            booleans: ["v", "verbose", "h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 show", "SC-RUSTUP-SHOW")
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 show active-toolchain",
            name: "SC-RUSTUP-SHOW-ACTIVE-TOOLCHAIN",
            prefix: "SC-RUSTUP",
            booleans: ["v", "verbose", "h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 show active-toolchain", "SC-RUSTUP-SHOW-ACTIVE-TOOLCHAIN")
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 show home",
            name: "SC-RUSTUP-SHOW-HOME",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 show home", "SC-RUSTUP-SHOW-HOME")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 show profile",
            name: "SC-RUSTUP-SHOW-PROFILE",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 show profile", "SC-RUSTUP-SHOW-PROFILE")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 show help",
            name: "SC-RUSTUP-SHOW-HELP",
            prefix: "SC-RUSTUP",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 show help", "SC-RUSTUP-SHOW-HELP");
            }
        },
        {
            cmd: "$0 update",
            name: "SC-RUSTUP-UPDATE",
            prefix: "SC-RUSTUP",
            booleans: ["no-self-update", "force", "force-non-host", "h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 update", "SC-RUSTUP-UPDATE")
                    .option("no-self-update", { "type": "boolean" })
                    .option("force", { "type": "boolean" })
                    .option("force-non-host", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 check",
            name: "SC-RUSTUP-CHECK",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 check", "SC-RUSTUP-CHECK")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 default",
            name: "SC-RUSTUP-DEFAULT",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 default", "SC-RUSTUP-DEFAULT")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 toolchain",
            name: "SC-RUSTUP-TOOLCHAIN",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 toolchain", "SC-RUSTUP-TOOLCHAIN")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 toolchain list",
            name: "SC-RUSTUP-TOOLCHAIN-LIST",
            prefix: "SC-RUSTUP",
            booleans: ["v", "verbose", "h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 toolchain list", "SC-RUSTUP-TOOLCHAIN-LIST")
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 toolchain install",
            name: "SC-RUSTUP-TOOLCHAIN-INSTALL",
            prefix: "SC-RUSTUP",
            booleans: ["no-self-update", "force", "allow-downgrade", "force-non-host", "h", "help"],
            strings: ["profile", "c", "component", "t", "target"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 toolchain install", "SC-RUSTUP-TOOLCHAIN-INSTALL")
                    .option("no-self-update", { "type": "boolean" })
                    .option("force", { "type": "boolean" })
                    .option("allow-downgrade", { "type": "boolean" })
                    .option("force-non-host", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("profile", { "type": "string" })
                    .option("c", { "alias": "component", "type": "string" })
                    .option("t", { "alias": "target", "type": "string" });
            }
        },
        {
            cmd: "$0 toolchain uninstall",
            name: "SC-RUSTUP-TOOLCHAIN-UNINSTALL",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 toolchain uninstall", "SC-RUSTUP-TOOLCHAIN-UNINSTALL")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 toolchain link",
            name: "SC-RUSTUP-TOOLCHAIN-LINK",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 toolchain link", "SC-RUSTUP-TOOLCHAIN-LINK")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 toolchain help",
            name: "SC-RUSTUP-TOOLCHAIN-HELP",
            prefix: "SC-RUSTUP",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 toolchain help", "SC-RUSTUP-TOOLCHAIN-HELP");
            }
        },
        {
            cmd: "$0 target",
            name: "SC-RUSTUP-TARGET",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 target", "SC-RUSTUP-TARGET")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 target list",
            name: "SC-RUSTUP-TARGET-LIST",
            prefix: "SC-RUSTUP",
            booleans: ["installed", "h", "help"],
            strings: ["toolchain"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 target list", "SC-RUSTUP-TARGET-LIST")
                    .option("installed", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("toolchain", { "type": "string" });
            }
        },
        {
            cmd: "$0 target add",
            name: "SC-RUSTUP-TARGET-ADD",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            strings: ["toolchain"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 target add", "SC-RUSTUP-TARGET-ADD")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("toolchain", { "type": "string" });
            }
        },
        {
            cmd: "$0 target remove",
            name: "SC-RUSTUP-TARGET-REMOVE",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            strings: ["toolchain"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 target remove", "SC-RUSTUP-TARGET-REMOVE")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("toolchain", { "type": "string" });
            }
        },
        {
            cmd: "$0 target help",
            name: "SC-RUSTUP-TARGET-HELP",
            prefix: "SC-RUSTUP",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 target help", "SC-RUSTUP-TARGET-HELP");
            }
        },
        {
            cmd: "$0 component",
            name: "SC-RUSTUP-COMPONENT",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 component", "SC-RUSTUP-COMPONENT")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 component list",
            name: "SC-RUSTUP-COMPONENT-LIST",
            prefix: "SC-RUSTUP",
            booleans: ["installed", "h", "help"],
            strings: ["toolchain"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 component list", "SC-RUSTUP-COMPONENT-LIST")
                    .option("installed", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("toolchain", { "type": "string" });
            }
        },
        {
            cmd: "$0 component add",
            name: "SC-RUSTUP-COMPONENT-ADD",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            strings: ["toolchain", "target"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 component add", "SC-RUSTUP-COMPONENT-ADD")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("toolchain", { "type": "string" })
                    .option("target", { "type": "string" });
            }
        },
        {
            cmd: "$0 component remove",
            name: "SC-RUSTUP-COMPONENT-REMOVE",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            strings: ["toolchain", "target"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 component remove", "SC-RUSTUP-COMPONENT-REMOVE")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("toolchain", { "type": "string" })
                    .option("target", { "type": "string" });
            }
        },
        {
            cmd: "$0 component help",
            name: "SC-RUSTUP-COMPONENT-HELP",
            prefix: "SC-RUSTUP",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 component help", "SC-RUSTUP-COMPONENT-HELP");
            }
        },
        {
            cmd: "$0 override",
            name: "SC-RUSTUP-OVERRIDE",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 override", "SC-RUSTUP-OVERRIDE")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 override list",
            name: "SC-RUSTUP-OVERRIDE-LIST",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 override list", "SC-RUSTUP-OVERRIDE-LIST")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 override set",
            name: "SC-RUSTUP-OVERRIDE-SET",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            strings: ["path"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 override set", "SC-RUSTUP-OVERRIDE-SET")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("path", { "type": "string" });
            }
        },
        {
            cmd: "$0 override unset",
            name: "SC-RUSTUP-OVERRIDE-UNSET",
            prefix: "SC-RUSTUP",
            booleans: ["nonexistent", "h", "help"],
            strings: ["path"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 override unset", "SC-RUSTUP-OVERRIDE-UNSET")
                    .option("nonexistent", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("path", { "type": "string" });
            }
        },
        {
            cmd: "$0 override help",
            name: "SC-RUSTUP-OVERRIDE-HELP",
            prefix: "SC-RUSTUP",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 override help", "SC-RUSTUP-OVERRIDE-HELP");
            }
        },
        {
            cmd: "$0 run",
            name: "SC-RUSTUP-RUN",
            prefix: "SC-RUSTUP",
            booleans: ["install", "h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 run", "SC-RUSTUP-RUN")
                    .option("install", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 which",
            name: "SC-RUSTUP-WHICH",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            strings: ["toolchain"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 which", "SC-RUSTUP-WHICH")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("toolchain", { "type": "string" });
            }
        },
        {
            cmd: "$0 doc",
            name: "SC-RUSTUP-DOC",
            prefix: "SC-RUSTUP",
            booleans: ["path", "alloc", "book", "cargo", "core", "edition-guide", "nomicon", "proc_macro", "reference", "rust-by-example", "rustc", "rustdoc", "std", "test", "unstable-book", "embedded-book", "h", "help"],
            strings: ["toolchain"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 doc", "SC-RUSTUP-DOC")
                    .option("path", { "type": "boolean" })
                    .option("alloc", { "type": "boolean" })
                    .option("book", { "type": "boolean" })
                    .option("cargo", { "type": "boolean" })
                    .option("core", { "type": "boolean" })
                    .option("edition-guide", { "type": "boolean" })
                    .option("nomicon", { "type": "boolean" })
                    .option("proc_macro", { "type": "boolean" })
                    .option("reference", { "type": "boolean" })
                    .option("rust-by-example", { "type": "boolean" })
                    .option("rustc", { "type": "boolean" })
                    .option("rustdoc", { "type": "boolean" })
                    .option("std", { "type": "boolean" })
                    .option("test", { "type": "boolean" })
                    .option("unstable-book", { "type": "boolean" })
                    .option("embedded-book", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("toolchain", { "type": "string" });
            }
        },
        {
            cmd: "$0 man",
            name: "SC-RUSTUP-MAN",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            strings: ["toolchain"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 man", "SC-RUSTUP-MAN")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("toolchain", { "type": "string" });
            }
        },
        {
            cmd: "$0 self",
            name: "SC-RUSTUP-SELF",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 self", "SC-RUSTUP-SELF")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 self update",
            name: "SC-RUSTUP-SELF-UPDATE",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 self update", "SC-RUSTUP-SELF-UPDATE")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 self uninstall",
            name: "SC-RUSTUP-SELF-UNINSTALL",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            strings: ["y"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 self uninstall", "SC-RUSTUP-SELF-UNINSTALL")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("y", { "type": "string" });
            }
        },
        {
            cmd: "$0 self upgrade-data",
            name: "SC-RUSTUP-SELF-UPGRADE-DATA",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 self upgrade-data", "SC-RUSTUP-SELF-UPGRADE-DATA")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 self help",
            name: "SC-RUSTUP-SELF-HELP",
            prefix: "SC-RUSTUP",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 self help", "SC-RUSTUP-SELF-HELP");
            }
        },
        {
            cmd: "$0 set",
            name: "SC-RUSTUP-SET",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 set", "SC-RUSTUP-SET")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 set default-host",
            name: "SC-RUSTUP-SET-DEFAULT-HOST",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 set default-host", "SC-RUSTUP-SET-DEFAULT-HOST")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 set profile",
            name: "SC-RUSTUP-SET-PROFILE",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 set profile", "SC-RUSTUP-SET-PROFILE")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 set auto-self-update",
            name: "SC-RUSTUP-SET-AUTO-SELF-UPDATE",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 set auto-self-update", "SC-RUSTUP-SET-AUTO-SELF-UPDATE")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 set help",
            name: "SC-RUSTUP-SET-HELP",
            prefix: "SC-RUSTUP",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 set help", "SC-RUSTUP-SET-HELP");
            }
        },
        {
            cmd: "$0 completions",
            name: "SC-RUSTUP-COMPLETIONS",
            prefix: "SC-RUSTUP",
            booleans: ["h", "help"],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 completions", "SC-RUSTUP-COMPLETIONS")
                    .option("h", { "alias": "help", "type": "boolean" });
            }
        },
        {
            cmd: "$0 help",
            name: "SC-RUSTUP-HELP",
            prefix: "SC-RUSTUP",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rustup", "SC-RUSTUP")
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
                    .command("$0 help", "SC-RUSTUP-HELP");
            }
        },
    ]
};
//# sourceMappingURL=rustup.js.map