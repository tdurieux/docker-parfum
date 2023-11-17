"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["gh"],
    categories: [],
    prefix: "SC-GH",
    scenarios: [
        {
            cmd: "$0 auth",
            name: "SC-GH-AUTH",
            prefix: "SC-GH",
            booleans: ["help"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 auth", "SC-GH-AUTH")
                    .option("help", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 auth login",
            name: "SC-GH-AUTH-LOGIN",
            prefix: "SC-GH",
            booleans: ["insecure-storage", "w", "web", "with-token"],
            strings: ["p", "git-protocol", "h", "hostname", "s", "scopes"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 auth login", "SC-GH-AUTH-LOGIN")
                    .option("insecure-storage", { "type": "boolean" })
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("with-token", { "type": "boolean" })
                    .option("p", { "alias": "git-protocol", "type": "string" })
                    .option("h", { "alias": "hostname", "type": "string" })
                    .option("s", { "alias": "scopes", "type": "string" });
            }
        },
        {
            cmd: "$0 auth logout",
            name: "SC-GH-AUTH-LOGOUT",
            prefix: "SC-GH",
            strings: ["h", "hostname"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 auth logout", "SC-GH-AUTH-LOGOUT")
                    .option("h", { "alias": "hostname", "type": "string" });
            }
        },
        {
            cmd: "$0 auth refresh",
            name: "SC-GH-AUTH-REFRESH",
            prefix: "SC-GH",
            booleans: ["insecure-storage", "reset-scopes"],
            strings: ["h", "hostname", "r", "remove-scopes", "s", "scopes"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 auth refresh", "SC-GH-AUTH-REFRESH")
                    .option("insecure-storage", { "type": "boolean" })
                    .option("reset-scopes", { "type": "boolean" })
                    .option("h", { "alias": "hostname", "type": "string" })
                    .option("r", { "alias": "remove-scopes", "type": "string" })
                    .option("s", { "alias": "scopes", "type": "string" });
            }
        },
        {
            cmd: "$0 auth setup-git",
            name: "SC-GH-AUTH-SETUP-GIT",
            prefix: "SC-GH",
            strings: ["h", "hostname"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 auth setup-git", "SC-GH-AUTH-SETUP-GIT")
                    .option("h", { "alias": "hostname", "type": "string" });
            }
        },
        {
            cmd: "$0 auth status",
            name: "SC-GH-AUTH-STATUS",
            prefix: "SC-GH",
            booleans: ["t", "show-token"],
            strings: ["h", "hostname"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 auth status", "SC-GH-AUTH-STATUS")
                    .option("t", { "alias": "show-token", "type": "boolean" })
                    .option("h", { "alias": "hostname", "type": "string" });
            }
        },
        {
            cmd: "$0 auth token",
            name: "SC-GH-AUTH-TOKEN",
            prefix: "SC-GH",
            strings: ["h", "hostname"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 auth token", "SC-GH-AUTH-TOKEN")
                    .option("h", { "alias": "hostname", "type": "string" });
            }
        },
        {
            cmd: "$0 browse",
            name: "SC-GH-BROWSE",
            prefix: "SC-GH",
            booleans: ["n", "no-browser", "p", "projects", "r", "releases", "s", "settings", "w", "wiki"],
            strings: ["b", "branch", "c", "commit", "R", "repo"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 browse", "SC-GH-BROWSE")
                    .option("n", { "alias": "no-browser", "type": "boolean" })
                    .option("p", { "alias": "projects", "type": "boolean" })
                    .option("r", { "alias": "releases", "type": "boolean" })
                    .option("s", { "alias": "settings", "type": "boolean" })
                    .option("w", { "alias": "wiki", "type": "boolean" })
                    .option("b", { "alias": "branch", "type": "string" })
                    .option("c", { "alias": "commit", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" });
            }
        },
        {
            cmd: "$0 codespace",
            name: "SC-GH-CODESPACE",
            prefix: "SC-GH",
            booleans: ["help"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace", "SC-GH-CODESPACE")
                    .option("help", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 codespace code",
            name: "SC-GH-CODESPACE-CODE",
            prefix: "SC-GH",
            booleans: ["insiders", "w", "web"],
            strings: ["c", "codespace", "R", "repo", "repo-owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace code", "SC-GH-CODESPACE-CODE")
                    .option("insiders", { "type": "boolean" })
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 codespace cp",
            name: "SC-GH-CODESPACE-CP",
            prefix: "SC-GH",
            booleans: ["e", "expand", "r", "recursive"],
            strings: ["c", "codespace", "p", "profile", "R", "repo", "repo-owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace cp", "SC-GH-CODESPACE-CP")
                    .option("e", { "alias": "expand", "type": "boolean" })
                    .option("r", { "alias": "recursive", "type": "boolean" })
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("p", { "alias": "profile", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 codespace create",
            name: "SC-GH-CODESPACE-CREATE",
            prefix: "SC-GH",
            booleans: ["default-permissions", "s", "status", "w", "web"],
            strings: ["b", "branch", "devcontainer-path", "d", "display-name", "idle-timeout", "l", "location", "m", "machine", "R", "repo", "retention-period"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace create", "SC-GH-CODESPACE-CREATE")
                    .option("default-permissions", { "type": "boolean" })
                    .option("s", { "alias": "status", "type": "boolean" })
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("b", { "alias": "branch", "type": "string" })
                    .option("devcontainer-path", { "type": "string" })
                    .option("d", { "alias": "display-name", "type": "string" })
                    .option("idle-timeout", { "type": "string" })
                    .option("l", { "alias": "location", "type": "string" })
                    .option("m", { "alias": "machine", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("retention-period", { "type": "string" });
            }
        },
        {
            cmd: "$0 codespace delete",
            name: "SC-GH-CODESPACE-DELETE",
            prefix: "SC-GH",
            booleans: ["all", "f", "force"],
            strings: ["c", "codespace", "days", "o", "org", "R", "repo", "repo-owner", "u", "user"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace delete", "SC-GH-CODESPACE-DELETE")
                    .option("all", { "type": "boolean" })
                    .option("f", { "alias": "force", "type": "boolean" })
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("days", { "type": "string" })
                    .option("o", { "alias": "org", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" })
                    .option("u", { "alias": "user", "type": "string" });
            }
        },
        {
            cmd: "$0 codespace edit",
            name: "SC-GH-CODESPACE-EDIT",
            prefix: "SC-GH",
            strings: ["c", "codespace", "d", "display-name", "m", "machine", "R", "repo", "repo-owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace edit", "SC-GH-CODESPACE-EDIT")
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("d", { "alias": "display-name", "type": "string" })
                    .option("m", { "alias": "machine", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 codespace jupyter",
            name: "SC-GH-CODESPACE-JUPYTER",
            prefix: "SC-GH",
            strings: ["c", "codespace", "R", "repo", "repo-owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace jupyter", "SC-GH-CODESPACE-JUPYTER")
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 codespace list",
            name: "SC-GH-CODESPACE-LIST",
            prefix: "SC-GH",
            booleans: ["w", "web"],
            strings: ["q", "jq", "json", "L", "limit", "o", "org", "R", "repo", "t", "template", "u", "user"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace list", "SC-GH-CODESPACE-LIST")
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("q", { "alias": "jq", "type": "string" })
                    .option("json", { "type": "string" })
                    .option("L", { "alias": "limit", "type": "string" })
                    .option("o", { "alias": "org", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("t", { "alias": "template", "type": "string" })
                    .option("u", { "alias": "user", "type": "string" });
            }
        },
        {
            cmd: "$0 codespace logs",
            name: "SC-GH-CODESPACE-LOGS",
            prefix: "SC-GH",
            booleans: ["f", "follow"],
            strings: ["c", "codespace", "R", "repo", "repo-owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace logs", "SC-GH-CODESPACE-LOGS")
                    .option("f", { "alias": "follow", "type": "boolean" })
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 codespace ports",
            name: "SC-GH-CODESPACE-PORTS",
            prefix: "SC-GH",
            strings: ["c", "codespace", "q", "jq", "json", "R", "repo", "repo-owner", "t", "template"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace ports", "SC-GH-CODESPACE-PORTS")
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("q", { "alias": "jq", "type": "string" })
                    .option("json", { "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" })
                    .option("t", { "alias": "template", "type": "string" });
            }
        },
        {
            cmd: "$0 codespace ports forward",
            name: "SC-GH-CODESPACE PORTS-FORWARD",
            prefix: "SC-GH",
            booleans: ["help"],
            strings: ["c", "codespace", "R", "repo", "repo-owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace ports forward", "SC-GH-CODESPACE PORTS-FORWARD")
                    .option("help", { "type": "boolean" })
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 codespace ports visibility",
            name: "SC-GH-CODESPACE PORTS-VISIBILITY",
            prefix: "SC-GH",
            booleans: ["help"],
            strings: ["c", "codespace", "R", "repo", "repo-owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace ports visibility", "SC-GH-CODESPACE PORTS-VISIBILITY")
                    .option("help", { "type": "boolean" })
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 codespace rebuild",
            name: "SC-GH-CODESPACE-REBUILD",
            prefix: "SC-GH",
            booleans: ["full"],
            strings: ["c", "codespace", "R", "repo", "repo-owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace rebuild", "SC-GH-CODESPACE-REBUILD")
                    .option("full", { "type": "boolean" })
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 codespace ssh",
            name: "SC-GH-CODESPACE-SSH",
            prefix: "SC-GH",
            booleans: ["config", "d", "debug"],
            strings: ["c", "codespace", "debug-file", "profile", "R", "repo", "repo-owner", "server-port"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace ssh", "SC-GH-CODESPACE-SSH")
                    .option("config", { "type": "boolean" })
                    .option("d", { "alias": "debug", "type": "boolean" })
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("debug-file", { "type": "string" })
                    .option("profile", { "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" })
                    .option("server-port", { "type": "string" });
            }
        },
        {
            cmd: "$0 codespace stop",
            name: "SC-GH-CODESPACE-STOP",
            prefix: "SC-GH",
            strings: ["c", "codespace", "o", "org", "R", "repo", "repo-owner", "u", "user"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace stop", "SC-GH-CODESPACE-STOP")
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("o", { "alias": "org", "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" })
                    .option("u", { "alias": "user", "type": "string" });
            }
        },
        {
            cmd: "$0 codespace view",
            name: "SC-GH-CODESPACE-VIEW",
            prefix: "SC-GH",
            strings: ["c", "codespace", "q", "jq", "json", "R", "repo", "repo-owner", "t", "template"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 codespace view", "SC-GH-CODESPACE-VIEW")
                    .option("c", { "alias": "codespace", "type": "string" })
                    .option("q", { "alias": "jq", "type": "string" })
                    .option("json", { "type": "string" })
                    .option("R", { "alias": "repo", "type": "string" })
                    .option("repo-owner", { "type": "string" })
                    .option("t", { "alias": "template", "type": "string" });
            }
        },
        {
            cmd: "$0 gist",
            name: "SC-GH-GIST",
            prefix: "SC-GH",
            booleans: ["help"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 gist", "SC-GH-GIST")
                    .option("help", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 gist clone",
            name: "SC-GH-GIST-CLONE",
            prefix: "SC-GH",
            booleans: ["help"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 gist clone", "SC-GH-GIST-CLONE")
                    .option("help", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 gist create",
            name: "SC-GH-GIST-CREATE",
            prefix: "SC-GH",
            booleans: ["p", "public", "w", "web"],
            strings: ["d", "desc", "f", "filename"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 gist create", "SC-GH-GIST-CREATE")
                    .option("p", { "alias": "public", "type": "boolean" })
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("d", { "alias": "desc", "type": "string" })
                    .option("f", { "alias": "filename", "type": "string" });
            }
        },
        {
            cmd: "$0 gist delete",
            name: "SC-GH-GIST-DELETE",
            prefix: "SC-GH",
            booleans: ["help"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 gist delete", "SC-GH-GIST-DELETE")
                    .option("help", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 gist edit",
            name: "SC-GH-GIST-EDIT",
            prefix: "SC-GH",
            strings: ["a", "add", "d", "desc", "f", "filename", "r", "remove"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 gist edit", "SC-GH-GIST-EDIT")
                    .option("a", { "alias": "add", "type": "string" })
                    .option("d", { "alias": "desc", "type": "string" })
                    .option("f", { "alias": "filename", "type": "string" })
                    .option("r", { "alias": "remove", "type": "string" });
            }
        },
        {
            cmd: "$0 gist list",
            name: "SC-GH-GIST-LIST",
            prefix: "SC-GH",
            booleans: ["public", "secret"],
            strings: ["L", "limit"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 gist list", "SC-GH-GIST-LIST")
                    .option("public", { "type": "boolean" })
                    .option("secret", { "type": "boolean" })
                    .option("L", { "alias": "limit", "type": "string" });
            }
        },
        {
            cmd: "$0 gist rename",
            name: "SC-GH-GIST-RENAME",
            prefix: "SC-GH",
            booleans: ["help"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 gist rename", "SC-GH-GIST-RENAME")
                    .option("help", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 gist view",
            name: "SC-GH-GIST-VIEW",
            prefix: "SC-GH",
            booleans: ["files", "r", "raw", "w", "web"],
            strings: ["f", "filename"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 gist view", "SC-GH-GIST-VIEW")
                    .option("files", { "type": "boolean" })
                    .option("r", { "alias": "raw", "type": "boolean" })
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("f", { "alias": "filename", "type": "string" });
            }
        },
        {
            cmd: "$0 issue",
            name: "SC-GH-ISSUE",
            prefix: "SC-GH",
            strings: ["R", "repo"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 issue", "SC-GH-ISSUE")
                    .option("R", { "alias": "repo", "type": "string" });
            }
        },
        {
            cmd: "$0 issue create",
            name: "SC-GH-ISSUE-CREATE",
            prefix: "SC-GH",
            booleans: ["w", "web"],
            strings: ["a", "assignee", "b", "body", "F", "body-file", "l", "label", "m", "milestone", "p", "project", "recover", "T", "template", "t", "title"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 issue create", "SC-GH-ISSUE-CREATE")
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("a", { "alias": "assignee", "type": "string" })
                    .option("b", { "alias": "body", "type": "string" })
                    .option("F", { "alias": "body-file", "type": "string" })
                    .option("l", { "alias": "label", "type": "string" })
                    .option("m", { "alias": "milestone", "type": "string" })
                    .option("p", { "alias": "project", "type": "string" })
                    .option("recover", { "type": "string" })
                    .option("T", { "alias": "template", "type": "string" })
                    .option("t", { "alias": "title", "type": "string" });
            }
        },
        {
            cmd: "$0 issue list",
            name: "SC-GH-ISSUE-LIST",
            prefix: "SC-GH",
            booleans: ["w", "web"],
            strings: ["app", "a", "assignee", "A", "author", "q", "jq", "json", "l", "label", "L", "limit", "mention", "m", "milestone", "S", "search", "s", "state", "t", "template"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 issue list", "SC-GH-ISSUE-LIST")
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("app", { "type": "string" })
                    .option("a", { "alias": "assignee", "type": "string" })
                    .option("A", { "alias": "author", "type": "string" })
                    .option("q", { "alias": "jq", "type": "string" })
                    .option("json", { "type": "string" })
                    .option("l", { "alias": "label", "type": "string" })
                    .option("L", { "alias": "limit", "type": "string" })
                    .option("mention", { "type": "string" })
                    .option("m", { "alias": "milestone", "type": "string" })
                    .option("S", { "alias": "search", "type": "string" })
                    .option("s", { "alias": "state", "type": "string" })
                    .option("t", { "alias": "template", "type": "string" });
            }
        },
        {
            cmd: "$0 issue status",
            name: "SC-GH-ISSUE-STATUS",
            prefix: "SC-GH",
            strings: ["q", "jq", "json", "t", "template"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 issue status", "SC-GH-ISSUE-STATUS")
                    .option("q", { "alias": "jq", "type": "string" })
                    .option("json", { "type": "string" })
                    .option("t", { "alias": "template", "type": "string" });
            }
        },
        {
            cmd: "$0 org",
            name: "SC-GH-ORG",
            prefix: "SC-GH",
            booleans: ["help"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 org", "SC-GH-ORG")
                    .option("help", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 org list",
            name: "SC-GH-ORG-LIST",
            prefix: "SC-GH",
            strings: ["L", "limit"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 org list", "SC-GH-ORG-LIST")
                    .option("L", { "alias": "limit", "type": "string" });
            }
        },
        {
            cmd: "$0 pr",
            name: "SC-GH-PR",
            prefix: "SC-GH",
            strings: ["R", "repo"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 pr", "SC-GH-PR")
                    .option("R", { "alias": "repo", "type": "string" });
            }
        },
        {
            cmd: "$0 pr create",
            name: "SC-GH-PR-CREATE",
            prefix: "SC-GH",
            booleans: ["d", "draft", "f", "fill", "fill-first", "no-maintainer-edit", "w", "web"],
            strings: ["a", "assignee", "B", "base", "b", "body", "F", "body-file", "H", "head", "l", "label", "m", "milestone", "p", "project", "recover", "r", "reviewer", "T", "template", "t", "title"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 pr create", "SC-GH-PR-CREATE")
                    .option("d", { "alias": "draft", "type": "boolean" })
                    .option("f", { "alias": "fill", "type": "boolean" })
                    .option("fill-first", { "type": "boolean" })
                    .option("no-maintainer-edit", { "type": "boolean" })
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("a", { "alias": "assignee", "type": "string" })
                    .option("B", { "alias": "base", "type": "string" })
                    .option("b", { "alias": "body", "type": "string" })
                    .option("F", { "alias": "body-file", "type": "string" })
                    .option("H", { "alias": "head", "type": "string" })
                    .option("l", { "alias": "label", "type": "string" })
                    .option("m", { "alias": "milestone", "type": "string" })
                    .option("p", { "alias": "project", "type": "string" })
                    .option("recover", { "type": "string" })
                    .option("r", { "alias": "reviewer", "type": "string" })
                    .option("T", { "alias": "template", "type": "string" })
                    .option("t", { "alias": "title", "type": "string" });
            }
        },
        {
            cmd: "$0 pr list",
            name: "SC-GH-PR-LIST",
            prefix: "SC-GH",
            booleans: ["d", "draft", "w", "web"],
            strings: ["app", "a", "assignee", "A", "author", "B", "base", "H", "head", "q", "jq", "json", "l", "label", "L", "limit", "S", "search", "s", "state", "t", "template"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 pr list", "SC-GH-PR-LIST")
                    .option("d", { "alias": "draft", "type": "boolean" })
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("app", { "type": "string" })
                    .option("a", { "alias": "assignee", "type": "string" })
                    .option("A", { "alias": "author", "type": "string" })
                    .option("B", { "alias": "base", "type": "string" })
                    .option("H", { "alias": "head", "type": "string" })
                    .option("q", { "alias": "jq", "type": "string" })
                    .option("json", { "type": "string" })
                    .option("l", { "alias": "label", "type": "string" })
                    .option("L", { "alias": "limit", "type": "string" })
                    .option("S", { "alias": "search", "type": "string" })
                    .option("s", { "alias": "state", "type": "string" })
                    .option("t", { "alias": "template", "type": "string" });
            }
        },
        {
            cmd: "$0 pr status",
            name: "SC-GH-PR-STATUS",
            prefix: "SC-GH",
            booleans: ["c", "conflict-status"],
            strings: ["q", "jq", "json", "t", "template"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 pr status", "SC-GH-PR-STATUS")
                    .option("c", { "alias": "conflict-status", "type": "boolean" })
                    .option("q", { "alias": "jq", "type": "string" })
                    .option("json", { "type": "string" })
                    .option("t", { "alias": "template", "type": "string" });
            }
        },
        {
            cmd: "$0 project",
            name: "SC-GH-PROJECT",
            prefix: "SC-GH",
            booleans: ["help"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project", "SC-GH-PROJECT")
                    .option("help", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 project close",
            name: "SC-GH-PROJECT-CLOSE",
            prefix: "SC-GH",
            booleans: ["undo"],
            strings: ["format", "owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project close", "SC-GH-PROJECT-CLOSE")
                    .option("undo", { "type": "boolean" })
                    .option("format", { "type": "string" })
                    .option("owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 project copy",
            name: "SC-GH-PROJECT-COPY",
            prefix: "SC-GH",
            booleans: ["drafts"],
            strings: ["format", "source-owner", "target-owner", "title"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project copy", "SC-GH-PROJECT-COPY")
                    .option("drafts", { "type": "boolean" })
                    .option("format", { "type": "string" })
                    .option("source-owner", { "type": "string" })
                    .option("target-owner", { "type": "string" })
                    .option("title", { "type": "string" });
            }
        },
        {
            cmd: "$0 project create",
            name: "SC-GH-PROJECT-CREATE",
            prefix: "SC-GH",
            strings: ["format", "owner", "title"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project create", "SC-GH-PROJECT-CREATE")
                    .option("format", { "type": "string" })
                    .option("owner", { "type": "string" })
                    .option("title", { "type": "string" });
            }
        },
        {
            cmd: "$0 project delete",
            name: "SC-GH-PROJECT-DELETE",
            prefix: "SC-GH",
            strings: ["format", "owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project delete", "SC-GH-PROJECT-DELETE")
                    .option("format", { "type": "string" })
                    .option("owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 project edit",
            name: "SC-GH-PROJECT-EDIT",
            prefix: "SC-GH",
            strings: ["d", "description", "format", "owner", "readme", "title", "visibility"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project edit", "SC-GH-PROJECT-EDIT")
                    .option("d", { "alias": "description", "type": "string" })
                    .option("format", { "type": "string" })
                    .option("owner", { "type": "string" })
                    .option("readme", { "type": "string" })
                    .option("title", { "type": "string" })
                    .option("visibility", { "type": "string" });
            }
        },
        {
            cmd: "$0 project field-create",
            name: "SC-GH-PROJECT-FIELD-CREATE",
            prefix: "SC-GH",
            strings: ["data-type", "format", "name", "owner", "single-select-options"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project field-create", "SC-GH-PROJECT-FIELD-CREATE")
                    .option("data-type", { "type": "string" })
                    .option("format", { "type": "string" })
                    .option("name", { "type": "string" })
                    .option("owner", { "type": "string" })
                    .option("single-select-options", { "type": "string" });
            }
        },
        {
            cmd: "$0 project field-delete",
            name: "SC-GH-PROJECT-FIELD-DELETE",
            prefix: "SC-GH",
            strings: ["format", "id"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project field-delete", "SC-GH-PROJECT-FIELD-DELETE")
                    .option("format", { "type": "string" })
                    .option("id", { "type": "string" });
            }
        },
        {
            cmd: "$0 project field-list",
            name: "SC-GH-PROJECT-FIELD-LIST",
            prefix: "SC-GH",
            strings: ["format", "L", "limit", "owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project field-list", "SC-GH-PROJECT-FIELD-LIST")
                    .option("format", { "type": "string" })
                    .option("L", { "alias": "limit", "type": "string" })
                    .option("owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 project item-add",
            name: "SC-GH-PROJECT-ITEM-ADD",
            prefix: "SC-GH",
            strings: ["format", "owner", "url"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project item-add", "SC-GH-PROJECT-ITEM-ADD")
                    .option("format", { "type": "string" })
                    .option("owner", { "type": "string" })
                    .option("url", { "type": "string" });
            }
        },
        {
            cmd: "$0 project item-archive",
            name: "SC-GH-PROJECT-ITEM-ARCHIVE",
            prefix: "SC-GH",
            booleans: ["undo"],
            strings: ["format", "id", "owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project item-archive", "SC-GH-PROJECT-ITEM-ARCHIVE")
                    .option("undo", { "type": "boolean" })
                    .option("format", { "type": "string" })
                    .option("id", { "type": "string" })
                    .option("owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 project item-create",
            name: "SC-GH-PROJECT-ITEM-CREATE",
            prefix: "SC-GH",
            strings: ["body", "format", "owner", "title"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project item-create", "SC-GH-PROJECT-ITEM-CREATE")
                    .option("body", { "type": "string" })
                    .option("format", { "type": "string" })
                    .option("owner", { "type": "string" })
                    .option("title", { "type": "string" });
            }
        },
        {
            cmd: "$0 project item-delete",
            name: "SC-GH-PROJECT-ITEM-DELETE",
            prefix: "SC-GH",
            strings: ["format", "id", "owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project item-delete", "SC-GH-PROJECT-ITEM-DELETE")
                    .option("format", { "type": "string" })
                    .option("id", { "type": "string" })
                    .option("owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 project item-edit",
            name: "SC-GH-PROJECT-ITEM-EDIT",
            prefix: "SC-GH",
            booleans: ["clear"],
            strings: ["body", "date", "field-id", "format", "id", "iteration-id", "number", "project-id", "single-select-option-id", "text", "title"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project item-edit", "SC-GH-PROJECT-ITEM-EDIT")
                    .option("clear", { "type": "boolean" })
                    .option("body", { "type": "string" })
                    .option("date", { "type": "string" })
                    .option("field-id", { "type": "string" })
                    .option("format", { "type": "string" })
                    .option("id", { "type": "string" })
                    .option("iteration-id", { "type": "string" })
                    .option("number", { "type": "string" })
                    .option("project-id", { "type": "string" })
                    .option("single-select-option-id", { "type": "string" })
                    .option("text", { "type": "string" })
                    .option("title", { "type": "string" });
            }
        },
        {
            cmd: "$0 project item-list",
            name: "SC-GH-PROJECT-ITEM-LIST",
            prefix: "SC-GH",
            strings: ["format", "L", "limit", "owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project item-list", "SC-GH-PROJECT-ITEM-LIST")
                    .option("format", { "type": "string" })
                    .option("L", { "alias": "limit", "type": "string" })
                    .option("owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 project list",
            name: "SC-GH-PROJECT-LIST",
            prefix: "SC-GH",
            booleans: ["closed", "w", "web"],
            strings: ["format", "L", "limit", "owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project list", "SC-GH-PROJECT-LIST")
                    .option("closed", { "type": "boolean" })
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("format", { "type": "string" })
                    .option("L", { "alias": "limit", "type": "string" })
                    .option("owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 project mark-template",
            name: "SC-GH-PROJECT-MARK-TEMPLATE",
            prefix: "SC-GH",
            booleans: ["undo"],
            strings: ["format", "owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project mark-template", "SC-GH-PROJECT-MARK-TEMPLATE")
                    .option("undo", { "type": "boolean" })
                    .option("format", { "type": "string" })
                    .option("owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 project view",
            name: "SC-GH-PROJECT-VIEW",
            prefix: "SC-GH",
            booleans: ["w", "web"],
            strings: ["format", "owner"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 project view", "SC-GH-PROJECT-VIEW")
                    .option("w", { "alias": "web", "type": "boolean" })
                    .option("format", { "type": "string" })
                    .option("owner", { "type": "string" });
            }
        },
        {
            cmd: "$0 release",
            name: "SC-GH-RELEASE",
            prefix: "SC-GH",
            strings: ["R", "repo"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 release", "SC-GH-RELEASE")
                    .option("R", { "alias": "repo", "type": "string" });
            }
        },
        {
            cmd: "$0 release create",
            name: "SC-GH-RELEASE-CREATE",
            prefix: "SC-GH",
            booleans: ["d", "draft", "generate-notes", "latest", "notes-from-tag", "p", "prerelease", "verify-tag"],
            strings: ["discussion-category", "n", "notes", "F", "notes-file", "notes-start-tag", "target", "t", "title"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 release create", "SC-GH-RELEASE-CREATE")
                    .option("d", { "alias": "draft", "type": "boolean" })
                    .option("generate-notes", { "type": "boolean" })
                    .option("latest", { "type": "boolean" })
                    .option("notes-from-tag", { "type": "boolean" })
                    .option("p", { "alias": "prerelease", "type": "boolean" })
                    .option("verify-tag", { "type": "boolean" })
                    .option("discussion-category", { "type": "string" })
                    .option("n", { "alias": "notes", "type": "string" })
                    .option("F", { "alias": "notes-file", "type": "string" })
                    .option("notes-start-tag", { "type": "string" })
                    .option("target", { "type": "string" })
                    .option("t", { "alias": "title", "type": "string" });
            }
        },
        {
            cmd: "$0 release list",
            name: "SC-GH-RELEASE-LIST",
            prefix: "SC-GH",
            booleans: ["exclude-drafts", "exclude-pre-releases"],
            strings: ["L", "limit"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 release list", "SC-GH-RELEASE-LIST")
                    .option("exclude-drafts", { "type": "boolean" })
                    .option("exclude-pre-releases", { "type": "boolean" })
                    .option("L", { "alias": "limit", "type": "string" });
            }
        },
        {
            cmd: "$0 repo",
            name: "SC-GH-REPO",
            prefix: "SC-GH",
            booleans: ["help"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 repo", "SC-GH-REPO")
                    .option("help", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 repo create",
            name: "SC-GH-REPO-CREATE",
            prefix: "SC-GH",
            booleans: ["add-readme", "c", "clone", "disable-issues", "disable-wiki", "include-all-branches", "internal", "private", "public", "push"],
            strings: ["d", "description", "g", "gitignore", "h", "homepage", "l", "license", "r", "remote", "s", "source", "t", "team", "p", "template"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 repo create", "SC-GH-REPO-CREATE")
                    .option("add-readme", { "type": "boolean" })
                    .option("c", { "alias": "clone", "type": "boolean" })
                    .option("disable-issues", { "type": "boolean" })
                    .option("disable-wiki", { "type": "boolean" })
                    .option("include-all-branches", { "type": "boolean" })
                    .option("internal", { "type": "boolean" })
                    .option("private", { "type": "boolean" })
                    .option("public", { "type": "boolean" })
                    .option("push", { "type": "boolean" })
                    .option("d", { "alias": "description", "type": "string" })
                    .option("g", { "alias": "gitignore", "type": "string" })
                    .option("h", { "alias": "homepage", "type": "string" })
                    .option("l", { "alias": "license", "type": "string" })
                    .option("r", { "alias": "remote", "type": "string" })
                    .option("s", { "alias": "source", "type": "string" })
                    .option("t", { "alias": "team", "type": "string" })
                    .option("p", { "alias": "template", "type": "string" });
            }
        },
        {
            cmd: "$0 repo list",
            name: "SC-GH-REPO-LIST",
            prefix: "SC-GH",
            booleans: ["archived", "fork", "no-archived", "source"],
            strings: ["q", "jq", "json", "l", "language", "L", "limit", "t", "template", "topic", "visibility"],
            argv: function () {
                return yargs()
                    .describe("gh", "SC-GH")
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
                    .command("$0 repo list", "SC-GH-REPO-LIST")
                    .option("archived", { "type": "boolean" })
                    .option("fork", { "type": "boolean" })
                    .option("no-archived", { "type": "boolean" })
                    .option("source", { "type": "boolean" })
                    .option("q", { "alias": "jq", "type": "string" })
                    .option("json", { "type": "string" })
                    .option("l", { "alias": "language", "type": "string" })
                    .option("L", { "alias": "limit", "type": "string" })
                    .option("t", { "alias": "template", "type": "string" })
                    .option("topic", { "type": "string" })
                    .option("visibility", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=gh.js.map