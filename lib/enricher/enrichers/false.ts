import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["false"],
  categories: ["UTILS"],
  prefix: "undefined",
  scenarios: [
    {
      cmd: "$0",
      name: "SC-FALSE",
      prefix: undefined,
      argv: () => {
        return (yargs() as Argv)
          .describe("false", "undefined")
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
          .command("$0", "SC-FALSE")
      }
    },
  ]
};