"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["groupadd"],
    prefix: "SC-GROUP-ADD",
    scenarios: [
        {
            cmd: "$0 <group>",
            name: "SC-GROUP-ADD",
            prefix: "SC-GROUP-ADD",
            paths: ["R", "root"],
            booleans: ["f", "force", "h", "help", "o", "non-unique", "r", "system"],
            argv: function () {
                return yargs()
                    .describe("groupadd", "SC-GROUP-ADD")
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
                    .command("$0 <group>", "SC-GROUP-ADD")
                    .option("f", { "alias": "force", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("o", { "alias": "non-unique", "type": "boolean" })
                    .option("r", { "alias": "system", "type": "boolean" })
                    .option("g", { "alias": "gid", "type": "string" })
                    .option("R", { "alias": "root", "type": "string" })
                    .option("k", { "alias": "key", "type": "array" });
            }
        },
    ]
};
//# sourceMappingURL=groupadd.js.map