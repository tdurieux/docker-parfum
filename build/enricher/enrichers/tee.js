"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["tee"],
    prefix: "SC-TEE",
    scenarios: [
        {
            cmd: "$0 [PATH...]",
            name: "SC-TEE",
            prefix: "SC-TEE",
            booleans: ["a", "i"],
            argv: function () {
                return yargs()
                    .describe("tee", "SC-TEE")
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
                    .command("$0 [PATH...]", "SC-TEE")
                    .option("a", { "type": "boolean" })
                    .option("i", { "type": "boolean" });
            }
        },
    ]
};
//# sourceMappingURL=tee.js.map