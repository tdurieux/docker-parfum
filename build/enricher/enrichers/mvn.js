"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["mvn"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-MVN",
    scenarios: [
        {
            cmd: "$0 install",
            name: "SC-MVN-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-MVN",
            paths: [],
            booleans: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("mvn", "SC-MVN")
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
                    .command("$0 install", "SC-MVN-INSTALL");
            }
        },
        {
            cmd: "$0 clean",
            name: "SC-MVN-CLEAN",
            prefix: "SC-MVN",
            paths: [],
            booleans: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("mvn", "SC-MVN")
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
                    .command("$0 clean", "SC-MVN-CLEAN");
            }
        },
        {
            cmd: "$0 compile",
            name: "SC-MVN-COMPILE",
            categories: ["BUILD_PACKAGES"],
            prefix: "SC-MVN",
            paths: [],
            booleans: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("mvn", "SC-MVN")
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
                    .command("$0 compile", "SC-MVN-COMPILE");
            }
        },
        {
            cmd: "$0 test",
            name: "SC-MVN-TEST",
            categories: ["TEST_PACKAGES"],
            prefix: "SC-MVN",
            paths: [],
            booleans: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("mvn", "SC-MVN")
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
                    .command("$0 test", "SC-MVN-TEST");
            }
        },
        {
            cmd: "$0 package",
            name: "SC-MVN-PACKAGE",
            categories: ["BUILD_PACKAGES"],
            prefix: "SC-MVN",
            paths: [],
            booleans: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("mvn", "SC-MVN")
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
                    .command("$0 package", "SC-MVN-PACKAGE");
            }
        },
        {
            cmd: "$0 deploy",
            name: "SC-MVN-DEPLOY",
            categories: ["DEPLOY_PACKAGES"],
            prefix: "SC-MVN",
            paths: [],
            booleans: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("mvn", "SC-MVN")
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
                    .command("$0 deploy", "SC-MVN-DEPLOY");
            }
        },
    ]
};
//# sourceMappingURL=mvn.js.map