"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["basename"],
    categories: ["FILE_SYSTEM", "UTILS"],
    prefix: "SC-BASENAME",
    scenarios: [
        {
            cmd: "$0",
            name: "SC-BASENAME",
            prefix: "SC-BASENAME",
            paths: [],
            booleans: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("basename", "SC-BASENAME")
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
                    .command("$0", "SC-BASENAME");
            }
        },
    ]
};
//# sourceMappingURL=basename.js.map