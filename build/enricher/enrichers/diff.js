"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["diff"],
    categories: ["DIFF"],
    prefix: "SC-DIFF",
    scenarios: [
        {
            cmd: "$0 [args...]",
            name: "SC-DIFF",
            prefix: "SC-DIFF",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("diff", "SC-DIFF")
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
                    .command("$0 [args...]", "SC-DIFF");
            }
        },
    ]
};
//# sourceMappingURL=diff.js.map