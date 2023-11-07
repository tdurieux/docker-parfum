"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["exit"],
    categories: ["CONTROL_FLOW"],
    prefix: "SC-EXIT",
    scenarios: [
        {
            cmd: "$0 <code>",
            name: "SC-EXIT",
            prefix: "SC-EXIT",
            argv: function () {
                return yargs()
                    .describe("exit", "SC-EXIT")
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
                    .command("$0 <code>", "SC-EXIT");
            }
        },
    ]
};
//# sourceMappingURL=exit.js.map