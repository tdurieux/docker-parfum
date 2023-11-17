import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["ctest"],
  categories: ["TEST_PACKAGES"],
  prefix: "SC-CTEST",
  scenarios: [
    {
      cmd: "$0 [args...]",
      name: "SC-CTEST",
      prefix: "SC-CTEST",
      paths: [],
      booleans: [],
      strings: [],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("ctest", "SC-CTEST")
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
          .command("$0 [args...]", "SC-CTEST")
      }
    },
  ]
};