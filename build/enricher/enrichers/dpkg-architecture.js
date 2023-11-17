"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["dpkg-architecture"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-DPKG-ARCHITECTURE",
    scenarios: [
        {
            cmd: "$0",
            name: "SC-DPKG-ARCHITECTURE",
            prefix: "SC-DPKG-ARCHITECTURE",
            booleans: ["l", "list", "L", "list-known", "s", "print-set", "u", "print-unset", "?", "help", "version", "f", "force"],
            strings: ["i", "is", "q", "query", "c", "command", "a", "host-arch", "t", "host-type", "A", "target-arch", "T", "target-type", "W", "match-wildcard", "B", "match-bits", "E", "match-endian"],
            argv: function () {
                return yargs()
                    .describe("dpkg-architecture", "SC-DPKG-ARCHITECTURE")
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
                    .command("$0", "SC-DPKG-ARCHITECTURE")
                    .option("l", { "alias": "list", "type": "boolean" })
                    .option("L", { "alias": "list-known", "type": "boolean" })
                    .option("s", { "alias": "print-set", "type": "boolean" })
                    .option("u", { "alias": "print-unset", "type": "boolean" })
                    .option("?", { "alias": "help", "type": "boolean" })
                    .option("version", { "type": "boolean" })
                    .option("f", { "alias": "force", "type": "boolean" })
                    .option("i", { "alias": "is", "type": "string" })
                    .option("q", { "alias": "query", "type": "string" })
                    .option("c", { "alias": "command", "type": "string" })
                    .option("a", { "alias": "host-arch", "type": "string" })
                    .option("t", { "alias": "host-type", "type": "string" })
                    .option("A", { "alias": "target-arch", "type": "string" })
                    .option("T", { "alias": "target-type", "type": "string" })
                    .option("W", { "alias": "match-wildcard", "type": "string" })
                    .option("B", { "alias": "match-bits", "type": "string" })
                    .option("E", { "alias": "match-endian", "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=dpkg-architecture.js.map