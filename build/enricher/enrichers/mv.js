"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["mv"],
    categories: ["FILE_SYSTEM"],
    prefix: "SC-MV",
    scenarios: [
        {
            postProcess: [{ "tagLastElement": { "source": "paths", "tag": "SC-MV-DESTINATION" } }],
            cmd: "$0 [paths...]",
            name: "SC-MV",
            prefix: "SC-MV",
            paths: ["t", "target-directory"],
            booleans: ["b", "f", "force", "i", "interactive", "n", "no-clobber", "strip-trailing-slashes", "u", "update", "v", "verbose", "version", "help", "T", "no-target-directory"],
            strings: ["S", "suffix"],
            argv: function () {
                return yargs()
                    .describe("mv", "SC-MV")
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
                    .command("$0 [paths...]", "SC-MV")
                    .option("b", { "type": "boolean" })
                    .option("f", { "alias": "force", "type": "boolean" })
                    .option("i", { "alias": "interactive", "type": "boolean" })
                    .option("n", { "alias": "no-clobber", "type": "boolean" })
                    .option("strip-trailing-slashes", { "type": "boolean" })
                    .option("u", { "alias": "update", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("T", { "alias": "no-target-directory", "type": "boolean" })
                    .option("S", { "alias": "suffix", "type": "string" })
                    .option("t", { "alias": "target-directory", "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=mv.js.map