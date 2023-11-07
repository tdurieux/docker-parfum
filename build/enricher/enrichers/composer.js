"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["composer"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-COMPOSER",
    scenarios: [
        {
            cmd: "$0 [args...]",
            name: "SC-COMPOSER",
            prefix: "SC-COMPOSER",
            paths: [],
            booleans: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("composer", "SC-COMPOSER")
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
                    .command("$0 [args...]", "SC-COMPOSER");
            }
        },
    ]
};
//# sourceMappingURL=composer.js.map