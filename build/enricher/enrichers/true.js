"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["true", ":"],
    categories: ["UTILS"],
    prefix: "undefined",
    scenarios: [
        {
            cmd: "$0",
            name: "SC-TRUE",
            prefix: undefined,
            argv: function () {
                return yargs()
                    .describe("true,:", "undefined")
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
                    .command("$0", "SC-TRUE");
            }
        },
    ]
};
//# sourceMappingURL=true.js.map