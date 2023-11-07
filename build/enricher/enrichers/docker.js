"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["docker"],
    categories: ["VIRTUALIZATION"],
    prefix: "SC-DOCKER",
    scenarios: [
        {
            cmd: "$0 run <image> [command] [args...]",
            name: "SC-DOCKER-RUN",
            prefix: "SC-DOCKER",
            booleans: ["v", "version", "D", "debug"],
            argv: function () {
                return yargs()
                    .describe("docker", "SC-DOCKER")
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
                    .command("$0 run <image> [command] [args...]", "SC-DOCKER-RUN")
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("D", { "alias": "debug", "type": "boolean" })
                    .option("config", { "type": "string" })
                    .option("c", { "alias": "context", "type": "string" });
            }
        },
        {
            cmd: "$0 build [path]",
            name: "SC-DOCKER-BUIlD",
            prefix: "SC-DOCKER",
            booleans: ["v", "version", "D", "debug"],
            argv: function () {
                return yargs()
                    .describe("docker", "SC-DOCKER")
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
                    .command("$0 build [path]", "SC-DOCKER-BUIlD")
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("D", { "alias": "debug", "type": "boolean" })
                    .option("config", { "type": "string" })
                    .option("c", { "alias": "context", "type": "string" });
            }
        },
        {
            cmd: "$0",
            name: "SC-DOCKER",
            prefix: "SC-DOCKER",
            booleans: ["v", "version", "D", "debug"],
            argv: function () {
                return yargs()
                    .describe("docker", "SC-DOCKER")
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
                    .command("$0", "SC-DOCKER")
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("D", { "alias": "debug", "type": "boolean" })
                    .option("config", { "type": "string" })
                    .option("c", { "alias": "context", "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=docker.js.map