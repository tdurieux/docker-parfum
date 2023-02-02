import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["cat"],
  prefix: "SC-CAT",
  scenarios: [
    {
      cmd: "$0 [PATH...]",
      name: "SC-CAT",
      prefix: "SC-CAT",
      booleans: ["e","s","t","u","v"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cat", "SC-CAT")
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
          .command("$0 [PATH...]", "SC-CAT")
          .option("e", {"type":"boolean"})
          .option("s", {"type":"boolean"})
          .option("t", {"type":"boolean"})
          .option("u", {"type":"boolean"})
          .option("v", {"type":"boolean"})
          .option("b", {"type":"string"})
          .option("n", {"type":"string"})
          .option("l", {"type":"string"})
      }
    },
  ]
};