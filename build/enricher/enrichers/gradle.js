"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["./gradlew", "gradle"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-GRADLE",
    scenarios: [
        {
            cmd: "$0 install",
            name: "SC-GRADLE-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-GRADLE",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("./gradlew,gradle", "SC-GRADLE")
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
                    .command("$0 install", "SC-GRADLE-INSTALL");
            }
        },
        {
            cmd: "$0 build",
            name: "SC-GRADLE-BUILD",
            categories: ["BUILD_PACKAGES"],
            prefix: "SC-GRADLE",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("./gradlew,gradle", "SC-GRADLE")
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
                    .command("$0 build", "SC-GRADLE-BUILD");
            }
        },
        {
            cmd: "$0 clean",
            name: "SC-GRADLE-CLEAN",
            prefix: "SC-GRADLE",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("./gradlew,gradle", "SC-GRADLE")
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
                    .command("$0 clean", "SC-GRADLE-CLEAN");
            }
        },
        {
            cmd: "$0 test",
            name: "SC-GRADLE-TEST",
            categories: ["TEST_PACKAGES"],
            prefix: "SC-GRADLE",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("./gradlew,gradle", "SC-GRADLE")
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
                    .command("$0 test", "SC-GRADLE-TEST");
            }
        },
        {
            cmd: "$0 assemble",
            name: "SC-GRADLE-ASSEMBLE",
            prefix: "SC-GRADLE",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("./gradlew,gradle", "SC-GRADLE")
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
                    .command("$0 assemble", "SC-GRADLE-ASSEMBLE");
            }
        },
        {
            cmd: "$0 publish",
            name: "SC-GRADLE-PUBLISH",
            categories: ["PUBLISH_PACKAGES"],
            prefix: "SC-GRADLE",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("./gradlew,gradle", "SC-GRADLE")
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
                    .command("$0 publish", "SC-GRADLE-PUBLISH");
            }
        },
    ]
};
//# sourceMappingURL=gradle.js.map