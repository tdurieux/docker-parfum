"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["./configure"],
    categories: ["BUILD_SYSTEM"],
    prefix: "SC-CONFIGURE",
    scenarios: [
        {
            cmd: "$0 [ignores...]",
            name: "SC-CONFIGURE",
            prefix: "SC-CONFIGURE",
            paths: ["prefix"],
            booleans: ["with-ssl"],
            strings: ["build"],
            argv: function () {
                return yargs()
                    .describe("./configure", "SC-CONFIGURE")
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
                    .command("$0 [ignores...]", "SC-CONFIGURE")
                    .option("with-ssl", { "type": "boolean" })
                    .option("build", { "type": "string" })
                    .option("prefix", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=configure.js.map