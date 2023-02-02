import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["mktemp"],
  prefix: "SC-MKTEMP",
  scenarios: [
    {
      cmd: "$0 [template]",
      name: "SC-MKTEMP",
      prefix: "SC-MKTEMP",
      paths: ["p","tmpdir"],
      booleans: ["d","directory","u","dry-run","q","quiet","t","help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("mktemp", "SC-MKTEMP")
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
          .command("$0 [template]", "SC-MKTEMP")
          .option("d", {"alias":"directory","type":"boolean"})
          .option("u", {"alias":"dry-run","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("t", {"type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("suffix", {"type":"string"})
          .option("p", {"alias":"tmpdir","type":"string"})
      }
    },
  ]
};