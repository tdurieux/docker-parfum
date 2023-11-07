"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["export"],
    categories: ["ENVIRONMENT"],
    prefix: "SC-EXPORT",
    scenarios: [
        {
            cmd: "$0 <target>",
            name: "SC-EXPORT",
            prefix: "SC-EXPORT",
            argv: function () {
                return yargs()
                    .describe("export", "SC-EXPORT")
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
                    .command("$0 <target>", "SC-EXPORT");
            }
        },
    ]
};
//# sourceMappingURL=export.js.map