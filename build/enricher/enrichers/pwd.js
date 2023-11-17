"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["pwd"],
    categories: ["FILE_SYSTEM", "UTILS"],
    prefix: "SC-PWD",
    scenarios: [
        {
            cmd: "$0",
            name: "SC-PWD",
            prefix: "SC-PWD",
            paths: [],
            booleans: [],
            strings: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("pwd", "SC-PWD")
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
                    .command("$0", "SC-PWD");
            }
        },
    ]
};
//# sourceMappingURL=pwd.js.map