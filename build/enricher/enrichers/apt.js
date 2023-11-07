"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["apt"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-APT",
    scenarios: [
        {
            cmd: "$0 install [packages...]",
            name: "SC-APT-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-APT",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("apt", "SC-APT")
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
                    .command("$0 install [packages...]", "SC-APT-INSTALL")
                    .option("y", { "alias": "yes", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("purge", { "type": "boolean" })
                    .option("auto-remove", { "type": "boolean" })
                    .option("autoremove", { "type": "boolean" })
                    .option("force-yes", { "type": "boolean" })
                    .option("assume-yes", { "type": "boolean" })
                    .option("no-install-recommends", { "type": "boolean" })
                    .option("no-install-suggests", { "type": "boolean" })
                    .option("o", { "alias": "option", "type": "string" })
                    .option("C", { "alias": "config", "type": "string" })
                    .option("q", { "alias": "quiet", "type": "count" });
            }
        },
        {
            cmd: "$0 remove [packages...]",
            name: "SC-APT-REMOVE",
            categories: ["UNINSTALL_PACKAGES"],
            prefix: "SC-APT",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("apt", "SC-APT")
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
                    .command("$0 remove [packages...]", "SC-APT-REMOVE")
                    .option("y", { "alias": "yes", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("purge", { "type": "boolean" })
                    .option("auto-remove", { "type": "boolean" })
                    .option("autoremove", { "type": "boolean" })
                    .option("force-yes", { "type": "boolean" })
                    .option("assume-yes", { "type": "boolean" })
                    .option("no-install-recommends", { "type": "boolean" })
                    .option("no-install-suggests", { "type": "boolean" })
                    .option("o", { "alias": "option", "type": "string" })
                    .option("C", { "alias": "config", "type": "string" })
                    .option("q", { "alias": "quiet", "type": "count" });
            }
        },
        {
            cmd: "$0 clean",
            name: "SC-APT-CLEAN",
            prefix: "SC-APT",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("apt", "SC-APT")
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
                    .command("$0 clean", "SC-APT-CLEAN")
                    .option("y", { "alias": "yes", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("purge", { "type": "boolean" })
                    .option("auto-remove", { "type": "boolean" })
                    .option("autoremove", { "type": "boolean" })
                    .option("force-yes", { "type": "boolean" })
                    .option("assume-yes", { "type": "boolean" })
                    .option("no-install-recommends", { "type": "boolean" })
                    .option("no-install-suggests", { "type": "boolean" })
                    .option("o", { "alias": "option", "type": "string" })
                    .option("C", { "alias": "config", "type": "string" })
                    .option("q", { "alias": "quiet", "type": "count" });
            }
        },
        {
            cmd: "$0 autoclean",
            name: "SC-APT-AUTO-CLEAN",
            prefix: "SC-APT",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("apt", "SC-APT")
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
                    .command("$0 autoclean", "SC-APT-AUTO-CLEAN")
                    .option("y", { "alias": "yes", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("purge", { "type": "boolean" })
                    .option("auto-remove", { "type": "boolean" })
                    .option("autoremove", { "type": "boolean" })
                    .option("force-yes", { "type": "boolean" })
                    .option("assume-yes", { "type": "boolean" })
                    .option("no-install-recommends", { "type": "boolean" })
                    .option("no-install-suggests", { "type": "boolean" })
                    .option("o", { "alias": "option", "type": "string" })
                    .option("C", { "alias": "config", "type": "string" })
                    .option("q", { "alias": "quiet", "type": "count" });
            }
        },
        {
            cmd: "$0 autoremove [packages...]",
            name: "SC-APT-AUTO-REMOVE",
            prefix: "SC-APT",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("apt", "SC-APT")
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
                    .command("$0 autoremove [packages...]", "SC-APT-AUTO-REMOVE")
                    .option("y", { "alias": "yes", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("purge", { "type": "boolean" })
                    .option("auto-remove", { "type": "boolean" })
                    .option("autoremove", { "type": "boolean" })
                    .option("force-yes", { "type": "boolean" })
                    .option("assume-yes", { "type": "boolean" })
                    .option("no-install-recommends", { "type": "boolean" })
                    .option("no-install-suggests", { "type": "boolean" })
                    .option("o", { "alias": "option", "type": "string" })
                    .option("C", { "alias": "config", "type": "string" })
                    .option("q", { "alias": "quiet", "type": "count" });
            }
        },
        {
            cmd: "$0 update",
            name: "SC-APT-UPDATE",
            categories: ["UPDATE_PACKAGES"],
            prefix: "SC-APT",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("apt", "SC-APT")
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
                    .command("$0 update", "SC-APT-UPDATE")
                    .option("y", { "alias": "yes", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("purge", { "type": "boolean" })
                    .option("auto-remove", { "type": "boolean" })
                    .option("autoremove", { "type": "boolean" })
                    .option("force-yes", { "type": "boolean" })
                    .option("assume-yes", { "type": "boolean" })
                    .option("no-install-recommends", { "type": "boolean" })
                    .option("no-install-suggests", { "type": "boolean" })
                    .option("o", { "alias": "option", "type": "string" })
                    .option("C", { "alias": "config", "type": "string" })
                    .option("q", { "alias": "quiet", "type": "count" });
            }
        },
        {
            cmd: "$0 upgrade [packages...]",
            name: "SC-APT-UPGRADE",
            categories: ["UPDATE_PACKAGES"],
            prefix: "SC-APT",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("apt", "SC-APT")
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
                    .command("$0 upgrade [packages...]", "SC-APT-UPGRADE")
                    .option("y", { "alias": "yes", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("purge", { "type": "boolean" })
                    .option("auto-remove", { "type": "boolean" })
                    .option("autoremove", { "type": "boolean" })
                    .option("force-yes", { "type": "boolean" })
                    .option("assume-yes", { "type": "boolean" })
                    .option("no-install-recommends", { "type": "boolean" })
                    .option("no-install-suggests", { "type": "boolean" })
                    .option("o", { "alias": "option", "type": "string" })
                    .option("C", { "alias": "config", "type": "string" })
                    .option("q", { "alias": "quiet", "type": "count" });
            }
        },
        {
            cmd: "$0 clean",
            name: "SC-APT-CLEAN",
            prefix: "SC-APT",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("apt", "SC-APT")
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
                    .command("$0 clean", "SC-APT-CLEAN")
                    .option("y", { "alias": "yes", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("purge", { "type": "boolean" })
                    .option("auto-remove", { "type": "boolean" })
                    .option("autoremove", { "type": "boolean" })
                    .option("force-yes", { "type": "boolean" })
                    .option("assume-yes", { "type": "boolean" })
                    .option("no-install-recommends", { "type": "boolean" })
                    .option("no-install-suggests", { "type": "boolean" })
                    .option("o", { "alias": "option", "type": "string" })
                    .option("C", { "alias": "config", "type": "string" })
                    .option("q", { "alias": "quiet", "type": "count" });
            }
        },
    ]
};
//# sourceMappingURL=apt.js.map