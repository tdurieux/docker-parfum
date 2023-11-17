"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["head"],
    categories: ["UTILITIES"],
    prefix: "SC-HEAD",
    scenarios: [
        {
            cmd: "$0 [file...]",
            name: "SC-HEAD",
            prefix: "SC-HEAD",
            strings: ["n", "c"],
            argv: function () {
                return yargs()
                    .describe("head", "SC-HEAD")
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
                    .command("$0 [file...]", "SC-HEAD")
                    .option("n", { "type": "string" })
                    .option("c", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=head.js.map