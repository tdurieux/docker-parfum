import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["which"],
  prefix: "SC-WHICH",
  scenarios: [
    {
      cmd: "$0 [program...]",
      name: "SC-WHICH",
      prefix: "SC-WHICH",
      booleans: ["a","s"],
      argv: () => {
        return (yargs() as Argv)
          .describe("which", "SC-WHICH")
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
          .command("$0 [program...]", "SC-WHICH")
          .option("a", {"type":"boolean"})
          .option("s", {"type":"boolean"})
      }
    },
  ]
};