"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["sort"],
    categories: [],
    prefix: "SC-SORT",
    scenarios: [
        {
            cmd: "$0 [PATH...]",
            name: "SC-SORT",
            prefix: "SC-SORT",
            booleans: ["c", "check", "m", "merge", "u", "unique", "s", "version", "help", "b", "ignore-leading-blanks", "d", "dictionary-order", "f", "ignore-case", "g", "general-numeric-sort", "h", "human-numeric-sort", "i", "ignore-nonprinting", "M", "month-sort", "n", "numeric-sort", "R", "random-sort", "r", "reverse", "V", "version-sort", "b", "ignore-leading-blanks", "z", "zero-terminated", "debug", "parallel", "radixsort", "mergesort", "qsort", "heapsort", "mmap"],
            strings: ["o", "output", "S", "buffer-size", "t", "field-separator", "T", "temporary-directory", "k", "key", "sort", "files0-from=filename", "batch-size", "compress-program", "random-source"],
            argv: function () {
                return yargs()
                    .describe("sort", "SC-SORT")
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
                    .command("$0 [PATH...]", "SC-SORT")
                    .option("c", { "alias": "check", "type": "boolean" })
                    .option("m", { "alias": "merge", "type": "boolean" })
                    .option("u", { "alias": "unique", "type": "boolean" })
                    .option("s", { "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("b", { "alias": "ignore-leading-blanks", "type": "boolean" })
                    .option("d", { "alias": "dictionary-order", "type": "boolean" })
                    .option("f", { "alias": "ignore-case", "type": "boolean" })
                    .option("g", { "alias": "general-numeric-sort", "type": "boolean" })
                    .option("h", { "alias": "human-numeric-sort", "type": "boolean" })
                    .option("i", { "alias": "ignore-nonprinting", "type": "boolean" })
                    .option("M", { "alias": "month-sort", "type": "boolean" })
                    .option("n", { "alias": "numeric-sort", "type": "boolean" })
                    .option("R", { "alias": "random-sort", "type": "boolean" })
                    .option("r", { "alias": "reverse", "type": "boolean" })
                    .option("V", { "alias": "version-sort", "type": "boolean" })
                    .option("b", { "alias": "ignore-leading-blanks", "type": "boolean" })
                    .option("z", { "alias": "zero-terminated", "type": "boolean" })
                    .option("debug", { "type": "boolean" })
                    .option("parallel", { "type": "boolean" })
                    .option("radixsort", { "type": "boolean" })
                    .option("mergesort", { "type": "boolean" })
                    .option("qsort", { "type": "boolean" })
                    .option("heapsort", { "type": "boolean" })
                    .option("mmap", { "type": "boolean" })
                    .option("o", { "alias": "output", "type": "string" })
                    .option("S", { "alias": "buffer-size", "type": "string" })
                    .option("t", { "alias": "field-separator", "type": "string" })
                    .option("T", { "alias": "temporary-directory", "type": "string" })
                    .option("k", { "alias": "key", "type": "string" })
                    .option("sort", { "type": "string" })
                    .option("files0-from=filename", { "type": "string" })
                    .option("batch-size", { "type": "string" })
                    .option("compress-program", { "type": "string" })
                    .option("random-source", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=sort.js.map