"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["nproc"],
    categories: ["SYSTEM_INFO"],
    prefix: "SC-NPROC",
    scenarios: [
        {
            cmd: "$0",
            name: "SC-NPROC",
            prefix: "SC-NPROC",
            booleans: ["all", "help", "version"],
            argv: function () {
                return yargs()
                    .describe("nproc", "SC-NPROC")
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
                    .command("$0", "SC-NPROC")
                    .option("all", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("ignore", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=nproc.js.map