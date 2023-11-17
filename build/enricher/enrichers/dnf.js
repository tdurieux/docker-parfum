"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["dnf"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-DNF",
    scenarios: [
        {
            cmd: "$0 install [packages...]",
            name: "SC-DNF-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-DNF",
            booleans: ["y", "assumeyes", "q", "quiet", "nogpgcheck"],
            strings: ["setopt"],
            argv: function () {
                return yargs()
                    .describe("dnf", "SC-DNF")
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
                    .command("$0 install [packages...]", "SC-DNF-INSTALL")
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("nogpgcheck", { "type": "boolean" })
                    .option("setopt", { "type": "string" });
            }
        },
        {
            cmd: "$0 debuginfo-install [packages...]",
            name: "SC-DNF-DEBUG-INFO-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-DNF",
            booleans: ["y", "assumeyes", "q", "quiet", "nogpgcheck"],
            strings: ["setopt"],
            argv: function () {
                return yargs()
                    .describe("dnf", "SC-DNF")
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
                    .command("$0 debuginfo-install [packages...]", "SC-DNF-DEBUG-INFO-INSTALL")
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("nogpgcheck", { "type": "boolean" })
                    .option("setopt", { "type": "string" });
            }
        },
        {
            cmd: "$0 clean all",
            name: "SC-DNF-CLEAN-ALL",
            prefix: "SC-DNF",
            booleans: ["y", "assumeyes", "q", "quiet", "nogpgcheck"],
            strings: ["setopt"],
            argv: function () {
                return yargs()
                    .describe("dnf", "SC-DNF")
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
                    .command("$0 clean all", "SC-DNF-CLEAN-ALL")
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("nogpgcheck", { "type": "boolean" })
                    .option("setopt", { "type": "string" });
            }
        },
        {
            cmd: "$0 update",
            name: "SC-DNF-UPDATE",
            categories: ["UPDATE_PACKAGES"],
            prefix: "SC-DNF",
            booleans: ["y", "assumeyes", "q", "quiet", "nogpgcheck"],
            strings: ["setopt"],
            argv: function () {
                return yargs()
                    .describe("dnf", "SC-DNF")
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
                    .command("$0 update", "SC-DNF-UPDATE")
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("nogpgcheck", { "type": "boolean" })
                    .option("setopt", { "type": "string" });
            }
        },
        {
            cmd: "$0 upgrade",
            name: "SC-DNF-UPGRADE",
            categories: ["UPGRADE_PACKAGES"],
            prefix: "SC-DNF",
            booleans: ["y", "assumeyes", "q", "quiet", "nogpgcheck"],
            strings: ["setopt"],
            argv: function () {
                return yargs()
                    .describe("dnf", "SC-DNF")
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
                    .command("$0 upgrade", "SC-DNF-UPGRADE")
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("nogpgcheck", { "type": "boolean" })
                    .option("setopt", { "type": "string" });
            }
        },
        {
            cmd: "$0 check-update",
            name: "SC-DNF-CHECK-UPDATE",
            prefix: "SC-DNF",
            booleans: ["y", "assumeyes", "q", "quiet", "nogpgcheck"],
            strings: ["setopt"],
            argv: function () {
                return yargs()
                    .describe("dnf", "SC-DNF")
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
                    .command("$0 check-update", "SC-DNF-CHECK-UPDATE")
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("nogpgcheck", { "type": "boolean" })
                    .option("setopt", { "type": "string" });
            }
        },
        {
            cmd: "$0 autoremove",
            name: "SC-DNF-AUTO-REMOVE",
            prefix: "SC-DNF",
            booleans: ["y", "assumeyes", "q", "quiet", "nogpgcheck"],
            strings: ["setopt"],
            argv: function () {
                return yargs()
                    .describe("dnf", "SC-DNF")
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
                    .command("$0 autoremove", "SC-DNF-AUTO-REMOVE")
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("nogpgcheck", { "type": "boolean" })
                    .option("setopt", { "type": "string" });
            }
        },
        {
            cmd: "$0 builddep [packages...]",
            name: "SC-DNF-BUILD-DEP",
            categories: ["BUILD_PACKAGES"],
            prefix: "SC-DNF",
            booleans: ["y", "assumeyes", "q", "quiet", "nogpgcheck"],
            strings: ["setopt"],
            argv: function () {
                return yargs()
                    .describe("dnf", "SC-DNF")
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
                    .command("$0 builddep [packages...]", "SC-DNF-BUILD-DEP")
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("nogpgcheck", { "type": "boolean" })
                    .option("setopt", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=dnf.js.map