import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["ldconfig"],
  categories: [],
  prefix: "SC-LDCONFIG",
  scenarios: [
    {
      cmd: "$0",
      name: "SC-LDCONFIG",
      prefix: "SC-LDCONFIG",
      paths: ["r","C","f"],
      booleans: ["i","ingore-aux-cache","l","n","N","p","print-cache","v","verbose","X","?","help","?","usage","V","version"],
      strings: ["c","format"],
      argv: () => {
        return (yargs() as Argv)
          .describe("ldconfig", "SC-LDCONFIG")
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
          .command("$0", "SC-LDCONFIG")
          .option("i", {"alias":"ingore-aux-cache","type":"boolean"})
          .option("l", {"type":"boolean"})
          .option("n", {"type":"boolean"})
          .option("N", {"type":"boolean"})
          .option("p", {"alias":"print-cache","type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("X", {"type":"boolean"})
          .option("?", {"alias":"help","type":"boolean"})
          .option("?", {"alias":"usage","type":"boolean"})
          .option("V", {"alias":"version","type":"boolean"})
          .option("c", {"alias":"format","type":"string"})
          .option("r", {"type":"string"})
          .option("C", {"type":"string"})
          .option("f", {"type":"string"})
      }
    },
  ]
};