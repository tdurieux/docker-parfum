import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["true",":"],
  categories: ["UTILS"],
  prefix: "undefined",
  scenarios: [
    {
      cmd: "$0",
      name: "SC-TRUE",
      prefix: undefined,
      argv: () => {
        return (yargs() as Argv)
          .describe("true,:", "undefined")
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
          .command("$0", "SC-TRUE")
      }
    },
  ]
};