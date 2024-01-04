"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["docker-compose"],
    categories: ["VIRTUALIZATION"],
    prefix: "SC-DOCKER-COMPOSE",
    scenarios: [
        {
            cmd: "$0",
            name: "SC-DOCKER-COMPOSE",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["compatibility", "dry-run"],
            strings: ["ansi", "env-file", "f", "file", "parallel", "profile", "progress", "project-directory", "p", "project-name"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0", "SC-DOCKER-COMPOSE")
                    .option("compatibility", { "type": "boolean" })
                    .option("dry-run", { "type": "boolean" })
                    .option("ansi", { "type": "string" })
                    .option("env-file", { "type": "string" })
                    .option("f", { "alias": "file", "type": "string" })
                    .option("parallel", { "type": "string" })
                    .option("profile", { "type": "string" })
                    .option("progress", { "type": "string" })
                    .option("project-directory", { "type": "string" })
                    .option("p", { "alias": "project-name", "type": "string" });
            }
        },
        {
            cmd: "$0 build",
            name: "SC-DOCKER-COMPOSE-BUILD",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "no-cache", "pull", "push", "q", "quiet"],
            strings: ["build-arg", "builder", "m", "memory", "ssh"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 build", "SC-DOCKER-COMPOSE-BUILD")
                    .option("dry-run", { "type": "boolean" })
                    .option("no-cache", { "type": "boolean" })
                    .option("pull", { "type": "boolean" })
                    .option("push", { "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("build-arg", { "type": "string" })
                    .option("builder", { "type": "string" })
                    .option("m", { "alias": "memory", "type": "string" })
                    .option("ssh", { "type": "string" });
            }
        },
        {
            cmd: "$0 config",
            name: "SC-DOCKER-COMPOSE-CONFIG",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "images", "no-consistency", "no-interpolate", "no-normalize", "no-path-resolution", "profiles", "q", "quiet", "resolve-image-digests", "services", "volumes"],
            strings: ["format", "hash", "o", "output"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 config", "SC-DOCKER-COMPOSE-CONFIG")
                    .option("dry-run", { "type": "boolean" })
                    .option("images", { "type": "boolean" })
                    .option("no-consistency", { "type": "boolean" })
                    .option("no-interpolate", { "type": "boolean" })
                    .option("no-normalize", { "type": "boolean" })
                    .option("no-path-resolution", { "type": "boolean" })
                    .option("profiles", { "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("resolve-image-digests", { "type": "boolean" })
                    .option("services", { "type": "boolean" })
                    .option("volumes", { "type": "boolean" })
                    .option("format", { "type": "string" })
                    .option("hash", { "type": "string" })
                    .option("o", { "alias": "output", "type": "string" });
            }
        },
        {
            cmd: "$0 cp",
            name: "SC-DOCKER-COMPOSE-CP",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["a", "archive", "dry-run", "L", "follow-link"],
            strings: ["index"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 cp", "SC-DOCKER-COMPOSE-CP")
                    .option("a", { "alias": "archive", "type": "boolean" })
                    .option("dry-run", { "type": "boolean" })
                    .option("L", { "alias": "follow-link", "type": "boolean" })
                    .option("index", { "type": "string" });
            }
        },
        {
            cmd: "$0 create",
            name: "SC-DOCKER-COMPOSE-CREATE",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["build", "dry-run", "force-recreate", "no-build", "no-recreate", "remove-orphans"],
            strings: ["pull", "scale"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 create", "SC-DOCKER-COMPOSE-CREATE")
                    .option("build", { "type": "boolean" })
                    .option("dry-run", { "type": "boolean" })
                    .option("force-recreate", { "type": "boolean" })
                    .option("no-build", { "type": "boolean" })
                    .option("no-recreate", { "type": "boolean" })
                    .option("remove-orphans", { "type": "boolean" })
                    .option("pull", { "type": "string" })
                    .option("scale", { "type": "string" });
            }
        },
        {
            cmd: "$0 down",
            name: "SC-DOCKER-COMPOSE-DOWN",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "remove-orphans", "v", "volumes"],
            strings: ["rmi", "t", "timeout"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 down", "SC-DOCKER-COMPOSE-DOWN")
                    .option("dry-run", { "type": "boolean" })
                    .option("remove-orphans", { "type": "boolean" })
                    .option("v", { "alias": "volumes", "type": "boolean" })
                    .option("rmi", { "type": "string" })
                    .option("t", { "alias": "timeout", "type": "string" });
            }
        },
        {
            cmd: "$0 events",
            name: "SC-DOCKER-COMPOSE-EVENTS",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "json"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 events", "SC-DOCKER-COMPOSE-EVENTS")
                    .option("dry-run", { "type": "boolean" })
                    .option("json", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 exec",
            name: "SC-DOCKER-COMPOSE-EXEC",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["d", "detach", "dry-run", "privileged"],
            strings: ["e", "env", "index", "T", "no-TTY", "u", "user", "w", "workdir"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 exec", "SC-DOCKER-COMPOSE-EXEC")
                    .option("d", { "alias": "detach", "type": "boolean" })
                    .option("dry-run", { "type": "boolean" })
                    .option("privileged", { "type": "boolean" })
                    .option("e", { "alias": "env", "type": "string" })
                    .option("index", { "type": "string" })
                    .option("T", { "alias": "no-TTY", "type": "string" })
                    .option("u", { "alias": "user", "type": "string" })
                    .option("w", { "alias": "workdir", "type": "string" });
            }
        },
        {
            cmd: "$0 images",
            name: "SC-DOCKER-COMPOSE-IMAGES",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "q", "quiet"],
            strings: ["format"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 images", "SC-DOCKER-COMPOSE-IMAGES")
                    .option("dry-run", { "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("format", { "type": "string" });
            }
        },
        {
            cmd: "$0 kill",
            name: "SC-DOCKER-COMPOSE-KILL",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "remove-orphans"],
            strings: ["s", "signal"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 kill", "SC-DOCKER-COMPOSE-KILL")
                    .option("dry-run", { "type": "boolean" })
                    .option("remove-orphans", { "type": "boolean" })
                    .option("s", { "alias": "signal", "type": "string" });
            }
        },
        {
            cmd: "$0 logs",
            name: "SC-DOCKER-COMPOSE-LOGS",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "f", "follow", "no-color", "no-log-prefix", "t", "timestamps"],
            strings: ["since", "n", "tail", "until"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 logs", "SC-DOCKER-COMPOSE-LOGS")
                    .option("dry-run", { "type": "boolean" })
                    .option("f", { "alias": "follow", "type": "boolean" })
                    .option("no-color", { "type": "boolean" })
                    .option("no-log-prefix", { "type": "boolean" })
                    .option("t", { "alias": "timestamps", "type": "boolean" })
                    .option("since", { "type": "string" })
                    .option("n", { "alias": "tail", "type": "string" })
                    .option("until", { "type": "string" });
            }
        },
        {
            cmd: "$0 ls",
            name: "SC-DOCKER-COMPOSE-LS",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["a", "all", "dry-run", "q", "quiet"],
            strings: ["filter", "format"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 ls", "SC-DOCKER-COMPOSE-LS")
                    .option("a", { "alias": "all", "type": "boolean" })
                    .option("dry-run", { "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("filter", { "type": "string" })
                    .option("format", { "type": "string" });
            }
        },
        {
            cmd: "$0 pause",
            name: "SC-DOCKER-COMPOSE-PAUSE",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 pause", "SC-DOCKER-COMPOSE-PAUSE")
                    .option("dry-run", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 port",
            name: "SC-DOCKER-COMPOSE-PORT",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run"],
            strings: ["index", "protocol"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 port", "SC-DOCKER-COMPOSE-PORT")
                    .option("dry-run", { "type": "boolean" })
                    .option("index", { "type": "string" })
                    .option("protocol", { "type": "string" });
            }
        },
        {
            cmd: "$0 ps",
            name: "SC-DOCKER-COMPOSE-PS",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["a", "all", "dry-run", "q", "quiet", "services"],
            strings: ["filter", "format", "status"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 ps", "SC-DOCKER-COMPOSE-PS")
                    .option("a", { "alias": "all", "type": "boolean" })
                    .option("dry-run", { "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("services", { "type": "boolean" })
                    .option("filter", { "type": "string" })
                    .option("format", { "type": "string" })
                    .option("status", { "type": "string" });
            }
        },
        {
            cmd: "$0 pull",
            name: "SC-DOCKER-COMPOSE-PULL",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "ignore-buildable", "ignore-pull-failures", "include-deps", "q", "quiet"],
            strings: ["policy"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 pull", "SC-DOCKER-COMPOSE-PULL")
                    .option("dry-run", { "type": "boolean" })
                    .option("ignore-buildable", { "type": "boolean" })
                    .option("ignore-pull-failures", { "type": "boolean" })
                    .option("include-deps", { "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("policy", { "type": "string" });
            }
        },
        {
            cmd: "$0 push",
            name: "SC-DOCKER-COMPOSE-PUSH",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "ignore-push-failures", "include-deps", "q", "quiet"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 push", "SC-DOCKER-COMPOSE-PUSH")
                    .option("dry-run", { "type": "boolean" })
                    .option("ignore-push-failures", { "type": "boolean" })
                    .option("include-deps", { "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" });
            }
        },
        {
            cmd: "$0 restart",
            name: "SC-DOCKER-COMPOSE-RESTART",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "no-deps"],
            strings: ["t", "timeout"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 restart", "SC-DOCKER-COMPOSE-RESTART")
                    .option("dry-run", { "type": "boolean" })
                    .option("no-deps", { "type": "boolean" })
                    .option("t", { "alias": "timeout", "type": "string" });
            }
        },
        {
            cmd: "$0 rm",
            name: "SC-DOCKER-COMPOSE-RM",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "f", "force", "s", "stop", "v", "volumes"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 rm", "SC-DOCKER-COMPOSE-RM")
                    .option("dry-run", { "type": "boolean" })
                    .option("f", { "alias": "force", "type": "boolean" })
                    .option("s", { "alias": "stop", "type": "boolean" })
                    .option("v", { "alias": "volumes", "type": "boolean" });
            }
        },
        {
            cmd: "$0 run",
            name: "SC-DOCKER-COMPOSE-RUN",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["build", "d", "detach", "dry-run", "i", "interactive", "T", "no-TTY", "no-deps", "quiet-pull", "remove-orphans", "rm", "service-ports", "use-aliases"],
            strings: ["cap-add", "cap-drop", "entrypoint", "e", "env", "l", "label", "name", "p", "publish", "u", "user", "v", "volume", "w", "workdir"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 run", "SC-DOCKER-COMPOSE-RUN")
                    .option("build", { "type": "boolean" })
                    .option("d", { "alias": "detach", "type": "boolean" })
                    .option("dry-run", { "type": "boolean" })
                    .option("i", { "alias": "interactive", "type": "boolean" })
                    .option("T", { "alias": "no-TTY", "type": "boolean" })
                    .option("no-deps", { "type": "boolean" })
                    .option("quiet-pull", { "type": "boolean" })
                    .option("remove-orphans", { "type": "boolean" })
                    .option("rm", { "type": "boolean" })
                    .option("service-ports", { "type": "boolean" })
                    .option("use-aliases", { "type": "boolean" })
                    .option("cap-add", { "type": "string" })
                    .option("cap-drop", { "type": "string" })
                    .option("entrypoint", { "type": "string" })
                    .option("e", { "alias": "env", "type": "string" })
                    .option("l", { "alias": "label", "type": "string" })
                    .option("name", { "type": "string" })
                    .option("p", { "alias": "publish", "type": "string" })
                    .option("u", { "alias": "user", "type": "string" })
                    .option("v", { "alias": "volume", "type": "string" })
                    .option("w", { "alias": "workdir", "type": "string" });
            }
        },
        {
            cmd: "$0 scale",
            name: "SC-DOCKER-COMPOSE-SCALE",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "no-deps"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 scale", "SC-DOCKER-COMPOSE-SCALE")
                    .option("dry-run", { "type": "boolean" })
                    .option("no-deps", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 start",
            name: "SC-DOCKER-COMPOSE-START",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 start", "SC-DOCKER-COMPOSE-START")
                    .option("dry-run", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 stop",
            name: "SC-DOCKER-COMPOSE-STOP",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run"],
            strings: ["t", "timeout"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 stop", "SC-DOCKER-COMPOSE-STOP")
                    .option("dry-run", { "type": "boolean" })
                    .option("t", { "alias": "timeout", "type": "string" });
            }
        },
        {
            cmd: "$0 top",
            name: "SC-DOCKER-COMPOSE-TOP",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 top", "SC-DOCKER-COMPOSE-TOP")
                    .option("dry-run", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 unpause",
            name: "SC-DOCKER-COMPOSE-UNPAUSE",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 unpause", "SC-DOCKER-COMPOSE-UNPAUSE")
                    .option("dry-run", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 up",
            name: "SC-DOCKER-COMPOSE-UP",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["abort-on-container-exit", "always-recreate-deps", "attach-dependencies", "build", "d", "detach", "dry-run", "force-recreate", "no-build", "no-color", "no-deps", "no-log-prefix", "no-recreate", "no-start", "quiet-pull", "remove-orphans", "V", "renew-anon-volumes", "timestamps", "wait"],
            strings: ["attach", "attach-dependencies.", "exit-code-from", "abort-on-container-exit", "no-attach", "force-recreate.", "pull", "scale", "t", "timeout", "wait-timeout"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 up", "SC-DOCKER-COMPOSE-UP")
                    .option("abort-on-container-exit", { "type": "boolean" })
                    .option("always-recreate-deps", { "type": "boolean" })
                    .option("attach-dependencies", { "type": "boolean" })
                    .option("build", { "type": "boolean" })
                    .option("d", { "alias": "detach", "type": "boolean" })
                    .option("dry-run", { "type": "boolean" })
                    .option("force-recreate", { "type": "boolean" })
                    .option("no-build", { "type": "boolean" })
                    .option("no-color", { "type": "boolean" })
                    .option("no-deps", { "type": "boolean" })
                    .option("no-log-prefix", { "type": "boolean" })
                    .option("no-recreate", { "type": "boolean" })
                    .option("no-start", { "type": "boolean" })
                    .option("quiet-pull", { "type": "boolean" })
                    .option("remove-orphans", { "type": "boolean" })
                    .option("V", { "alias": "renew-anon-volumes", "type": "boolean" })
                    .option("timestamps", { "type": "boolean" })
                    .option("wait", { "type": "boolean" })
                    .option("attach", { "type": "string" })
                    .option("attach-dependencies.", { "type": "string" })
                    .option("exit-code-from", { "type": "string" })
                    .option("abort-on-container-exit", { "type": "string" })
                    .option("no-attach", { "type": "string" })
                    .option("force-recreate.", { "type": "string" })
                    .option("pull", { "type": "string" })
                    .option("scale", { "type": "string" })
                    .option("t", { "alias": "timeout", "type": "string" })
                    .option("wait-timeout", { "type": "string" });
            }
        },
        {
            cmd: "$0 version",
            name: "SC-DOCKER-COMPOSE-VERSION",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "short"],
            strings: ["f", "format"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 version", "SC-DOCKER-COMPOSE-VERSION")
                    .option("dry-run", { "type": "boolean" })
                    .option("short", { "type": "boolean" })
                    .option("f", { "alias": "format", "type": "string" });
            }
        },
        {
            cmd: "$0 wait",
            name: "SC-DOCKER-COMPOSE-WAIT",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["down-project", "dry-run"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 wait", "SC-DOCKER-COMPOSE-WAIT")
                    .option("down-project", { "type": "boolean" })
                    .option("dry-run", { "type": "boolean" });
            }
        },
        {
            cmd: "$0 watch",
            name: "SC-DOCKER-COMPOSE-WATCH",
            prefix: "SC-DOCKER-COMPOSE",
            booleans: ["dry-run", "no-up", "quiet"],
            argv: function () {
                return yargs()
                    .describe("docker-compose", "SC-DOCKER-COMPOSE")
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
                    .command("$0 watch", "SC-DOCKER-COMPOSE-WATCH")
                    .option("dry-run", { "type": "boolean" })
                    .option("no-up", { "type": "boolean" })
                    .option("quiet", { "type": "boolean" });
            }
        },
    ]
};
//# sourceMappingURL=docker-compose.js.map