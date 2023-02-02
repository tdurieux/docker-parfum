"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["make"],
    prefix: "SC-MAKE",
    scenarios: [
        {
            cmd: "$0 [target] [args...]",
            name: "SC-MAKE",
            prefix: "SC-MAKE",
            paths: ["C", "directory", "f", "file", "f", "makefile", "I", "include-dir", "W", "what-if", "W", "new-file", "W", "assume-new"],
            booleans: ["b", "m", "B", "always-make", "d", "e", "environment-overrides", "h", "help", "i", "ignore-errors", "k", "keep-going", "L", "cehck-symlink-times", "n", "just-print", "n", "dry-run", "n", "recon", "p", "print-data-base", "q", "question", "r", "no-builtin-rules", "R", "no-builtin-variables", "s", "silent", "s", "quiet", "S", "no-keep-going", "S", "stop", "t", "touch", "trace", "v", "version", "w", "print-directory", "no-print-directory", "warn-undefined-variables", "O", "output-sync"],
            argv: function () {
                return yargs()
                    .describe("make", "SC-MAKE")
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
                    .command("$0 [target] [args...]", "SC-MAKE")
                    .option("b", { "type": "boolean" })
                    .option("m", { "type": "boolean" })
                    .option("B", { "alias": "always-make", "type": "boolean" })
                    .option("d", { "type": "boolean" })
                    .option("e", { "alias": "environment-overrides", "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("i", { "alias": "ignore-errors", "type": "boolean" })
                    .option("k", { "alias": "keep-going", "type": "boolean" })
                    .option("L", { "alias": "cehck-symlink-times", "type": "boolean" })
                    .option("n", { "alias": "just-print", "type": "boolean" })
                    .option("n", { "alias": "dry-run", "type": "boolean" })
                    .option("n", { "alias": "recon", "type": "boolean" })
                    .option("p", { "alias": "print-data-base", "type": "boolean" })
                    .option("q", { "alias": "question", "type": "boolean" })
                    .option("r", { "alias": "no-builtin-rules", "type": "boolean" })
                    .option("R", { "alias": "no-builtin-variables", "type": "boolean" })
                    .option("s", { "alias": "silent", "type": "boolean" })
                    .option("s", { "alias": "quiet", "type": "boolean" })
                    .option("S", { "alias": "no-keep-going", "type": "boolean" })
                    .option("S", { "alias": "stop", "type": "boolean" })
                    .option("t", { "alias": "touch", "type": "boolean" })
                    .option("trace", { "type": "boolean" })
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("w", { "alias": "print-directory", "type": "boolean" })
                    .option("no-print-directory", { "type": "boolean" })
                    .option("warn-undefined-variables", { "type": "boolean" })
                    .option("O", { "alias": "output-sync", "type": "boolean" })
                    .option("debug", { "type": "string" })
                    .option("eval", { "type": "string" })
                    .option("j", { "alias": "jobs", "type": "string" })
                    .option("l", { "alias": "load-average", "type": "string" })
                    .option("max-load", { "type": "string" })
                    .option("C", { "alias": "directory", "type": "string" })
                    .option("f", { "alias": "file", "type": "string" })
                    .option("f", { "alias": "makefile", "type": "string" })
                    .option("I", { "alias": "include-dir", "type": "string" })
                    .option("W", { "alias": "what-if", "type": "string" })
                    .option("W", { "alias": "new-file", "type": "string" })
                    .option("W", { "alias": "assume-new", "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=make.js.map