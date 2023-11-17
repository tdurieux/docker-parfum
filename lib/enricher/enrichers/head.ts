import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["head"],
  categories: ["UTILITIES"],
  prefix: "SC-HEAD",
  scenarios: [
    {
      cmd: "$0 [file...]",
      name: "SC-HEAD",
      prefix: "SC-HEAD",
      strings: ["n","c"],
      argv: () => {
        return (yargs() as Argv)
          .describe("head", "SC-HEAD")
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
          .command("$0 [file...]", "SC-HEAD")
          .option("n", {"type":"string"})
          .option("c", {"type":"string"})
      }
    },
  ]
};