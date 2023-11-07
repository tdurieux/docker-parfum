import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["locale-gen"],
  categories: ["LOCALIZATION"],
  prefix: "SC-LOCAL-GEN",
  scenarios: [
    {
      cmd: "$0",
      name: "SC-LOCAL-GEN",
      prefix: "SC-LOCAL-GEN",
      argv: () => {
        return (yargs() as Argv)
          .describe("locale-gen", "SC-LOCAL-GEN")
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
          .command("$0", "SC-LOCAL-GEN")
      }
    },
  ]
};