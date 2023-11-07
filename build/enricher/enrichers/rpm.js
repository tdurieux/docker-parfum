"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["rpm"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-rpm",
    scenarios: [
        {
            mustHave: ["--query"],
            cmd: "$0 <package>",
            name: "SC-RPM-QUERY",
            prefix: "SC-rpm",
            paths: ["dbpath", "root", "f", "file", "p", "package"],
            booleans: ["?", "help", "version", "quiet", "v", "vv", "q", "query", "V", "verify", "i", "install", "U", "upgrade", "F", "freshen", "e", "erase", "querytags", "showrc", "setperms", "setugids", "a", "changelog", "conflicts", "dump", "last", "filesbypkg", "obsoletes", "provides", "scripts", "c", "configfiles", "l", "list", "i", "info", "d", "docfiles", "R", "requires", "s", "state", "triggers", "triggerscripts"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rpm", "SC-rpm")
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
                    .command("$0 <package>", "SC-RPM-QUERY")
                    .option("?", { "alias": "help", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("quiet", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("vv", { "type": "boolean" })
                    .option("q", { "alias": "query", "type": "boolean" })
                    .option("V", { "alias": "verify", "type": "boolean" })
                    .option("i", { "alias": "install", "type": "boolean" })
                    .option("U", { "alias": "upgrade", "type": "boolean" })
                    .option("F", { "alias": "freshen", "type": "boolean" })
                    .option("e", { "alias": "erase", "type": "boolean" })
                    .option("querytags", { "alias": "showrc", "type": "boolean" })
                    .option("setperms", { "alias": "setugids", "type": "boolean" })
                    .option("a", { "type": "boolean" })
                    .option("changelog", { "type": "boolean" })
                    .option("conflicts", { "type": "boolean" })
                    .option("dump", { "type": "boolean" })
                    .option("last", { "type": "boolean" })
                    .option("filesbypkg", { "type": "boolean" })
                    .option("obsoletes", { "type": "boolean" })
                    .option("provides", { "type": "boolean" })
                    .option("scripts", { "type": "boolean" })
                    .option("c", { "alias": "configfiles", "type": "boolean" })
                    .option("l", { "alias": "list", "type": "boolean" })
                    .option("i", { "alias": "info", "type": "boolean" })
                    .option("d", { "alias": "docfiles", "type": "boolean" })
                    .option("R", { "alias": "requires", "type": "boolean" })
                    .option("s", { "alias": "state", "type": "boolean" })
                    .option("triggers", { "alias": "triggerscripts", "type": "boolean" })
                    .option("rcfile", { "type": "string" })
                    .option("pipe", { "type": "string" })
                    .option("D", { "alias": "define", "type": "string" })
                    .option("undefine", { "type": "string" })
                    .option("E", { "alias": "eval", "type": "string" })
                    .option("g", { "alias": "group", "type": "string" })
                    .option("hdrid", { "type": "string" })
                    .option("pkgid", { "type": "string" })
                    .option("tid", { "type": "string" })
                    .option("querybynumber", { "type": "string" })
                    .option("triggeredby", { "type": "string" })
                    .option("whatprovides", { "type": "string" })
                    .option("whatrequires", { "type": "string" })
                    .option("qf", { "alias": "queryformat", "type": "string" })
                    .option("dbpath", { "type": "string" })
                    .option("root", { "type": "string" })
                    .option("f", { "alias": "file", "type": "string" })
                    .option("p", { "alias": "package", "type": "string" });
            }
        },
        {
            mustHave: ["--verify"],
            cmd: "$0 [options...]",
            name: "SC-RPM-VERIFY",
            prefix: "SC-rpm",
            paths: ["dbpath", "root", "f", "file", "p", "package"],
            booleans: ["?", "help", "version", "quiet", "v", "vv", "q", "query", "V", "verify", "i", "install", "U", "upgrade", "F", "freshen", "e", "erase", "querytags", "showrc", "setperms", "setugids", "a", "nodeps", "nofiles", "noscripts", "nodigest", "nosignature", "nolinkto", "nofiledigest", "nosize", "nouser", "nogroup", "nomtime", "nomode", "nordev", "nocaps"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rpm", "SC-rpm")
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
                    .command("$0 [options...]", "SC-RPM-VERIFY")
                    .option("?", { "alias": "help", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("quiet", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("vv", { "type": "boolean" })
                    .option("q", { "alias": "query", "type": "boolean" })
                    .option("V", { "alias": "verify", "type": "boolean" })
                    .option("i", { "alias": "install", "type": "boolean" })
                    .option("U", { "alias": "upgrade", "type": "boolean" })
                    .option("F", { "alias": "freshen", "type": "boolean" })
                    .option("e", { "alias": "erase", "type": "boolean" })
                    .option("querytags", { "alias": "showrc", "type": "boolean" })
                    .option("setperms", { "alias": "setugids", "type": "boolean" })
                    .option("a", { "type": "boolean" })
                    .option("nodeps", { "type": "boolean" })
                    .option("nofiles", { "type": "boolean" })
                    .option("noscripts", { "type": "boolean" })
                    .option("nodigest", { "type": "boolean" })
                    .option("nosignature", { "type": "boolean" })
                    .option("nolinkto", { "type": "boolean" })
                    .option("nofiledigest", { "type": "boolean" })
                    .option("nosize", { "type": "boolean" })
                    .option("nouser", { "type": "boolean" })
                    .option("nogroup", { "type": "boolean" })
                    .option("nomtime", { "type": "boolean" })
                    .option("nomode", { "type": "boolean" })
                    .option("nordev", { "type": "boolean" })
                    .option("nocaps", { "type": "boolean" })
                    .option("rcfile", { "type": "string" })
                    .option("pipe", { "type": "string" })
                    .option("D", { "alias": "define", "type": "string" })
                    .option("undefine", { "type": "string" })
                    .option("E", { "alias": "eval", "type": "string" })
                    .option("g", { "alias": "group", "type": "string" })
                    .option("hdrid", { "type": "string" })
                    .option("pkgid", { "type": "string" })
                    .option("tid", { "type": "string" })
                    .option("querybynumber", { "type": "string" })
                    .option("triggeredby", { "type": "string" })
                    .option("whatprovides", { "type": "string" })
                    .option("whatrequires", { "type": "string" })
                    .option("dbpath", { "type": "string" })
                    .option("root", { "type": "string" })
                    .option("f", { "alias": "file", "type": "string" })
                    .option("p", { "alias": "package", "type": "string" });
            }
        },
        {
            mustHave: ["--install"],
            cmd: "$0 [packages...]",
            name: "SC-RPM-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-rpm",
            paths: ["dbpath", "root", "excludepath"],
            booleans: ["?", "help", "version", "quiet", "v", "vv", "q", "query", "V", "verify", "i", "install", "U", "upgrade", "F", "freshen", "e", "erase", "querytags", "showrc", "setperms", "setugids", "excludedocs", "force", "allfiles", "badreloc", "ignoresize", "ignorearch", "ignoreos", "includedocs", "justdb", "nocollections", "nodeps", "nodigest", "nosignature", "noplugins", "noorder", "noscripts", "notriggers", "oldpackage", "percent", "replacefiles", "replacepkgs", "test", "h", "hash"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rpm", "SC-rpm")
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
                    .command("$0 [packages...]", "SC-RPM-INSTALL")
                    .option("?", { "alias": "help", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("quiet", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("vv", { "type": "boolean" })
                    .option("q", { "alias": "query", "type": "boolean" })
                    .option("V", { "alias": "verify", "type": "boolean" })
                    .option("i", { "alias": "install", "type": "boolean" })
                    .option("U", { "alias": "upgrade", "type": "boolean" })
                    .option("F", { "alias": "freshen", "type": "boolean" })
                    .option("e", { "alias": "erase", "type": "boolean" })
                    .option("querytags", { "alias": "showrc", "type": "boolean" })
                    .option("setperms", { "alias": "setugids", "type": "boolean" })
                    .option("excludedocs", { "type": "boolean" })
                    .option("force", { "type": "boolean" })
                    .option("allfiles", { "type": "boolean" })
                    .option("badreloc", { "type": "boolean" })
                    .option("ignoresize", { "type": "boolean" })
                    .option("ignorearch", { "type": "boolean" })
                    .option("ignoreos", { "type": "boolean" })
                    .option("includedocs", { "type": "boolean" })
                    .option("justdb", { "type": "boolean" })
                    .option("nocollections", { "type": "boolean" })
                    .option("nodeps", { "type": "boolean" })
                    .option("nodigest", { "type": "boolean" })
                    .option("nosignature", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("noorder", { "type": "boolean" })
                    .option("noscripts", { "type": "boolean" })
                    .option("notriggers", { "type": "boolean" })
                    .option("oldpackage", { "type": "boolean" })
                    .option("percent", { "type": "boolean" })
                    .option("replacefiles", { "type": "boolean" })
                    .option("replacepkgs", { "type": "boolean" })
                    .option("test", { "type": "boolean" })
                    .option("h", { "alias": "hash", "type": "boolean" })
                    .option("rcfile", { "type": "string" })
                    .option("pipe", { "type": "string" })
                    .option("D", { "alias": "define", "type": "string" })
                    .option("undefine", { "type": "string" })
                    .option("E", { "alias": "eval", "type": "string" })
                    .option("prefix", { "type": "string" })
                    .option("relocate", { "type": "string" })
                    .option("dbpath", { "type": "string" })
                    .option("root", { "type": "string" })
                    .option("excludepath", { "type": "string" });
            }
        },
        {
            mustHave: ["--upgrade"],
            cmd: "$0 [packages...]",
            name: "SC-RPM-UPGRADE",
            categories: ["UPGRADE_PACKAGES"],
            prefix: "SC-rpm",
            paths: ["dbpath", "root", "excludepath"],
            booleans: ["?", "help", "version", "quiet", "v", "vv", "q", "query", "V", "verify", "i", "install", "U", "upgrade", "F", "freshen", "e", "erase", "querytags", "showrc", "setperms", "setugids", "excludedocs", "force", "allfiles", "badreloc", "ignoresize", "ignorearch", "ignoreos", "includedocs", "justdb", "nocollections", "nodeps", "nodigest", "nosignature", "noplugins", "noorder", "noscripts", "notriggers", "oldpackage", "percent", "replacefiles", "replacepkgs", "test", "h", "hash"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rpm", "SC-rpm")
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
                    .command("$0 [packages...]", "SC-RPM-UPGRADE")
                    .option("?", { "alias": "help", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("quiet", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("vv", { "type": "boolean" })
                    .option("q", { "alias": "query", "type": "boolean" })
                    .option("V", { "alias": "verify", "type": "boolean" })
                    .option("i", { "alias": "install", "type": "boolean" })
                    .option("U", { "alias": "upgrade", "type": "boolean" })
                    .option("F", { "alias": "freshen", "type": "boolean" })
                    .option("e", { "alias": "erase", "type": "boolean" })
                    .option("querytags", { "alias": "showrc", "type": "boolean" })
                    .option("setperms", { "alias": "setugids", "type": "boolean" })
                    .option("excludedocs", { "type": "boolean" })
                    .option("force", { "type": "boolean" })
                    .option("allfiles", { "type": "boolean" })
                    .option("badreloc", { "type": "boolean" })
                    .option("ignoresize", { "type": "boolean" })
                    .option("ignorearch", { "type": "boolean" })
                    .option("ignoreos", { "type": "boolean" })
                    .option("includedocs", { "type": "boolean" })
                    .option("justdb", { "type": "boolean" })
                    .option("nocollections", { "type": "boolean" })
                    .option("nodeps", { "type": "boolean" })
                    .option("nodigest", { "type": "boolean" })
                    .option("nosignature", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("noorder", { "type": "boolean" })
                    .option("noscripts", { "type": "boolean" })
                    .option("notriggers", { "type": "boolean" })
                    .option("oldpackage", { "type": "boolean" })
                    .option("percent", { "type": "boolean" })
                    .option("replacefiles", { "type": "boolean" })
                    .option("replacepkgs", { "type": "boolean" })
                    .option("test", { "type": "boolean" })
                    .option("h", { "alias": "hash", "type": "boolean" })
                    .option("rcfile", { "type": "string" })
                    .option("pipe", { "type": "string" })
                    .option("D", { "alias": "define", "type": "string" })
                    .option("undefine", { "type": "string" })
                    .option("E", { "alias": "eval", "type": "string" })
                    .option("prefix", { "type": "string" })
                    .option("relocate", { "type": "string" })
                    .option("dbpath", { "type": "string" })
                    .option("root", { "type": "string" })
                    .option("excludepath", { "type": "string" });
            }
        },
        {
            mustHave: ["--freshen"],
            cmd: "$0 [packages...]",
            name: "SC-RPM-FRESHEN",
            prefix: "SC-rpm",
            paths: ["dbpath", "root", "excludepath"],
            booleans: ["?", "help", "version", "quiet", "v", "vv", "q", "query", "V", "verify", "i", "install", "U", "upgrade", "F", "freshen", "e", "erase", "querytags", "showrc", "setperms", "setugids", "excludedocs", "force", "allfiles", "badreloc", "ignoresize", "ignorearch", "ignoreos", "includedocs", "justdb", "nocollections", "nodeps", "nodigest", "nosignature", "noplugins", "noorder", "noscripts", "notriggers", "oldpackage", "percent", "replacefiles", "replacepkgs", "test", "h", "hash"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rpm", "SC-rpm")
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
                    .command("$0 [packages...]", "SC-RPM-FRESHEN")
                    .option("?", { "alias": "help", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("quiet", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("vv", { "type": "boolean" })
                    .option("q", { "alias": "query", "type": "boolean" })
                    .option("V", { "alias": "verify", "type": "boolean" })
                    .option("i", { "alias": "install", "type": "boolean" })
                    .option("U", { "alias": "upgrade", "type": "boolean" })
                    .option("F", { "alias": "freshen", "type": "boolean" })
                    .option("e", { "alias": "erase", "type": "boolean" })
                    .option("querytags", { "alias": "showrc", "type": "boolean" })
                    .option("setperms", { "alias": "setugids", "type": "boolean" })
                    .option("excludedocs", { "type": "boolean" })
                    .option("force", { "type": "boolean" })
                    .option("allfiles", { "type": "boolean" })
                    .option("badreloc", { "type": "boolean" })
                    .option("ignoresize", { "type": "boolean" })
                    .option("ignorearch", { "type": "boolean" })
                    .option("ignoreos", { "type": "boolean" })
                    .option("includedocs", { "type": "boolean" })
                    .option("justdb", { "type": "boolean" })
                    .option("nocollections", { "type": "boolean" })
                    .option("nodeps", { "type": "boolean" })
                    .option("nodigest", { "type": "boolean" })
                    .option("nosignature", { "type": "boolean" })
                    .option("noplugins", { "type": "boolean" })
                    .option("noorder", { "type": "boolean" })
                    .option("noscripts", { "type": "boolean" })
                    .option("notriggers", { "type": "boolean" })
                    .option("oldpackage", { "type": "boolean" })
                    .option("percent", { "type": "boolean" })
                    .option("replacefiles", { "type": "boolean" })
                    .option("replacepkgs", { "type": "boolean" })
                    .option("test", { "type": "boolean" })
                    .option("h", { "alias": "hash", "type": "boolean" })
                    .option("rcfile", { "type": "string" })
                    .option("pipe", { "type": "string" })
                    .option("D", { "alias": "define", "type": "string" })
                    .option("undefine", { "type": "string" })
                    .option("E", { "alias": "eval", "type": "string" })
                    .option("prefix", { "type": "string" })
                    .option("relocate", { "type": "string" })
                    .option("dbpath", { "type": "string" })
                    .option("root", { "type": "string" })
                    .option("excludepath", { "type": "string" });
            }
        },
        {
            mustHave: ["--erase"],
            cmd: "$0 [packages...]",
            name: "SC-RPM-ERASE",
            prefix: "SC-rpm",
            paths: ["dbpath", "root"],
            booleans: ["?", "help", "version", "quiet", "v", "vv", "q", "query", "V", "verify", "i", "install", "U", "upgrade", "F", "freshen", "e", "erase", "querytags", "showrc", "setperms", "setugids", "allmatches", "justdb", "nodeps", "noscripts", "notriggers", "test"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("rpm", "SC-rpm")
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
                    .command("$0 [packages...]", "SC-RPM-ERASE")
                    .option("?", { "alias": "help", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("quiet", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("vv", { "type": "boolean" })
                    .option("q", { "alias": "query", "type": "boolean" })
                    .option("V", { "alias": "verify", "type": "boolean" })
                    .option("i", { "alias": "install", "type": "boolean" })
                    .option("U", { "alias": "upgrade", "type": "boolean" })
                    .option("F", { "alias": "freshen", "type": "boolean" })
                    .option("e", { "alias": "erase", "type": "boolean" })
                    .option("querytags", { "alias": "showrc", "type": "boolean" })
                    .option("setperms", { "alias": "setugids", "type": "boolean" })
                    .option("allmatches", { "type": "boolean" })
                    .option("justdb", { "type": "boolean" })
                    .option("nodeps", { "type": "boolean" })
                    .option("noscripts", { "type": "boolean" })
                    .option("notriggers", { "type": "boolean" })
                    .option("test", { "type": "boolean" })
                    .option("rcfile", { "type": "string" })
                    .option("pipe", { "type": "string" })
                    .option("D", { "alias": "define", "type": "string" })
                    .option("undefine", { "type": "string" })
                    .option("E", { "alias": "eval", "type": "string" })
                    .option("dbpath", { "type": "string" })
                    .option("root", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=rpm.js.map