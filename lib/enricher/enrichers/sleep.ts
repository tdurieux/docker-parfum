import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["sleep"],
  categories: ["UTILITIES"],
  prefix: "SC-SLEEP",
  scenarios: [
    {
      cmd: "$0",
      name: "SC-SLEEP",
      prefix: "SC-SLEEP",
      paths: [],
      booleans: [],
      strings: [],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("sleep", "SC-SLEEP")
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
          .command("$0", "SC-SLEEP")
      }
    },
  ]
};