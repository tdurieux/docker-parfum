"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["coverage"],
    categories: ["CODE_COVERAGE"],
    prefix: "SC-COVERAGE",
    scenarios: [
        {
            cmd: "$0 [args...]",
            name: "SC-COVERAGE",
            prefix: "SC-COVERAGE",
            paths: [],
            booleans: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("coverage", "SC-COVERAGE")
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
                    .command("$0 [args...]", "SC-COVERAGE");
            }
        },
    ]
};
//# sourceMappingURL=coverage.js.map