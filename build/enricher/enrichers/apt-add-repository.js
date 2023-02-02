"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["apt-add-repository"],
    prefix: "SC-APT-ADD-REPOSITORY",
    scenarios: [
        {
            cmd: "$0 <repository>",
            name: "SC-APT-ADD-REPOSITORY",
            prefix: "SC-APT-ADD-REPOSITORY",
            booleans: ["h", "help", "m", "massive-debug", "r", "remove", "s", "enable-source", "y", "yes", "u", "update"],
            argv: function () {
                return yargs()
                    .describe("apt-add-repository", "SC-APT-ADD-REPOSITORY")
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
                    .command("$0 <repository>", "SC-APT-ADD-REPOSITORY")
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("m", { "alias": "massive-debug", "type": "boolean" })
                    .option("r", { "alias": "remove", "type": "boolean" })
                    .option("s", { "alias": "enable-source", "type": "boolean" })
                    .option("y", { "alias": "yes", "type": "boolean" })
                    .option("u", { "alias": "update", "type": "boolean" })
                    .option("k", { "alias": "keyserver", "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=apt-add-repository.js.map