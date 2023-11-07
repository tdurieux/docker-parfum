"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["set"],
    categories: ["ENVIRONMENT"],
    prefix: "SC-SET",
    scenarios: [
        {
            cmd: "$0 [args]",
            name: "SC-SET",
            prefix: "SC-SET",
            booleans: ["a", "b", "e", "f", "h", "k", "m", "n", "p", "t", "u", "v", "x", "B", "C", "E", "H", "P", "T"],
            argv: function () {
                return yargs()
                    .describe("set", "SC-SET")
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
                    .command("$0 [args]", "SC-SET")
                    .option("a", { "type": "boolean" })
                    .option("b", { "type": "boolean" })
                    .option("e", { "type": "boolean" })
                    .option("f", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("k", { "type": "boolean" })
                    .option("m", { "type": "boolean" })
                    .option("n", { "type": "boolean" })
                    .option("p", { "type": "boolean" })
                    .option("t", { "type": "boolean" })
                    .option("u", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("x", { "type": "boolean" })
                    .option("B", { "type": "boolean" })
                    .option("C", { "type": "boolean" })
                    .option("E", { "type": "boolean" })
                    .option("H", { "type": "boolean" })
                    .option("P", { "type": "boolean" })
                    .option("T", { "type": "boolean" })
                    .option("o", { "type": "array" });
            }
        },
    ]
};
//# sourceMappingURL=set.js.map