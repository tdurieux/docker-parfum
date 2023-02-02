"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["php"],
    prefix: "SC-PHP",
    scenarios: [
        {
            captureAllAfter: { "match": ["--"], "name": "args" },
            cmd: "$0 [script] [args...]",
            name: "SC-PHP",
            prefix: "SC-PHP",
            paths: ["f", "file", "F", "process-file", "c", "php-ini", "z", "zend-extension"],
            argv: function () {
                return yargs()
                    .describe("php", "SC-PHP")
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
                    .command("$0 [script] [args...]", "SC-PHP")
                    .option("f", { "alias": "file", "type": "string" })
                    .option("F", { "alias": "process-file", "type": "string" })
                    .option("c", { "alias": "php-ini", "type": "string" })
                    .option("z", { "alias": "zend-extension", "type": "string" })
                    .option("d", { "alias": "define", "type": "array" });
            }
        },
    ]
};
//# sourceMappingURL=php.js.map