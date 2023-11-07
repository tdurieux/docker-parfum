import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["tee"],
  categories: ["PRINT"],
  prefix: "SC-TEE",
  scenarios: [
    {
      cmd: "$0 [PATH...]",
      name: "SC-TEE",
      prefix: "SC-TEE",
      booleans: ["a","i"],
      argv: () => {
        return (yargs() as Argv)
          .describe("tee", "SC-TEE")
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
          .command("$0 [PATH...]", "SC-TEE")
          .option("a", {"type":"boolean"})
          .option("i", {"type":"boolean"})
      }
    },
  ]
};