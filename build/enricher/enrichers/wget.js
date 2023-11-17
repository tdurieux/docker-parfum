"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["wget"],
    categories: ["DOWNLOAD"],
    prefix: "SC-WGET",
    scenarios: [
        {
            fixBadLongNames: ["-nc", "-nv"],
            cmd: "$0 <url>",
            name: "SC-WGET",
            prefix: "SC-WGET",
            paths: ["O", "output-document", "a", "append-output", "o", "output-file", "i", "input-file"],
            booleans: ["d", "debug", "q", "quiet", "v", "verbose", "no-verbose", "span-hosts", "no-check-certificate", "N", "timestamping", "c", "continue", "nc", "no-clobber", "nv", "no-verbose", "content-disposition"],
            strings: ["progress", "U", "user-agent"],
            argv: function () {
                return yargs()
                    .describe("wget", "SC-WGET")
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
                    .command("$0 <url>", "SC-WGET")
                    .option("d", { "alias": "debug", "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("v", { "alias": "verbose", "type": "boolean" })
                    .option("no-verbose", { "type": "boolean" })
                    .option("span-hosts", { "type": "boolean" })
                    .option("no-check-certificate", { "type": "boolean" })
                    .option("N", { "alias": "timestamping", "type": "boolean" })
                    .option("c", { "alias": "continue", "type": "boolean" })
                    .option("nc", { "alias": "no-clobber", "type": "boolean" })
                    .option("nv", { "alias": "no-verbose", "type": "boolean" })
                    .option("content-disposition", { "type": "boolean" })
                    .option("progress", { "type": "string" })
                    .option("U", { "alias": "user-agent", "type": "string" })
                    .option("O", { "alias": "output-document", "type": "string" })
                    .option("a", { "alias": "append-output", "type": "string" })
                    .option("o", { "alias": "output-file", "type": "string" })
                    .option("i", { "alias": "input-file", "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=wget.js.map