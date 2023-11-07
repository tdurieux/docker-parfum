"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["echo"],
    categories: ["PRINT"],
    prefix: "SC-ECHO",
    scenarios: [
        {
            cmd: "$0 [items...]",
            name: "SC-ECHO",
            prefix: "SC-ECHO",
            booleans: ["n", "e", "E", "version", "help"],
            argv: function () {
                return yargs()
                    .describe("echo", "SC-ECHO")
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
                    .command("$0 [items...]", "SC-ECHO")
                    .option("n", { "type": "boolean" })
                    .option("e", { "type": "boolean" })
                    .option("E", { "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("help", { "type": "boolean" });
            }
        },
    ]
};
//# sourceMappingURL=echo.js.map