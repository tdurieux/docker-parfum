import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["export"],
  prefix: "SC-EXPORT",
  scenarios: [
    {
      cmd: "$0 <target>",
      name: "SC-EXPORT",
      prefix: "SC-EXPORT",
      argv: () => {
        return (yargs() as Argv)
          .describe("export", "SC-EXPORT")
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
          .command("$0 <target>", "SC-EXPORT")
      }
    },
  ]
};