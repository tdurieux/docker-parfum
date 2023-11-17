"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["md5"],
    categories: ["HASH"],
    prefix: "SC-MD5",
    scenarios: [
        {
            cmd: "$0 [paths...]",
            name: "SC-MD5",
            prefix: "SC-MD5",
            booleans: ["p", "q", "r", "t", "x"],
            strings: ["s"],
            argv: function () {
                return yargs()
                    .describe("md5", "SC-MD5")
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
                    .command("$0 [paths...]", "SC-MD5")
                    .option("p", { "type": "boolean" })
                    .option("q", { "type": "boolean" })
                    .option("r", { "type": "boolean" })
                    .option("t", { "type": "boolean" })
                    .option("x", { "type": "boolean" })
                    .option("s", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=md5.js.map