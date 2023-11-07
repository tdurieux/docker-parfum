"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["pytest"],
    categories: ["TEST_PACKAGES"],
    prefix: "SC-PYTEST",
    scenarios: [
        {
            cmd: "$0 [args...]",
            name: "SC-PYTEST",
            prefix: "SC-PYTEST",
            paths: [],
            booleans: [],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("pytest", "SC-PYTEST")
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
                    .command("$0 [args...]", "SC-PYTEST");
            }
        },
    ]
};
//# sourceMappingURL=pytest.js.map