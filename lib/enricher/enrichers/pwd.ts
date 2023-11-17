import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["pwd"],
  categories: ["FILE_SYSTEM","UTILS"],
  prefix: "SC-PWD",
  scenarios: [
    {
      cmd: "$0",
      name: "SC-PWD",
      prefix: "SC-PWD",
      paths: [],
      booleans: [],
      strings: [],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("pwd", "SC-PWD")
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
          .command("$0", "SC-PWD")
      }
    },
  ]
};