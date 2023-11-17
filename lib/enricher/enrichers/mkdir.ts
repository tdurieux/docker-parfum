import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["mkdir"],
  categories: ["FILE_SYSTEM"],
  prefix: "SC-MKDIR",
  scenarios: [
    {
      postProcess: [{"tagLastElement":{"source":"paths","tag":"BASH-PATH"}}],
      cmd: "$0 [paths...]",
      name: "SC-MKDIR",
      prefix: "SC-MKDIR",
      booleans: ["p","parents","v","verbose","Z","help","version"],
      strings: ["m","mode","context"],
      argv: () => {
        return (yargs() as Argv)
          .describe("mkdir", "SC-MKDIR")
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
          .command("$0 [paths...]", "SC-MKDIR")
          .option("p", {"alias":"parents","type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("Z", {"type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("m", {"alias":"mode","type":"string"})
          .option("context", {"type":"string"})
      }
    },
  ]
};