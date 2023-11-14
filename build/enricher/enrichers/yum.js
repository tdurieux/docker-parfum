"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["yum"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-YUM",
    scenarios: [
        {
            cmd: "$0 remove [packages...]",
            name: "SC-YUM-REMOVE",
            categories: ["UNINSTALL_PACKAGES"],
            prefix: "SC-YUM",
            paths: ["c", "config", "installroot"],
            booleans: ["h", "help", "y", "assumeyes", "q", "quiet", "v", "verbose", "C", "cacheonly", "version", "showduplicates", "obsoletes", "noplugins", "nopgpgcheck", "skip-broken", "t", "tolerant"],
            argv: function () {
                return yargs()
                    .describe("yum", "SC-YUM")
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
                    .command("$0 remove [packages...]", "SC-YUM-REMOVE")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("C", { "alias": "cacheonly", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("showduplicates", { "type": "boolean" })
                    .option("obsoletes", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("nopgpgcheck", { "type": "boolean" })
                    .option("skip-broken", { "type": "boolean" })
                    .option("t", { "alias": "tolerant", "type": "boolean" })
                    .option("d", { "alias": "debuglevel", "type": "string" })
                    .option("e", { "alias": "errorlevel", "type": "string" })
                    .option("rpmverbosity", { "type": "string" })
                    .option("R", { "alias": "randomwait", "type": "string" })
                    .option("enablerepo", { "type": "string" })
                    .option("disablerepo", { "type": "string" })
                    .option("x", { "alias": "exclude", "type": "string" })
                    .option("color", { "type": "string" })
                    .option("disableexcludes", { "type": "string" })
                    .option("c", { "alias": "config", "type": "string" })
                    .option("installroot", { "type": "string" })
                    .option("setopt", { "type": "array" });
            }
        },
        {
            cmd: "$0 erase [packages...]",
            name: "SC-YUM-REMOVE",
            categories: ["UNINSTALL_PACKAGES"],
            prefix: "SC-YUM",
            paths: ["c", "config", "installroot"],
            booleans: ["h", "help", "y", "assumeyes", "q", "quiet", "v", "verbose", "C", "cacheonly", "version", "showduplicates", "obsoletes", "noplugins", "nopgpgcheck", "skip-broken", "t", "tolerant"],
            argv: function () {
                return yargs()
                    .describe("yum", "SC-YUM")
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
                    .command("$0 erase [packages...]", "SC-YUM-REMOVE")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("C", { "alias": "cacheonly", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("showduplicates", { "type": "boolean" })
                    .option("obsoletes", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("nopgpgcheck", { "type": "boolean" })
                    .option("skip-broken", { "type": "boolean" })
                    .option("t", { "alias": "tolerant", "type": "boolean" })
                    .option("d", { "alias": "debuglevel", "type": "string" })
                    .option("e", { "alias": "errorlevel", "type": "string" })
                    .option("rpmverbosity", { "type": "string" })
                    .option("R", { "alias": "randomwait", "type": "string" })
                    .option("enablerepo", { "type": "string" })
                    .option("disablerepo", { "type": "string" })
                    .option("x", { "alias": "exclude", "type": "string" })
                    .option("color", { "type": "string" })
                    .option("disableexcludes", { "type": "string" })
                    .option("c", { "alias": "config", "type": "string" })
                    .option("installroot", { "type": "string" })
                    .option("setopt", { "type": "array" });
            }
        },
        {
            cmd: "$0 clean all",
            name: "SC-YUM-CLEAN-ALL",
            prefix: "SC-YUM",
            paths: ["c", "config", "installroot"],
            booleans: ["h", "help", "y", "assumeyes", "q", "quiet", "v", "verbose", "C", "cacheonly", "version", "showduplicates", "obsoletes", "noplugins", "nopgpgcheck", "skip-broken", "t", "tolerant"],
            argv: function () {
                return yargs()
                    .describe("yum", "SC-YUM")
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
                    .command("$0 clean all", "SC-YUM-CLEAN-ALL")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("C", { "alias": "cacheonly", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("showduplicates", { "type": "boolean" })
                    .option("obsoletes", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("nopgpgcheck", { "type": "boolean" })
                    .option("skip-broken", { "type": "boolean" })
                    .option("t", { "alias": "tolerant", "type": "boolean" })
                    .option("d", { "alias": "debuglevel", "type": "string" })
                    .option("e", { "alias": "errorlevel", "type": "string" })
                    .option("rpmverbosity", { "type": "string" })
                    .option("R", { "alias": "randomwait", "type": "string" })
                    .option("enablerepo", { "type": "string" })
                    .option("disablerepo", { "type": "string" })
                    .option("x", { "alias": "exclude", "type": "string" })
                    .option("color", { "type": "string" })
                    .option("disableexcludes", { "type": "string" })
                    .option("c", { "alias": "config", "type": "string" })
                    .option("installroot", { "type": "string" })
                    .option("setopt", { "type": "array" });
            }
        },
        {
            cmd: "$0 update [packages...]",
            name: "SC-YUM-UPDATE",
            categories: ["UPDATE_PACKAGES"],
            prefix: "SC-YUM",
            paths: ["c", "config", "installroot"],
            booleans: ["h", "help", "y", "assumeyes", "q", "quiet", "v", "verbose", "C", "cacheonly", "version", "showduplicates", "obsoletes", "noplugins", "nopgpgcheck", "skip-broken", "t", "tolerant"],
            argv: function () {
                return yargs()
                    .describe("yum", "SC-YUM")
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
                    .command("$0 update [packages...]", "SC-YUM-UPDATE")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("C", { "alias": "cacheonly", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("showduplicates", { "type": "boolean" })
                    .option("obsoletes", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("nopgpgcheck", { "type": "boolean" })
                    .option("skip-broken", { "type": "boolean" })
                    .option("t", { "alias": "tolerant", "type": "boolean" })
                    .option("d", { "alias": "debuglevel", "type": "string" })
                    .option("e", { "alias": "errorlevel", "type": "string" })
                    .option("rpmverbosity", { "type": "string" })
                    .option("R", { "alias": "randomwait", "type": "string" })
                    .option("enablerepo", { "type": "string" })
                    .option("disablerepo", { "type": "string" })
                    .option("x", { "alias": "exclude", "type": "string" })
                    .option("color", { "type": "string" })
                    .option("disableexcludes", { "type": "string" })
                    .option("c", { "alias": "config", "type": "string" })
                    .option("installroot", { "type": "string" })
                    .option("setopt", { "type": "array" });
            }
        },
        {
            cmd: "$0 upgrade [packages...]",
            name: "SC-YUM-UPGRADE",
            categories: ["UPGRADE_PACKAGES"],
            prefix: "SC-YUM",
            paths: ["c", "config", "installroot"],
            booleans: ["h", "help", "y", "assumeyes", "q", "quiet", "v", "verbose", "C", "cacheonly", "version", "showduplicates", "obsoletes", "noplugins", "nopgpgcheck", "skip-broken", "t", "tolerant"],
            argv: function () {
                return yargs()
                    .describe("yum", "SC-YUM")
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
                    .command("$0 upgrade [packages...]", "SC-YUM-UPGRADE")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("C", { "alias": "cacheonly", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("showduplicates", { "type": "boolean" })
                    .option("obsoletes", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("nopgpgcheck", { "type": "boolean" })
                    .option("skip-broken", { "type": "boolean" })
                    .option("t", { "alias": "tolerant", "type": "boolean" })
                    .option("d", { "alias": "debuglevel", "type": "string" })
                    .option("e", { "alias": "errorlevel", "type": "string" })
                    .option("rpmverbosity", { "type": "string" })
                    .option("R", { "alias": "randomwait", "type": "string" })
                    .option("enablerepo", { "type": "string" })
                    .option("disablerepo", { "type": "string" })
                    .option("x", { "alias": "exclude", "type": "string" })
                    .option("color", { "type": "string" })
                    .option("disableexcludes", { "type": "string" })
                    .option("c", { "alias": "config", "type": "string" })
                    .option("installroot", { "type": "string" })
                    .option("setopt", { "type": "array" });
            }
        },
        {
            cmd: "$0 install [packages...]",
            name: "SC-YUM-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-YUM",
            paths: ["c", "config", "installroot"],
            booleans: ["h", "help", "y", "assumeyes", "q", "quiet", "v", "verbose", "C", "cacheonly", "version", "showduplicates", "obsoletes", "noplugins", "nopgpgcheck", "skip-broken", "t", "tolerant"],
            argv: function () {
                return yargs()
                    .describe("yum", "SC-YUM")
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
                    .command("$0 install [packages...]", "SC-YUM-INSTALL")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("C", { "alias": "cacheonly", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("showduplicates", { "type": "boolean" })
                    .option("obsoletes", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("nopgpgcheck", { "type": "boolean" })
                    .option("skip-broken", { "type": "boolean" })
                    .option("t", { "alias": "tolerant", "type": "boolean" })
                    .option("d", { "alias": "debuglevel", "type": "string" })
                    .option("e", { "alias": "errorlevel", "type": "string" })
                    .option("rpmverbosity", { "type": "string" })
                    .option("R", { "alias": "randomwait", "type": "string" })
                    .option("enablerepo", { "type": "string" })
                    .option("disablerepo", { "type": "string" })
                    .option("x", { "alias": "exclude", "type": "string" })
                    .option("color", { "type": "string" })
                    .option("disableexcludes", { "type": "string" })
                    .option("c", { "alias": "config", "type": "string" })
                    .option("installroot", { "type": "string" })
                    .option("setopt", { "type": "array" });
            }
        },
        {
            cmd: "$0 localinstall [packages...]",
            name: "SC-YUM-LOCAL-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-YUM",
            paths: ["c", "config", "installroot"],
            booleans: ["h", "help", "y", "assumeyes", "q", "quiet", "v", "verbose", "C", "cacheonly", "version", "showduplicates", "obsoletes", "noplugins", "nopgpgcheck", "skip-broken", "t", "tolerant"],
            argv: function () {
                return yargs()
                    .describe("yum", "SC-YUM")
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
                    .command("$0 localinstall [packages...]", "SC-YUM-LOCAL-INSTALL")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("C", { "alias": "cacheonly", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("showduplicates", { "type": "boolean" })
                    .option("obsoletes", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("nopgpgcheck", { "type": "boolean" })
                    .option("skip-broken", { "type": "boolean" })
                    .option("t", { "alias": "tolerant", "type": "boolean" })
                    .option("d", { "alias": "debuglevel", "type": "string" })
                    .option("e", { "alias": "errorlevel", "type": "string" })
                    .option("rpmverbosity", { "type": "string" })
                    .option("R", { "alias": "randomwait", "type": "string" })
                    .option("enablerepo", { "type": "string" })
                    .option("disablerepo", { "type": "string" })
                    .option("x", { "alias": "exclude", "type": "string" })
                    .option("color", { "type": "string" })
                    .option("disableexcludes", { "type": "string" })
                    .option("c", { "alias": "config", "type": "string" })
                    .option("installroot", { "type": "string" })
                    .option("setopt", { "type": "array" });
            }
        },
        {
            cmd: "$0 groupinstall [packages...]",
            name: "SC-YUM-GROUP-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-YUM",
            paths: ["c", "config", "installroot"],
            booleans: ["h", "help", "y", "assumeyes", "q", "quiet", "v", "verbose", "C", "cacheonly", "version", "showduplicates", "obsoletes", "noplugins", "nopgpgcheck", "skip-broken", "t", "tolerant"],
            argv: function () {
                return yargs()
                    .describe("yum", "SC-YUM")
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
                    .command("$0 groupinstall [packages...]", "SC-YUM-GROUP-INSTALL")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("C", { "alias": "cacheonly", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("showduplicates", { "type": "boolean" })
                    .option("obsoletes", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("nopgpgcheck", { "type": "boolean" })
                    .option("skip-broken", { "type": "boolean" })
                    .option("t", { "alias": "tolerant", "type": "boolean" })
                    .option("d", { "alias": "debuglevel", "type": "string" })
                    .option("e", { "alias": "errorlevel", "type": "string" })
                    .option("rpmverbosity", { "type": "string" })
                    .option("R", { "alias": "randomwait", "type": "string" })
                    .option("enablerepo", { "type": "string" })
                    .option("disablerepo", { "type": "string" })
                    .option("x", { "alias": "exclude", "type": "string" })
                    .option("color", { "type": "string" })
                    .option("disableexcludes", { "type": "string" })
                    .option("c", { "alias": "config", "type": "string" })
                    .option("installroot", { "type": "string" })
                    .option("setopt", { "type": "array" });
            }
        },
        {
            cmd: "$0 versionlock [packages...]",
            name: "SC-YUM-VERSION-LOCK",
            prefix: "SC-YUM",
            paths: ["c", "config", "installroot"],
            booleans: ["h", "help", "y", "assumeyes", "q", "quiet", "v", "verbose", "C", "cacheonly", "version", "showduplicates", "obsoletes", "noplugins", "nopgpgcheck", "skip-broken", "t", "tolerant"],
            argv: function () {
                return yargs()
                    .describe("yum", "SC-YUM")
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
                    .command("$0 versionlock [packages...]", "SC-YUM-VERSION-LOCK")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("C", { "alias": "cacheonly", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("showduplicates", { "type": "boolean" })
                    .option("obsoletes", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("nopgpgcheck", { "type": "boolean" })
                    .option("skip-broken", { "type": "boolean" })
                    .option("t", { "alias": "tolerant", "type": "boolean" })
                    .option("d", { "alias": "debuglevel", "type": "string" })
                    .option("e", { "alias": "errorlevel", "type": "string" })
                    .option("rpmverbosity", { "type": "string" })
                    .option("R", { "alias": "randomwait", "type": "string" })
                    .option("enablerepo", { "type": "string" })
                    .option("disablerepo", { "type": "string" })
                    .option("x", { "alias": "exclude", "type": "string" })
                    .option("color", { "type": "string" })
                    .option("disableexcludes", { "type": "string" })
                    .option("c", { "alias": "config", "type": "string" })
                    .option("installroot", { "type": "string" })
                    .option("setopt", { "type": "array" });
            }
        },
        {
            cmd: "$0 makecache",
            name: "SC-YUM-MAKECACHE",
            prefix: "SC-YUM",
            paths: ["c", "config", "installroot"],
            booleans: ["h", "help", "y", "assumeyes", "q", "quiet", "v", "verbose", "C", "cacheonly", "version", "showduplicates", "obsoletes", "noplugins", "nopgpgcheck", "skip-broken", "t", "tolerant"],
            argv: function () {
                return yargs()
                    .describe("yum", "SC-YUM")
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
                    .command("$0 makecache", "SC-YUM-MAKECACHE")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("y", { "alias": "assumeyes", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("C", { "alias": "cacheonly", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("showduplicates", { "type": "boolean" })
                    .option("obsoletes", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("nopgpgcheck", { "type": "boolean" })
                    .option("skip-broken", { "type": "boolean" })
                    .option("t", { "alias": "tolerant", "type": "boolean" })
                    .option("d", { "alias": "debuglevel", "type": "string" })
                    .option("e", { "alias": "errorlevel", "type": "string" })
                    .option("rpmverbosity", { "type": "string" })
                    .option("R", { "alias": "randomwait", "type": "string" })
                    .option("enablerepo", { "type": "string" })
                    .option("disablerepo", { "type": "string" })
                    .option("x", { "alias": "exclude", "type": "string" })
                    .option("color", { "type": "string" })
                    .option("disableexcludes", { "type": "string" })
                    .option("c", { "alias": "config", "type": "string" })
                    .option("installroot", { "type": "string" })
                    .option("setopt", { "type": "array" });
            }
        },
    ]
};
//# sourceMappingURL=yum.js.map