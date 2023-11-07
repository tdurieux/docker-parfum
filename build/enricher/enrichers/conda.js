"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["conda"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-CONDA",
    scenarios: [
        {
            cmd: "$0 install [packages...]",
            name: "SC-CONDA-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-CONDA",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("conda", "SC-CONDA")
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
                    .command("$0 install [packages...]", "SC-CONDA-INSTALL")
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
            name: "SC-CONDA-REMOVE",
            categories: ["UNINSTALL_PACKAGES"],
            prefix: "SC-CONDA",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("conda", "SC-CONDA")
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
                    .command("$0 remove [packages...]", "SC-CONDA-REMOVE")
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
            cmd: "$0 update [packages...]",
            name: "SC-CONDA-UPDATE",
            categories: ["UPDATE_PACKAGES"],
            prefix: "SC-CONDA",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("conda", "SC-CONDA")
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
                    .command("$0 update [packages...]", "SC-CONDA-UPDATE")
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
            cmd: "$0 create",
            name: "SC-CONDA-CREATE",
            prefix: "SC-CONDA",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("conda", "SC-CONDA")
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
                    .command("$0 create", "SC-CONDA-CREATE")
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
            cmd: "$0 activate <environement>",
            name: "SC-CONDA-ACTIVATE",
            prefix: "SC-CONDA",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("conda", "SC-CONDA")
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
                    .command("$0 activate <environement>", "SC-CONDA-ACTIVATE")
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
            cmd: "$0 deactivate",
            name: "SC-CONDA-DEACTIVATE",
            prefix: "SC-CONDA",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("conda", "SC-CONDA")
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
                    .command("$0 deactivate", "SC-CONDA-DEACTIVATE")
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
            cmd: "$0 search <term>",
            name: "SC-CONDA-SEARCH",
            prefix: "SC-CONDA",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("conda", "SC-CONDA")
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
                    .command("$0 search <term>", "SC-CONDA-SEARCH")
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
            cmd: "$0 list",
            name: "SC-CONDA-LIST",
            prefix: "SC-CONDA",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("conda", "SC-CONDA")
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
                    .command("$0 list", "SC-CONDA-LIST")
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
            cmd: "$0 info",
            name: "SC-CONDA-INFO",
            prefix: "SC-CONDA",
            paths: ["o", "option", "C", "config"],
            booleans: ["y", "yes", "h", "help", "v", "version", "purge", "auto-remove", "autoremove", "force-yes", "assume-yes", "no-install-recommends", "no-install-suggests"],
            counts: ["q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("conda", "SC-CONDA")
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
                    .command("$0 info", "SC-CONDA-INFO")
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
//# sourceMappingURL=conda.js.map