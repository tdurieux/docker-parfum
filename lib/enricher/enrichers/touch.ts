import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["touch"],
  categories: ["FILE_SYSTEM"],
  prefix: "SC-TOUCH",
  scenarios: [
    {
      cmd: "$0 [PATH...]",
      name: "SC-TOUCH",
      prefix: "SC-TOUCH",
      booleans: ["a","c","h","m"],
      strings: ["A","d","t","r"],
      argv: () => {
        return (yargs() as Argv)
          .describe("touch", "SC-TOUCH")
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
          .command("$0 [PATH...]", "SC-TOUCH")
          .option("a", {"type":"boolean"})
          .option("c", {"type":"boolean"})
          .option("h", {"type":"boolean"})
          .option("m", {"type":"boolean"})
          .option("A", {"type":"string"})
          .option("d", {"type":"string"})
          .option("t", {"type":"string"})
          .option("r", {"type":"string"})
      }
    },
  ]
};