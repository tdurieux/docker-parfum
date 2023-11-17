"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["codecov"],
    categories: ["CODE_COVERAGE"],
    prefix: "SC-CODECOV",
    scenarios: [
        {
            cmd: "$0 [args...]",
            name: "SC-CODECOV",
            prefix: "SC-CODECOV",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("codecov", "SC-CODECOV")
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
                    .command("$0 [args...]", "SC-CODECOV");
            }
        },
    ]
};
//# sourceMappingURL=codecov.js.map