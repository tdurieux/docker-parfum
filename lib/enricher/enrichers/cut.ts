import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["cut"],
  categories: ["UTILITIES"],
  prefix: "SC-CUT",
  scenarios: [
    {
      cmd: "$0",
      name: "SC-CUT",
      prefix: "SC-CUT",
      paths: [],
      booleans: [],
      strings: [],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("cut", "SC-CUT")
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
          .command("$0", "SC-CUT")
      }
    },
  ]
};