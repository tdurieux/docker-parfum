"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["useradd"],
    categories: ["USER_MANAGEMENT"],
    prefix: "SC-USER-ADD",
    scenarios: [
        {
            mustHave: ["-D"],
            cmd: "$0 [login]",
            name: "SC-USER-ADD",
            prefix: "SC-USER-ADD",
            paths: ["b", "base-dir", "d", "home-dir", "k", "skel", "R", "root"],
            booleans: ["D", "defaults", "h", "help", "l", "no-log-init", "m", "create-home", "M", "no-create-home", "N", "no-user-group", "o", "non-unique", "r", "system", "U", "user-group"],
            strings: ["c", "comment", "e", "expiredate", "f", "inactive", "g", "gid", "p", "password", "s", "shell", "u", "uid", "Z", "selinux-user"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("useradd", "SC-USER-ADD")
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
                    .command("$0 [login]", "SC-USER-ADD")
                    .option("D", { "alias": "defaults", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("l", { "alias": "no-log-init", "type": "boolean" })
                    .option("m", { "alias": "create-home", "type": "boolean" })
                    .option("M", { "alias": "no-create-home", "type": "boolean" })
                    .option("N", { "alias": "no-user-group", "type": "boolean" })
                    .option("o", { "alias": "non-unique", "type": "boolean" })
                    .option("r", { "alias": "system", "type": "boolean" })
                    .option("U", { "alias": "user-group", "type": "boolean" })
                    .option("c", { "alias": "comment", "type": "string" })
                    .option("e", { "alias": "expiredate", "type": "string" })
                    .option("f", { "alias": "inactive", "type": "string" })
                    .option("g", { "alias": "gid", "type": "string" })
                    .option("p", { "alias": "password", "type": "string" })
                    .option("s", { "alias": "shell", "type": "string" })
                    .option("u", { "alias": "uid", "type": "string" })
                    .option("Z", { "alias": "selinux-user", "type": "string" })
                    .option("b", { "alias": "base-dir", "type": "string" })
                    .option("d", { "alias": "home-dir", "type": "string" })
                    .option("k", { "alias": "skel", "type": "string" })
                    .option("R", { "alias": "root", "type": "string" })
                    .option("k", { "alias": "key", "type": "array" })
                    .option("G", { "alias": "groups", "type": "array" });
            }
        },
        {
            mustHave: ["--defaults"],
            cmd: "$0 [login]",
            name: "SC-USER-ADD",
            prefix: "SC-USER-ADD",
            paths: ["b", "base-dir", "d", "home-dir", "k", "skel", "R", "root"],
            booleans: ["D", "defaults", "h", "help", "l", "no-log-init", "m", "create-home", "M", "no-create-home", "N", "no-user-group", "o", "non-unique", "r", "system", "U", "user-group"],
            strings: ["c", "comment", "e", "expiredate", "f", "inactive", "g", "gid", "p", "password", "s", "shell", "u", "uid", "Z", "selinux-user"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("useradd", "SC-USER-ADD")
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
                    .command("$0 [login]", "SC-USER-ADD")
                    .option("D", { "alias": "defaults", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("l", { "alias": "no-log-init", "type": "boolean" })
                    .option("m", { "alias": "create-home", "type": "boolean" })
                    .option("M", { "alias": "no-create-home", "type": "boolean" })
                    .option("N", { "alias": "no-user-group", "type": "boolean" })
                    .option("o", { "alias": "non-unique", "type": "boolean" })
                    .option("r", { "alias": "system", "type": "boolean" })
                    .option("U", { "alias": "user-group", "type": "boolean" })
                    .option("c", { "alias": "comment", "type": "string" })
                    .option("e", { "alias": "expiredate", "type": "string" })
                    .option("f", { "alias": "inactive", "type": "string" })
                    .option("g", { "alias": "gid", "type": "string" })
                    .option("p", { "alias": "password", "type": "string" })
                    .option("s", { "alias": "shell", "type": "string" })
                    .option("u", { "alias": "uid", "type": "string" })
                    .option("Z", { "alias": "selinux-user", "type": "string" })
                    .option("b", { "alias": "base-dir", "type": "string" })
                    .option("d", { "alias": "home-dir", "type": "string" })
                    .option("k", { "alias": "skel", "type": "string" })
                    .option("R", { "alias": "root", "type": "string" })
                    .option("k", { "alias": "key", "type": "array" })
                    .option("G", { "alias": "groups", "type": "array" });
            }
        },
        {
            mustHave: ["-G", "-D"],
            cmd: "$0 [login]",
            name: "SC-USER-ADD",
            prefix: "SC-USER-ADD",
            paths: ["b", "base-dir", "d", "home-dir", "k", "skel", "R", "root"],
            booleans: ["D", "defaults", "h", "help", "l", "no-log-init", "m", "create-home", "M", "no-create-home", "N", "no-user-group", "o", "non-unique", "r", "system", "U", "user-group"],
            strings: ["c", "comment", "e", "expiredate", "f", "inactive", "g", "gid", "p", "password", "s", "shell", "u", "uid", "Z", "selinux-user", "G", "groups"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("useradd", "SC-USER-ADD")
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
                    .command("$0 [login]", "SC-USER-ADD")
                    .option("D", { "alias": "defaults", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("l", { "alias": "no-log-init", "type": "boolean" })
                    .option("m", { "alias": "create-home", "type": "boolean" })
                    .option("M", { "alias": "no-create-home", "type": "boolean" })
                    .option("N", { "alias": "no-user-group", "type": "boolean" })
                    .option("o", { "alias": "non-unique", "type": "boolean" })
                    .option("r", { "alias": "system", "type": "boolean" })
                    .option("U", { "alias": "user-group", "type": "boolean" })
                    .option("c", { "alias": "comment", "type": "string" })
                    .option("e", { "alias": "expiredate", "type": "string" })
                    .option("f", { "alias": "inactive", "type": "string" })
                    .option("g", { "alias": "gid", "type": "string" })
                    .option("p", { "alias": "password", "type": "string" })
                    .option("s", { "alias": "shell", "type": "string" })
                    .option("u", { "alias": "uid", "type": "string" })
                    .option("Z", { "alias": "selinux-user", "type": "string" })
                    .option("G", { "alias": "groups", "type": "string" })
                    .option("b", { "alias": "base-dir", "type": "string" })
                    .option("d", { "alias": "home-dir", "type": "string" })
                    .option("k", { "alias": "skel", "type": "string" })
                    .option("R", { "alias": "root", "type": "string" })
                    .option("k", { "alias": "key", "type": "array" });
            }
        },
        {
            mustHave: ["-G", "--defaults"],
            cmd: "$0 [login]",
            name: "SC-USER-ADD",
            prefix: "SC-USER-ADD",
            paths: ["b", "base-dir", "d", "home-dir", "k", "skel", "R", "root"],
            booleans: ["D", "defaults", "h", "help", "l", "no-log-init", "m", "create-home", "M", "no-create-home", "N", "no-user-group", "o", "non-unique", "r", "system", "U", "user-group"],
            strings: ["c", "comment", "e", "expiredate", "f", "inactive", "g", "gid", "p", "password", "s", "shell", "u", "uid", "Z", "selinux-user", "G", "groups"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("useradd", "SC-USER-ADD")
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
                    .command("$0 [login]", "SC-USER-ADD")
                    .option("D", { "alias": "defaults", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("l", { "alias": "no-log-init", "type": "boolean" })
                    .option("m", { "alias": "create-home", "type": "boolean" })
                    .option("M", { "alias": "no-create-home", "type": "boolean" })
                    .option("N", { "alias": "no-user-group", "type": "boolean" })
                    .option("o", { "alias": "non-unique", "type": "boolean" })
                    .option("r", { "alias": "system", "type": "boolean" })
                    .option("U", { "alias": "user-group", "type": "boolean" })
                    .option("c", { "alias": "comment", "type": "string" })
                    .option("e", { "alias": "expiredate", "type": "string" })
                    .option("f", { "alias": "inactive", "type": "string" })
                    .option("g", { "alias": "gid", "type": "string" })
                    .option("p", { "alias": "password", "type": "string" })
                    .option("s", { "alias": "shell", "type": "string" })
                    .option("u", { "alias": "uid", "type": "string" })
                    .option("Z", { "alias": "selinux-user", "type": "string" })
                    .option("G", { "alias": "groups", "type": "string" })
                    .option("b", { "alias": "base-dir", "type": "string" })
                    .option("d", { "alias": "home-dir", "type": "string" })
                    .option("k", { "alias": "skel", "type": "string" })
                    .option("R", { "alias": "root", "type": "string" })
                    .option("k", { "alias": "key", "type": "array" });
            }
        },
        {
            mustHave: ["-G"],
            cmd: "$0 [login]",
            name: "SC-USER-ADD",
            prefix: "SC-USER-ADD",
            paths: ["b", "base-dir", "d", "home-dir", "k", "skel", "R", "root"],
            booleans: ["D", "defaults", "h", "help", "l", "no-log-init", "m", "create-home", "M", "no-create-home", "N", "no-user-group", "o", "non-unique", "r", "system", "U", "user-group"],
            strings: ["c", "comment", "e", "expiredate", "f", "inactive", "g", "gid", "p", "password", "s", "shell", "u", "uid", "Z", "selinux-user", "G", "groups"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("useradd", "SC-USER-ADD")
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
                    .command("$0 [login]", "SC-USER-ADD")
                    .option("D", { "alias": "defaults", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("l", { "alias": "no-log-init", "type": "boolean" })
                    .option("m", { "alias": "create-home", "type": "boolean" })
                    .option("M", { "alias": "no-create-home", "type": "boolean" })
                    .option("N", { "alias": "no-user-group", "type": "boolean" })
                    .option("o", { "alias": "non-unique", "type": "boolean" })
                    .option("r", { "alias": "system", "type": "boolean" })
                    .option("U", { "alias": "user-group", "type": "boolean" })
                    .option("c", { "alias": "comment", "type": "string" })
                    .option("e", { "alias": "expiredate", "type": "string" })
                    .option("f", { "alias": "inactive", "type": "string" })
                    .option("g", { "alias": "gid", "type": "string" })
                    .option("p", { "alias": "password", "type": "string" })
                    .option("s", { "alias": "shell", "type": "string" })
                    .option("u", { "alias": "uid", "type": "string" })
                    .option("Z", { "alias": "selinux-user", "type": "string" })
                    .option("G", { "alias": "groups", "type": "string" })
                    .option("b", { "alias": "base-dir", "type": "string" })
                    .option("d", { "alias": "home-dir", "type": "string" })
                    .option("k", { "alias": "skel", "type": "string" })
                    .option("R", { "alias": "root", "type": "string" })
                    .option("k", { "alias": "key", "type": "array" });
            }
        },
        {
            cmd: "$0 [login]",
            name: "SC-USER-ADD",
            prefix: "SC-USER-ADD",
            paths: ["b", "base-dir", "d", "home-dir", "k", "skel", "R", "root"],
            booleans: ["D", "defaults", "h", "help", "l", "no-log-init", "m", "create-home", "M", "no-create-home", "N", "no-user-group", "o", "non-unique", "r", "system", "U", "user-group"],
            strings: ["c", "comment", "e", "expiredate", "f", "inactive", "g", "gid", "p", "password", "s", "shell", "u", "uid", "Z", "selinux-user"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("useradd", "SC-USER-ADD")
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
                    .command("$0 [login]", "SC-USER-ADD")
                    .option("D", { "alias": "defaults", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("l", { "alias": "no-log-init", "type": "boolean" })
                    .option("m", { "alias": "create-home", "type": "boolean" })
                    .option("M", { "alias": "no-create-home", "type": "boolean" })
                    .option("N", { "alias": "no-user-group", "type": "boolean" })
                    .option("o", { "alias": "non-unique", "type": "boolean" })
                    .option("r", { "alias": "system", "type": "boolean" })
                    .option("U", { "alias": "user-group", "type": "boolean" })
                    .option("c", { "alias": "comment", "type": "string" })
                    .option("e", { "alias": "expiredate", "type": "string" })
                    .option("f", { "alias": "inactive", "type": "string" })
                    .option("g", { "alias": "gid", "type": "string" })
                    .option("p", { "alias": "password", "type": "string" })
                    .option("s", { "alias": "shell", "type": "string" })
                    .option("u", { "alias": "uid", "type": "string" })
                    .option("Z", { "alias": "selinux-user", "type": "string" })
                    .option("b", { "alias": "base-dir", "type": "string" })
                    .option("d", { "alias": "home-dir", "type": "string" })
                    .option("k", { "alias": "skel", "type": "string" })
                    .option("R", { "alias": "root", "type": "string" })
                    .option("k", { "alias": "key", "type": "array" })
                    .option("G", { "alias": "groups", "type": "array" });
            }
        },
    ]
};
//# sourceMappingURL=useradd.js.map