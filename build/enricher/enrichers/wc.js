"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["wc"],
    categories: ["FILE_SYSTEM", "UTILS"],
    prefix: "SC-WC",
    scenarios: [
        {
            cmd: "$0 [paths...]",
            name: "SC-WC",
            prefix: "SC-WC",
            booleans: ["c", "l", "m", "w"],
            argv: function () {
                return yargs()
                    .describe("wc", "SC-WC")
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
                    .command("$0 [paths...]", "SC-WC")
                    .option("c", { "type": "boolean" })
                    .option("l", { "type": "boolean" })
                    .option("m", { "type": "boolean" })
                    .option("w", { "type": "boolean" });
            }
        },
    ]
};
//# sourceMappingURL=wc.js.map