import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["pytest"],
  categories: ["TEST_PACKAGES"],
  prefix: "SC-PYTEST",
  scenarios: [
    {
      cmd: "$0 [args...]",
      name: "SC-PYTEST",
      prefix: "SC-PYTEST",
      paths: [],
      booleans: [],
      strings: [],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("pytest", "SC-PYTEST")
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
          .command("$0 [args...]", "SC-PYTEST")
      }
    },
  ]
};