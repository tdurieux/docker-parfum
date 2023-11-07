import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["cd"],
  categories: ["NAVIGATION"],
  prefix: "SC-CD",
  scenarios: [
    {
      postProcess: [{"tagLastElement":{"source":"path","tag":"BASH-PATH"}}],
      replaceEmptyArgsWith: ["~"],
      cmd: "$0 <path>",
      name: "SC-CD",
      prefix: "SC-CD",
      argv: () => {
        return (yargs() as Argv)
          .describe("cd", "SC-CD")
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
          .command("$0 <path>", "SC-CD")
      }
    },
  ]
};