"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["pecl"],
    prefix: "SC-PECL",
    scenarios: [
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 -v [options...]",
            name: "SC-PECL--V",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 -v [options...]", "SC-PECL--V")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 -q [options...]",
            name: "SC-PECL--Q",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 -q [options...]", "SC-PECL--Q")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 -c  [options...]",
            name: "SC-PECL--C",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 -c  [options...]", "SC-PECL--C")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 -C  [options...]",
            name: "SC-PECL--C",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 -C  [options...]", "SC-PECL--C")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 -d  [options...]",
            name: "SC-PECL--D",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 -d  [options...]", "SC-PECL--D")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 -D  [options...]",
            name: "SC-PECL--D",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 -D  [options...]", "SC-PECL--D")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 -G [options...]",
            name: "SC-PECL--G",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 -G [options...]", "SC-PECL--G")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 -S [options...]",
            name: "SC-PECL--S",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 -S [options...]", "SC-PECL--S")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 -s [options...]",
            name: "SC-PECL--S",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 -s [options...]", "SC-PECL--S")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 -y  [options...]",
            name: "SC-PECL--Y",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 -y  [options...]", "SC-PECL--Y")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 -V [options...]",
            name: "SC-PECL--V",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 -V [options...]", "SC-PECL--V")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 build [options...]",
            name: "SC-PECL-BUILD",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 build [options...]", "SC-PECL-BUILD")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 bundle [options...]",
            name: "SC-PECL-BUNDLE",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 bundle [options...]", "SC-PECL-BUNDLE")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 channel-alias [options...]",
            name: "SC-PECL-CHANNEL-ALIAS",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 channel-alias [options...]", "SC-PECL-CHANNEL-ALIAS")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 channel-delete [options...]",
            name: "SC-PECL-CHANNEL-DELETE",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 channel-delete [options...]", "SC-PECL-CHANNEL-DELETE")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 channel-discover [options...]",
            name: "SC-PECL-CHANNEL-DISCOVER",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 channel-discover [options...]", "SC-PECL-CHANNEL-DISCOVER")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 channel-info [options...]",
            name: "SC-PECL-CHANNEL-INFO",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 channel-info [options...]", "SC-PECL-CHANNEL-INFO")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 channel-login [options...]",
            name: "SC-PECL-CHANNEL-LOGIN",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 channel-login [options...]", "SC-PECL-CHANNEL-LOGIN")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 channel-logout [options...]",
            name: "SC-PECL-CHANNEL-LOGOUT",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 channel-logout [options...]", "SC-PECL-CHANNEL-LOGOUT")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 channel-update [options...]",
            name: "SC-PECL-CHANNEL-UPDATE",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 channel-update [options...]", "SC-PECL-CHANNEL-UPDATE")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 clear-cache [options...]",
            name: "SC-PECL-CLEAR-CACHE",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 clear-cache [options...]", "SC-PECL-CLEAR-CACHE")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 config-create [options...]",
            name: "SC-PECL-CONFIG-CREATE",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 config-create [options...]", "SC-PECL-CONFIG-CREATE")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 config-get [options...]",
            name: "SC-PECL-CONFIG-GET",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 config-get [options...]", "SC-PECL-CONFIG-GET")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 config-help [options...]",
            name: "SC-PECL-CONFIG-HELP",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 config-help [options...]", "SC-PECL-CONFIG-HELP")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 config-set [options...]",
            name: "SC-PECL-CONFIG-SET",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 config-set [options...]", "SC-PECL-CONFIG-SET")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 config-show [options...]",
            name: "SC-PECL-CONFIG-SHOW",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 config-show [options...]", "SC-PECL-CONFIG-SHOW")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 convert [options...]",
            name: "SC-PECL-CONVERT",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 convert [options...]", "SC-PECL-CONVERT")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 cvsdiff [options...]",
            name: "SC-PECL-CVSDIFF",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 cvsdiff [options...]", "SC-PECL-CVSDIFF")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 cvstag [options...]",
            name: "SC-PECL-CVSTAG",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 cvstag [options...]", "SC-PECL-CVSTAG")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 download [options...]",
            name: "SC-PECL-DOWNLOAD",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 download [options...]", "SC-PECL-DOWNLOAD")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 download-all [options...]",
            name: "SC-PECL-DOWNLOAD-ALL",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 download-all [options...]", "SC-PECL-DOWNLOAD-ALL")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 info [options...]",
            name: "SC-PECL-INFO",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 info [options...]", "SC-PECL-INFO")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 install [options...]",
            name: "SC-PECL-INSTALL",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 install [options...]", "SC-PECL-INSTALL")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 list [options...]",
            name: "SC-PECL-LIST",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 list [options...]", "SC-PECL-LIST")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 list-all [options...]",
            name: "SC-PECL-LIST-ALL",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 list-all [options...]", "SC-PECL-LIST-ALL")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 list-channels [options...]",
            name: "SC-PECL-LIST-CHANNELS",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 list-channels [options...]", "SC-PECL-LIST-CHANNELS")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 list-files [options...]",
            name: "SC-PECL-LIST-FILES",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 list-files [options...]", "SC-PECL-LIST-FILES")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 list-upgrades [options...]",
            name: "SC-PECL-LIST-UPGRADES",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 list-upgrades [options...]", "SC-PECL-LIST-UPGRADES")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 login [options...]",
            name: "SC-PECL-LOGIN",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 login [options...]", "SC-PECL-LOGIN")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 logout [options...]",
            name: "SC-PECL-LOGOUT",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 logout [options...]", "SC-PECL-LOGOUT")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 make-rpm-spec [options...]",
            name: "SC-PECL-MAKE-RPM-SPEC",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 make-rpm-spec [options...]", "SC-PECL-MAKE-RPM-SPEC")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 makerpm [options...]",
            name: "SC-PECL-MAKERPM",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 makerpm [options...]", "SC-PECL-MAKERPM")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 package [options...]",
            name: "SC-PECL-PACKAGE",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 package [options...]", "SC-PECL-PACKAGE")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 package-dependencies [options...]",
            name: "SC-PECL-PACKAGE-DEPENDENCIES",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 package-dependencies [options...]", "SC-PECL-PACKAGE-DEPENDENCIES")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 package-validate [options...]",
            name: "SC-PECL-PACKAGE-VALIDATE",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 package-validate [options...]", "SC-PECL-PACKAGE-VALIDATE")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 pickle [options...]",
            name: "SC-PECL-PICKLE",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 pickle [options...]", "SC-PECL-PICKLE")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 remote-info [options...]",
            name: "SC-PECL-REMOTE-INFO",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 remote-info [options...]", "SC-PECL-REMOTE-INFO")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 remote-list [options...]",
            name: "SC-PECL-REMOTE-LIST",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 remote-list [options...]", "SC-PECL-REMOTE-LIST")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 run-scripts [options...]",
            name: "SC-PECL-RUN-SCRIPTS",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 run-scripts [options...]", "SC-PECL-RUN-SCRIPTS")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 run-tests [options...]",
            name: "SC-PECL-RUN-TESTS",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 run-tests [options...]", "SC-PECL-RUN-TESTS")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 search [options...]",
            name: "SC-PECL-SEARCH",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 search [options...]", "SC-PECL-SEARCH")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 shell-test [options...]",
            name: "SC-PECL-SHELL-TEST",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 shell-test [options...]", "SC-PECL-SHELL-TEST")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 sign [options...]",
            name: "SC-PECL-SIGN",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 sign [options...]", "SC-PECL-SIGN")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 svntag [options...]",
            name: "SC-PECL-SVNTAG",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 svntag [options...]", "SC-PECL-SVNTAG")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 uninstall [options...]",
            name: "SC-PECL-UNINSTALL",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 uninstall [options...]", "SC-PECL-UNINSTALL")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 update-channels [options...]",
            name: "SC-PECL-UPDATE-CHANNELS",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 update-channels [options...]", "SC-PECL-UPDATE-CHANNELS")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 upgrade [options...]",
            name: "SC-PECL-UPGRADE",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 upgrade [options...]", "SC-PECL-UPGRADE")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
        {
            fixupNonSpacedArgs: true,
            cmd: "$0 upgrade-all [options...]",
            name: "SC-PECL-UPGRADE-ALL",
            prefix: "SC-PECL",
            paths: ["c"],
            booleans: ["q", "G", "S", "s", "v", "h", "?"],
            counts: ["v"],
            argv: function () {
                return yargs()
                    .describe("pecl", "SC-PECL")
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
                    .command("$0 upgrade-all [options...]", "SC-PECL-UPGRADE-ALL")
                    .option("q", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("?", { "type": "boolean" })
                    .option("d", { "type": "string" })
                    .option("D", { "type": "string" })
                    .option("y", { "type": "string" })
                    .option("c", { "type": "string" })
                    .option("v", { "type": "count" });
            }
        },
    ]
};
//# sourceMappingURL=pecl.js.map