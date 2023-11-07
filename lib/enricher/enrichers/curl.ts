import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["curl"],
  categories: ["DOWNLOAD"],
  prefix: "SC-CURL",
  scenarios: [
    {
      cmd: "$0 [url]",
      name: "SC-CURL",
      prefix: "SC-CURL",
      paths: ["o","output"],
      booleans: ["version","f","fail","s","silent","l","list-only","N","no-buffer","v","verbose","S","show-error","L","location","compressed","j","junk-session-cookies","k","insecure","progress","progress-bar","create-dirs","O","remote-name"],
      argv: () => {
        return (yargs() as Argv)
          .describe("curl", "SC-CURL")
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
          .command("$0 [url]", "SC-CURL")
          .option("version", {"type":"boolean"})
          .option("f", {"alias":"fail","type":"boolean"})
          .option("s", {"alias":"silent","type":"boolean"})
          .option("l", {"alias":"list-only","type":"boolean"})
          .option("N", {"alias":"no-buffer","type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("S", {"alias":"show-error","type":"boolean"})
          .option("L", {"alias":"location","type":"boolean"})
          .option("compressed", {"type":"boolean"})
          .option("j", {"alias":"junk-session-cookies","type":"boolean"})
          .option("k", {"alias":"insecure","type":"boolean"})
          .option("progress", {"type":"boolean"})
          .option("progress-bar", {"type":"boolean"})
          .option("create-dirs", {"type":"boolean"})
          .option("O", {"alias":"remote-name","type":"boolean"})
          .option("retry", {"type":"string"})
          .option("url", {"type":"string"})
          .option("o", {"alias":"output","type":"string"})
      }
    },
  ]
};