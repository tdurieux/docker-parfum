"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["ls"],
    categories: ["FILE_SYSTEM"],
    prefix: "SC-LS",
    scenarios: [
        {
            cmd: "$0 [PATH...]",
            name: "SC-LS",
            prefix: "SC-LS",
            booleans: ["@", "A", "B", "C", "F", "G", "H", "I", "L", "O", "P", "R", "S", "T", "U", "W", "a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "%", "1"],
            argv: function () {
                return yargs()
                    .describe("ls", "SC-LS")
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
                    .command("$0 [PATH...]", "SC-LS")
                    .option("@", { "type": "boolean" })
                    .option("A", { "type": "boolean" })
                    .option("B", { "type": "boolean" })
                    .option("C", { "type": "boolean" })
                    .option("F", { "type": "boolean" })
                    .option("G", { "type": "boolean" })
                    .option("H", { "type": "boolean" })
                    .option("I", { "type": "boolean" })
                    .option("L", { "type": "boolean" })
                    .option("O", { "type": "boolean" })
                    .option("P", { "type": "boolean" })
                    .option("R", { "type": "boolean" })
                    .option("S", { "type": "boolean" })
                    .option("T", { "type": "boolean" })
                    .option("U", { "type": "boolean" })
                    .option("W", { "type": "boolean" })
                    .option("a", { "type": "boolean" })
                    .option("b", { "type": "boolean" })
                    .option("c", { "type": "boolean" })
                    .option("d", { "type": "boolean" })
                    .option("e", { "type": "boolean" })
                    .option("f", { "type": "boolean" })
                    .option("g", { "type": "boolean" })
                    .option("h", { "type": "boolean" })
                    .option("i", { "type": "boolean" })
                    .option("k", { "type": "boolean" })
                    .option("l", { "type": "boolean" })
                    .option("m", { "type": "boolean" })
                    .option("n", { "type": "boolean" })
                    .option("o", { "type": "boolean" })
                    .option("p", { "type": "boolean" })
                    .option("q", { "type": "boolean" })
                    .option("r", { "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("t", { "type": "boolean" })
                    .option("u", { "type": "boolean" })
                    .option("v", { "type": "boolean" })
                    .option("w", { "type": "boolean" })
                    .option("x", { "type": "boolean" })
                    .option("y", { "type": "boolean" })
                    .option("%", { "type": "boolean" })
                    .option("1", { "type": "boolean" })
                    .option("D", { "type": "string" })
                    .option("color", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=ls.js.map