"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["sha256sum"],
    prefix: "SC-SHA-256-SUM",
    scenarios: [
        {
            cmd: "$0 [files...]",
            name: "SC-SHA-256-SUM",
            prefix: "SC-SHA-256-SUM",
            booleans: ["b", "binary", "c", "check", "tag", "t", "text", "ignore-missing", "quiet", "status", "strict", "w", "warn", "help", "version"],
            argv: function () {
                return yargs()
                    .describe("sha256sum", "SC-SHA-256-SUM")
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
                    .command("$0 [files...]", "SC-SHA-256-SUM")
                    .option("b", { "alias": "binary", "type": "boolean" })
                    .option("c", { "alias": "check", "type": "boolean" })
                    .option("tag", { "type": "boolean" })
                    .option("t", { "alias": "text", "type": "boolean" })
                    .option("ignore-missing", { "type": "boolean" })
                    .option("quiet", { "type": "boolean" })
                    .option("status", { "type": "boolean" })
                    .option("strict", { "type": "boolean" })
                    .option("w", { "alias": "warn", "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("version", { "type": "boolean" });
            }
        },
    ]
};
//# sourceMappingURL=sha256sum.js.map