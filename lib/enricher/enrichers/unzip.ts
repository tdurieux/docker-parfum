import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["unzip"],
  prefix: "SC-UNZIP",
  scenarios: [
    {
      cmd: "$0 <file> [items...]",
      name: "SC-UNZIP",
      prefix: "SC-UNZIP",
      paths: ["d"],
      booleans: ["p","f","u","v","l","t","z","T","n","o","j","C","X","K","L","V","M"],
      counts: ["q","a","U"],
      argv: () => {
        return (yargs() as Argv)
          .describe("unzip", "SC-UNZIP")
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
          .command("$0 <file> [items...]", "SC-UNZIP")
          .option("p", {"type":"boolean"})
          .option("f", {"type":"boolean"})
          .option("u", {"type":"boolean"})
          .option("v", {"type":"boolean"})
          .option("l", {"type":"boolean"})
          .option("t", {"type":"boolean"})
          .option("z", {"type":"boolean"})
          .option("T", {"type":"boolean"})
          .option("n", {"type":"boolean"})
          .option("o", {"type":"boolean"})
          .option("j", {"type":"boolean"})
          .option("C", {"type":"boolean"})
          .option("X", {"type":"boolean"})
          .option("K", {"type":"boolean"})
          .option("L", {"type":"boolean"})
          .option("V", {"type":"boolean"})
          .option("M", {"type":"boolean"})
          .option("d", {"type":"string"})
          .option("x", {"type":"array"})
          .option("q", {"type":"count"})
          .option("a", {"type":"count"})
          .option("U", {"type":"count"})
      }
    },
  ]
};