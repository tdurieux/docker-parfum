import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["md5"],
  categories: ["HASH"],
  prefix: "SC-MD5",
  scenarios: [
    {
      cmd: "$0 [paths...]",
      name: "SC-MD5",
      prefix: "SC-MD5",
      booleans: ["p","q","r","t","x"],
      strings: ["s"],
      argv: () => {
        return (yargs() as Argv)
          .describe("md5", "SC-MD5")
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
          .command("$0 [paths...]", "SC-MD5")
          .option("p", {"type":"boolean"})
          .option("q", {"type":"boolean"})
          .option("r", {"type":"boolean"})
          .option("t", {"type":"boolean"})
          .option("x", {"type":"boolean"})
          .option("s", {"type":"string"})
      }
    },
  ]
};