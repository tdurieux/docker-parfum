import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["dpkg"],
  categories: ["PACKAGE_MANAGEMENT"],
  prefix: "SC-DPKG",
  scenarios: [
    {
      mustHave: ["-X"],
      cmd: "$0 <dir>",
      name: "SC-DPKG",
      prefix: "SC-DPKG",
      booleans: ["L","list-files","print-architecture"],
      strings: ["add-architecture","x","extract","X","vextract"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dpkg", "SC-DPKG")
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
          .command("$0 <dir>", "SC-DPKG")
          .option("L", {"alias":"list-files","type":"boolean"})
          .option("print-architecture", {"type":"boolean"})
          .option("add-architecture", {"type":"string"})
          .option("x", {"alias":"extract","type":"string"})
          .option("X", {"alias":"vextract","type":"string"})
          .option("i", {"alias":"install","type":"array"})
      }
    },
    {
      mustHave: ["-x"],
      cmd: "$0 <dir>",
      name: "SC-DPKG",
      prefix: "SC-DPKG",
      booleans: ["L","list-files","print-architecture"],
      strings: ["add-architecture","x","extract","X","vextract"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dpkg", "SC-DPKG")
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
          .command("$0 <dir>", "SC-DPKG")
          .option("L", {"alias":"list-files","type":"boolean"})
          .option("print-architecture", {"type":"boolean"})
          .option("add-architecture", {"type":"string"})
          .option("x", {"alias":"extract","type":"string"})
          .option("X", {"alias":"vextract","type":"string"})
          .option("i", {"alias":"install","type":"array"})
      }
    },
    {
      cmd: "$0",
      name: "SC-DPKG",
      prefix: "SC-DPKG",
      booleans: ["L","list-files","print-architecture"],
      strings: ["add-architecture","x","extract","X","vextract"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dpkg", "SC-DPKG")
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
          .command("$0", "SC-DPKG")
          .option("L", {"alias":"list-files","type":"boolean"})
          .option("print-architecture", {"type":"boolean"})
          .option("add-architecture", {"type":"string"})
          .option("x", {"alias":"extract","type":"string"})
          .option("X", {"alias":"vextract","type":"string"})
          .option("i", {"alias":"install","type":"array"})
      }
    },
  ]
};