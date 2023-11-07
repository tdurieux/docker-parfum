"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["coveralls"],
    categories: ["CODE_COVERAGE"],
    prefix: "SC-COVERALLS",
    scenarios: [
        {
            cmd: "$0 [args...]",
            name: "SC-COVERALLS",
            prefix: "SC-COVERALLS",
            paths: [],
            booleans: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("coveralls", "SC-COVERALLS")
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
                    .command("$0 [args...]", "SC-COVERALLS");
            }
        },
    ]
};
//# sourceMappingURL=coveralls.js.map