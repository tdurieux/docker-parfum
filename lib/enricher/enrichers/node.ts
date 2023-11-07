import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["node"],
  categories: ["DEVELOPMENT"],
  prefix: "SC-NODE",
  scenarios: [
    {
      cmd: "$0 [args...]",
      name: "SC-NODE",
      prefix: "SC-NODE",
      paths: [],
      booleans: [],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("node", "SC-NODE")
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
          .command("$0 [args...]", "SC-NODE")
      }
    },
  ]
};