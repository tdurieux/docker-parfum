"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["gpg"],
    categories: ["SECURITY"],
    prefix: "SC-GPG",
    scenarios: [
        {
            cmd: "$0 [targets...]",
            name: "SC-GPG",
            prefix: "SC-GPG",
            paths: ["homedir", "options"],
            booleans: ["version", "verbose", "fingerprint", "batch", "y", "yes", "no-tty", "import", "fast-import", "a", "armor", "no-batch", "q", "quiet", "enarmor", "dearmor", "d", "decrypt", "refresh-keys"],
            strings: ["trusted-key", "recv-key", "recv", "keyserver"],
            argv: function () {
                return yargs()
                    .describe("gpg", "SC-GPG")
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
                    .command("$0 [targets...]", "SC-GPG")
                    .option("version", { "type": "boolean" })
                    .option("verbose", { "type": "boolean" })
                    .option("fingerprint", { "type": "boolean" })
                    .option("batch", { "type": "boolean" })
                    .option("y", { "alias": "yes", "type": "boolean" })
                    .option("no-tty", { "type": "boolean" })
                    .option("import", { "type": "boolean" })
                    .option("fast-import", { "type": "boolean" })
                    .option("a", { "alias": "armor", "type": "boolean" })
                    .option("no-batch", { "type": "boolean" })
                    .option("q", { "alias": "quiet", "type": "boolean" })
                    .option("enarmor", { "type": "boolean" })
                    .option("dearmor", { "type": "boolean" })
                    .option("d", { "alias": "decrypt", "type": "boolean" })
                    .option("refresh-keys", { "type": "boolean" })
                    .option("trusted-key", { "type": "string" })
                    .option("recv-key", { "type": "string" })
                    .option("recv", { "type": "string" })
                    .option("keyserver", { "type": "string" })
                    .option("homedir", { "type": "string" })
                    .option("options", { "type": "string" })
                    .option("export", { "type": "array" })
                    .option("verify", { "type": "array" })
                    .option("recv-keys", { "type": "array" })
                    .option("keyserver-options", { "type": "array" });
            }
        },
    ]
};
//# sourceMappingURL=gpg.js.map