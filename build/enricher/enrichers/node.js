"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["node"],
    categories: ["DEVELOPMENT"],
    prefix: "SC-NODE",
    scenarios: [
        {
            cmd: "$0 [args...]",
            name: "SC-NODE",
            prefix: "SC-NODE",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("node", "SC-NODE")
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
                    .command("$0 [args...]", "SC-NODE");
            }
        },
    ]
};
//# sourceMappingURL=node.js.map