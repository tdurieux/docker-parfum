"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["cd"],
    prefix: "SC-CD",
    scenarios: [
        {
            postProcess: [{ "tagLastElement": { "source": "path", "tag": "BASH-PATH" } }],
            replaceEmptyArgsWith: ["~"],
            cmd: "$0 <path>",
            name: "SC-CD",
            prefix: "SC-CD",
            argv: function () {
                return yargs()
                    .describe("cd", "SC-CD")
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
                    .command("$0 <path>", "SC-CD");
            }
        },
    ]
};
//# sourceMappingURL=cd.js.map