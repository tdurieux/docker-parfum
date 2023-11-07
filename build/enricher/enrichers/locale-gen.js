"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["locale-gen"],
    categories: ["LOCALIZATION"],
    prefix: "SC-LOCAL-GEN",
    scenarios: [
        {
            cmd: "$0",
            name: "SC-LOCAL-GEN",
            prefix: "SC-LOCAL-GEN",
            argv: function () {
                return yargs()
                    .describe("locale-gen", "SC-LOCAL-GEN")
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
                    .command("$0", "SC-LOCAL-GEN");
            }
        },
    ]
};
//# sourceMappingURL=locale-gen.js.map