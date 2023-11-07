"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["find"],
    categories: ["FILE_SYSTEM", "SEARCH"],
    prefix: "SC-FIND",
    scenarios: [
        {
            captureAllAfter: { "match": ["--execdir", "--exec"], "name": "args" },
            fixBadLongNames: ["-delete", "-print0", "-print", "-execdir", "-exec", "-type", "-name", "-regextype", "-regex", "-wholename", "-perm", "-path", "-depth", "-mindepth", "-maxdepth"],
            postProcess: [{ "subCommand": "args" }],
            rejectIf: ["-a", "-o", "(", ")", "!", "-and", "-or", "-not"],
            replaceEmptyArgsWith: ["~"],
            cmd: "$0 <target>",
            name: "SC-FIND",
            prefix: "SC-FIND",
            booleans: ["delete", "print0", "print", "execdir", "exec", "depth"],
            argv: function () {
                return yargs()
                    .describe("find", "SC-FIND")
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
                    .command("$0 <target>", "SC-FIND")
                    .option("delete", { "type": "boolean" })
                    .option("print0", { "type": "boolean" })
                    .option("print", { "type": "boolean" })
                    .option("execdir", { "type": "boolean" })
                    .option("exec", { "type": "boolean" })
                    .option("depth", { "type": "boolean" })
                    .option("type", { "type": "string" })
                    .option("name", { "type": "string" })
                    .option("regextype", { "type": "string" })
                    .option("regex", { "type": "string" })
                    .option("wholename", { "type": "string" })
                    .option("perm", { "type": "string" })
                    .option("path", { "type": "string" })
                    .option("mindepth", { "type": "string" })
                    .option("maxdepth", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=find.js.map