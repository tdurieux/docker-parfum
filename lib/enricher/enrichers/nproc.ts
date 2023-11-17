import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["nproc"],
  categories: ["SYSTEM_INFO"],
  prefix: "SC-NPROC",
  scenarios: [
    {
      cmd: "$0",
      name: "SC-NPROC",
      prefix: "SC-NPROC",
      booleans: ["all","help","version"],
      strings: ["ignore"],
      argv: () => {
        return (yargs() as Argv)
          .describe("nproc", "SC-NPROC")
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
          .command("$0", "SC-NPROC")
          .option("all", {"type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("ignore", {"type":"string"})
      }
    },
  ]
};