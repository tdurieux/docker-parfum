"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["cut"],
    categories: ["UTILITIES"],
    prefix: "SC-CUT",
    scenarios: [
        {
            cmd: "$0",
            name: "SC-CUT",
            prefix: "SC-CUT",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("cut", "SC-CUT")
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
                    .command("$0", "SC-CUT");
            }
        },
    ]
};
//# sourceMappingURL=cut.js.map