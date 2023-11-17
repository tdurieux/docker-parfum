"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["cp"],
    categories: ["FILE_SYSTEM"],
    prefix: "SC-CP",
    scenarios: [
        {
            postProcess: [{ "tagLastElement": { "source": "paths", "tag": "SC-CP-DESTINATION" } }, { "tagLastElement": { "source": "paths", "tag": "BASH-PATH" } }],
            cmd: "$0 [paths...]",
            name: "SC-CP",
            prefix: "SC-CP",
            booleans: ["r", "recursive", "R", "recursive", "a", "archive", "f", "force", "l", "link", "L", "dereference", "n", "no-clobber", "d", "i", "interactive", "p", "parents", "s", "symbolic-link", "remove-destination", "T", "no-target-directory", "u", "update", "v", "verbose", "x", "one-file-system", "Z", "help", "version", "H", "copy-contents", "b", "attributes-only", "strip-trailing-slashes"],
            strings: ["preserve", "no-preserve", "context", "backup", "sparse"],
            argv: function () {
                return yargs()
                    .describe("cp", "SC-CP")
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
                    .command("$0 [paths...]", "SC-CP")
                    .option("r", { "alias": "recursive", "type": "boolean" })
                    .option("R", { "alias": "recursive", "type": "boolean" })
                    .option("a", { "alias": "archive", "type": "boolean" })
                    .option("f", { "alias": "force", "type": "boolean" })
                    .option("l", { "alias": "link", "type": "boolean" })
                    .option("L", { "alias": "dereference", "type": "boolean" })
                    .option("n", { "alias": "no-clobber", "type": "boolean" })
                    .option("d", { "type": "boolean" })
                    .option("i", { "alias": "interactive", "type": "boolean" })
                    .option("p", { "type": "boolean" })
                    .option("parents", { "type": "boolean" })
                    .option("s", { "alias": "symbolic-link", "type": "boolean" })
                    .option("remove-destination", { "type": "boolean" })
                    .option("T", { "alias": "no-target-directory", "type": "boolean" })
                    .option("u", { "alias": "update", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("x", { "alias": "one-file-system", "type": "boolean" })
                    .option("Z", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("H", { "type": "boolean" })
                    .option("copy-contents", { "type": "boolean" })
                    .option("b", { "type": "boolean" })
                    .option("attributes-only", { "type": "boolean" })
                    .option("strip-trailing-slashes", { "type": "boolean" })
                    .option("preserve", { "type": "string" })
                    .option("no-preserve", { "type": "string" })
                    .option("context", { "type": "string" })
                    .option("backup", { "type": "string" })
                    .option("sparse", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=cp.js.map