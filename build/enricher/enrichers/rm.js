"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["rm"],
    categories: ["FILE_SYSTEM"],
    prefix: "SC-RM",
    scenarios: [
        {
            postProcess: [{ "tagLastElement": { "source": "paths", "tag": "BASH-PATH" } }],
            cmd: "$0 [paths...]",
            name: "SC-RM",
            prefix: "SC-RM",
            booleans: ["r", "recursive", "R", "recursive", "f", "force", "i", "I", "one-file-system", "v", "verbose", "version", "help", "preserve-root", "no-preserve-root"],
            argv: function () {
                return yargs()
                    .describe("rm", "SC-RM")
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
                    .command("$0 [paths...]", "SC-RM")
                    .option("r", { "alias": "recursive", "type": "boolean" })
                    .option("R", { "alias": "recursive", "type": "boolean" })
                    .option("f", { "alias": "force", "type": "boolean" })
                    .option("i", { "type": "boolean" })
                    .option("I", { "type": "boolean" })
                    .option("one-file-system", { "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("preserve-root", { "type": "boolean" })
                    .option("no-preserve-root", { "type": "boolean" })
                    .option("interactive", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=rm.js.map