import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["printf"],
  categories: ["PRINT"],
  prefix: "SC-PRINTF",
  scenarios: [
    {
      cmd: "$0 <format> [ARGS...]",
      name: "SC-PRINTF",
      prefix: "SC-PRINTF",
      argv: () => {
        return (yargs() as Argv)
          .describe("printf", "SC-PRINTF")
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
          .command("$0 <format> [ARGS...]", "SC-PRINTF")
      }
    },
  ]
};