"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["tar"],
    prefix: "SC-TAR",
    scenarios: [
        {
            postProcess: [{ "tagLastElement": { "source": "args", "tag": "SC-TAR-FILE" } }],
            cmd: "$0 [args...]",
            name: "SC-TAR",
            prefix: "SC-TAR",
            paths: ["add-file", "f", "file", "C", "directory"],
            argv: function () {
                return yargs()
                    .describe("tar", "SC-TAR")
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
                    .command("$0 [args...]", "SC-TAR")
                    .option("exclude", { "type": "string" })
                    .option("exclude-ignore", { "type": "string" })
                    .option("exclude-ignore-recursive", { "type": "string" })
                    .option("exclude-tag", { "type": "string" })
                    .option("exclude-tag-all", { "type": "string" })
                    .option("exclude-tag-under", { "type": "string" })
                    .option("record-size", { "type": "string" })
                    .option("b", { "alias": "blocking-factor", "type": "string" })
                    .option("H", { "alias": "format", "type": "string" })
                    .option("V", { "alias": "label", "type": "string" })
                    .option("I", { "type": "string" })
                    .option("N", { "alias": "newer", "type": "string" })
                    .option("newer-mtime", { "type": "string" })
                    .option("suffix", { "type": "string" })
                    .option("transform", { "type": "string" })
                    .option("xform", { "type": "string" })
                    .option("strip", { "type": "string" })
                    .option("strip-components", { "type": "string" })
                    .option("xattrs-exclude", { "type": "string" })
                    .option("xattrs-include", { "type": "string" })
                    .option("add-file", { "type": "string" })
                    .option("f", { "alias": "file", "type": "string" })
                    .option("C", { "alias": "directory", "type": "string" })
                    .option("T", { "alias": "files-from", "type": "array" });
            }
        },
    ]
};
//# sourceMappingURL=tar.js.map