import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["xargs"],
  categories: ["UTILS"],
  prefix: "SC-XARGS",
  scenarios: [
    {
      cmd: "$0 [PATH...]",
      name: "SC-XARGS",
      prefix: "SC-XARGS",
      booleans: ["0","o","p","r","t","x"],
      argv: () => {
        return (yargs() as Argv)
          .describe("xargs", "SC-XARGS")
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
          .command("$0 [PATH...]", "SC-XARGS")
          .option("0", {"type":"boolean"})
          .option("o", {"type":"boolean"})
          .option("p", {"type":"boolean"})
          .option("r", {"type":"boolean"})
          .option("t", {"type":"boolean"})
          .option("x", {"type":"boolean"})
          .option("E", {"type":"string"})
          .option("I", {"type":"string"})
          .option("J", {"type":"string"})
          .option("L", {"type":"string"})
          .option("P", {"type":"string"})
          .option("R", {"type":"string"})
          .option("S", {"type":"string"})
          .option("n", {"type":"string"})
      }
    },
  ]
};