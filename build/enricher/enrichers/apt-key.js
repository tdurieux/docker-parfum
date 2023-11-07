"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["apt-key"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-APT-KEY",
    scenarios: [
        {
            cmd: "$0 add <filename>",
            name: "SC-APT-KEY-ADD",
            prefix: "SC-APT-KEY",
            paths: ["keyring"],
            argv: function () {
                return yargs()
                    .describe("apt-key", "SC-APT-KEY")
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
                    .command("$0 add <filename>", "SC-APT-KEY-ADD")
                    .option("keyring", { "type": "string" });
            }
        },
        {
            cmd: "$0 del <keyid>",
            name: "SC-APT-KEY-DEL",
            prefix: "SC-APT-KEY",
            paths: ["keyring"],
            argv: function () {
                return yargs()
                    .describe("apt-key", "SC-APT-KEY")
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
                    .command("$0 del <keyid>", "SC-APT-KEY-DEL")
                    .option("keyring", { "type": "string" });
            }
        },
        {
            cmd: "$0 export <keyid>",
            name: "SC-APT-KEY-EXPORT",
            prefix: "SC-APT-KEY",
            paths: ["keyring"],
            argv: function () {
                return yargs()
                    .describe("apt-key", "SC-APT-KEY")
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
                    .command("$0 export <keyid>", "SC-APT-KEY-EXPORT")
                    .option("keyring", { "type": "string" });
            }
        },
        {
            cmd: "$0 exportall",
            name: "SC-APT-KEY-EXPORT-ALL",
            prefix: "SC-APT-KEY",
            paths: ["keyring"],
            argv: function () {
                return yargs()
                    .describe("apt-key", "SC-APT-KEY")
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
                    .command("$0 exportall", "SC-APT-KEY-EXPORT-ALL")
                    .option("keyring", { "type": "string" });
            }
        },
        {
            cmd: "$0 list",
            name: "SC-APT-KEY-LIST",
            prefix: "SC-APT-KEY",
            paths: ["keyring"],
            argv: function () {
                return yargs()
                    .describe("apt-key", "SC-APT-KEY")
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
                    .command("$0 list", "SC-APT-KEY-LIST")
                    .option("keyring", { "type": "string" });
            }
        },
        {
            cmd: "$0 finger",
            name: "SC-APT-KEY-FINGER",
            prefix: "SC-APT-KEY",
            paths: ["keyring"],
            argv: function () {
                return yargs()
                    .describe("apt-key", "SC-APT-KEY")
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
                    .command("$0 finger", "SC-APT-KEY-FINGER")
                    .option("keyring", { "type": "string" });
            }
        },
        {
            cmd: "$0 fingerprint <key>",
            name: "SC-APT-KEY-FINGERPRINT",
            prefix: "SC-APT-KEY",
            paths: ["keyring"],
            argv: function () {
                return yargs()
                    .describe("apt-key", "SC-APT-KEY")
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
                    .command("$0 fingerprint <key>", "SC-APT-KEY-FINGERPRINT")
                    .option("keyring", { "type": "string" });
            }
        },
        {
            cmd: "$0 adv",
            name: "SC-APT-KEY-ADV",
            prefix: "SC-APT-KEY",
            paths: ["keyring", "homedir", "options"],
            booleans: ["version", "verbose", "fingerprint", "batch", "y", "yes", "no-tty", "import", "fast-import", "a", "armor", "no-batch", "q", "quiet", "enarmor", "dearmor", "d", "decrypt", "refresh-keys"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("apt-key", "SC-APT-KEY")
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
                    .command("$0 adv", "SC-APT-KEY-ADV")
                    .option("version", { "type": "boolean" })
                    .option("verbose", { "type": "boolean" })
                    .option("fingerprint", { "type": "boolean" })
                    .option("batch", { "type": "boolean" })
                    .option("y", { "alias": "yes", "type": "boolean" })
                    .option("no-tty", { "type": "boolean" })
                    .option("import", { "type": "boolean" })
                    .option("fast-import", { "type": "boolean" })
                    .option("a", { "alias": "armor", "type": "boolean" })
                    .option("no-batch", { "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("enarmor", { "type": "boolean" })
                    .option("dearmor", { "type": "boolean" })
                    .option("d", { "alias": "decrypt", "type": "boolean" })
                    .option("refresh-keys", { "type": "boolean" })
                    .option("trusted-key", { "type": "string" })
                    .option("recv-key", { "type": "string" })
                    .option("recv", { "type": "string" })
                    .option("keyserver", { "type": "string" })
                    .option("keyring", { "type": "string" })
                    .option("homedir", { "type": "string" })
                    .option("options", { "type": "string" })
                    .option("export", { "type": "array" })
                    .option("verify", { "type": "array" })
                    .option("recv-keys", { "type": "array" })
                    .option("keyserver-options", { "type": "array" });
            }
        },
        {
            cmd: "$0 update",
            name: "SC-APT-KEY-UPDATE",
            prefix: "SC-APT-KEY",
            paths: ["keyring"],
            argv: function () {
                return yargs()
                    .describe("apt-key", "SC-APT-KEY")
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
                    .command("$0 update", "SC-APT-KEY-UPDATE")
                    .option("keyring", { "type": "string" });
            }
        },
        {
            cmd: "$0 net-update",
            name: "SC-APT-KEY-NET-UPDATE",
            prefix: "SC-APT-KEY",
            paths: ["keyring"],
            argv: function () {
                return yargs()
                    .describe("apt-key", "SC-APT-KEY")
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
                    .command("$0 net-update", "SC-APT-KEY-NET-UPDATE")
                    .option("keyring", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=apt-key.js.map