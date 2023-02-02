import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["google-chrome","chromedriver"],
  prefix: "SC-GOOGLE-CHROME",
  scenarios: [
    {
      cmd: "$0 <URL>",
      name: "SC-GOOGLE-CHROME",
      prefix: "SC-GOOGLE-CHROME",
      paths: ["user-data-dir"],
      booleans: ["incognito"],
      argv: () => {
        return (yargs() as Argv)
          .describe("google-chrome,chromedriver", "SC-GOOGLE-CHROME")
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
          .command("$0 <URL>", "SC-GOOGLE-CHROME")
          .option("incognito", {"type":"boolean"})
          .option("user-data-dir", {"type":"string"})
      }
    },
  ]
};