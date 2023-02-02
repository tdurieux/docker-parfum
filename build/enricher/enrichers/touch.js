"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["touch"],
    prefix: "SC-TOUCH",
    scenarios: [
        {
            cmd: "$0 [PATH...]",
            name: "SC-TOUCH",
            prefix: "SC-TOUCH",
            booleans: ["a", "c", "h", "m"],
            argv: function () {
                return yargs()
                    .describe("touch", "SC-TOUCH")
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
                    .command("$0 [PATH...]", "SC-TOUCH")
                    .option("a", { "type": "boolean" })
                    .option("c", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("m", { "type": "boolean" })
                    .option("A", { "type": "string" })
                    .option("d", { "type": "string" })
                    .option("t", { "type": "string" })
                    .option("r", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=touch.js.map