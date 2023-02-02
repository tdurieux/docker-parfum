import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["chmod"],
  prefix: "SC-CHMOD",
  scenarios: [
    {
      cmd: "$0 <mode> [paths...]",
      name: "SC-CHMOD",
      prefix: "SC-CHMOD",
      paths: ["reference"],
      booleans: ["R","recursive","help","version","no-preserve-root","v","verbose","f","silent","f","quiet","c","changes","preserve-root"],
      argv: () => {
        return (yargs() as Argv)
          .describe("chmod", "SC-CHMOD")
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
          .command("$0 <mode> [paths...]", "SC-CHMOD")
          .option("R", {"alias":"recursive","type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("no-preserve-root", {"type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("f", {"alias":"silent","type":"boolean"})
          .option("f", {"alias":"quiet","type":"boolean"})
          .option("c", {"alias":"changes","type":"boolean"})
          .option("preserve-root", {"type":"boolean"})
          .option("reference", {"type":"string"})
      }
    },
    {
      mustHave: ["--reference"],
      cmd: "$0 [paths...]",
      name: "SC-CHMOD",
      prefix: "SC-CHMOD",
      paths: ["reference"],
      booleans: ["R","recursive","help","version","no-preserve-root","v","verbose","f","silent","f","quiet","c","changes","preserve-root"],
      argv: () => {
        return (yargs() as Argv)
          .describe("chmod", "SC-CHMOD")
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
          .command("$0 [paths...]", "SC-CHMOD")
          .option("R", {"alias":"recursive","type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("no-preserve-root", {"type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("f", {"alias":"silent","type":"boolean"})
          .option("f", {"alias":"quiet","type":"boolean"})
          .option("c", {"alias":"changes","type":"boolean"})
          .option("preserve-root", {"type":"boolean"})
          .option("reference", {"type":"string"})
      }
    },
  ]
};