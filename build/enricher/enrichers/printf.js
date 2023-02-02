"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["printf"],
    prefix: "SC-PRINTF",
    scenarios: [
        {
            cmd: "$0 <format> [ARGS...]",
            name: "SC-PRINTF",
            prefix: "SC-PRINTF",
            argv: function () {
                return yargs()
                    .describe("printf", "SC-PRINTF")
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
                    .command("$0 <format> [ARGS...]", "SC-PRINTF");
            }
        },
    ]
};
//# sourceMappingURL=printf.js.map