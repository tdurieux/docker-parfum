"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["sleep"],
    categories: ["UTILITIES"],
    prefix: "SC-SLEEP",
    scenarios: [
        {
            cmd: "$0",
            name: "SC-SLEEP",
            prefix: "SC-SLEEP",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("sleep", "SC-SLEEP")
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
                    .command("$0", "SC-SLEEP");
            }
        },
    ]
};
//# sourceMappingURL=sleep.js.map