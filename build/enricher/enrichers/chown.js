"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["chown"],
    prefix: "SC-CHOWN",
    scenarios: [
        {
            mustHave: ["--reference"],
            cmd: "$0 [paths...]",
            name: "SC-CHOWN",
            prefix: "SC-CHOWN",
            paths: ["reference"],
            booleans: ["c", "changes", "f", "silent", "f", "quiet", "v", "verbose", "dereference", "h", "no-dereference", "no-preserve-root", "preserve-root", "R", "recursive", "H", "L", "P", "help", "version"],
            argv: function () {
                return yargs()
                    .describe("chown", "SC-CHOWN")
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
                    .command("$0 [paths...]", "SC-CHOWN")
                    .option("c", { "alias": "changes", "type": "boolean" })
                    .option("f", { "alias": "silent", "type": "boolean" })
                    .option("f", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("dereference", { "type": "boolean" })
                    .option("h", { "alias": "no-dereference", "type": "boolean" })
                    .option("no-preserve-root", { "type": "boolean" })
                    .option("preserve-root", { "type": "boolean" })
                    .option("R", { "alias": "recursive", "type": "boolean" })
                    .option("H", { "type": "boolean" })
                    .option("L", { "type": "boolean" })
                    .option("P", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("from", { "type": "string" })
                    .option("reference", { "type": "string" });
            }
        },
        {
            cmd: "$0 <owner> [paths...]",
            name: "SC-CHOWN",
            prefix: "SC-CHOWN",
            paths: ["reference"],
            booleans: ["c", "changes", "f", "silent", "f", "quiet", "v", "verbose", "dereference", "h", "no-dereference", "no-preserve-root", "preserve-root", "R", "recursive", "H", "L", "P", "help", "version"],
            argv: function () {
                return yargs()
                    .describe("chown", "SC-CHOWN")
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
                    .command("$0 <owner> [paths...]", "SC-CHOWN")
                    .option("c", { "alias": "changes", "type": "boolean" })
                    .option("f", { "alias": "silent", "type": "boolean" })
                    .option("f", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("dereference", { "type": "boolean" })
                    .option("h", { "alias": "no-dereference", "type": "boolean" })
                    .option("no-preserve-root", { "type": "boolean" })
                    .option("preserve-root", { "type": "boolean" })
                    .option("R", { "alias": "recursive", "type": "boolean" })
                    .option("H", { "type": "boolean" })
                    .option("L", { "type": "boolean" })
                    .option("P", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("from", { "type": "string" })
                    .option("reference", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=chown.js.map