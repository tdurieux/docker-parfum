import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["exit"],
  prefix: "SC-EXIT",
  scenarios: [
    {
      cmd: "$0 <code>",
      name: "SC-EXIT",
      prefix: "SC-EXIT",
      argv: () => {
        return (yargs() as Argv)
          .describe("exit", "SC-EXIT")
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
          .command("$0 <code>", "SC-EXIT")
      }
    },
  ]
};