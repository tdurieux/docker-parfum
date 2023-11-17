import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["sudo"],
  categories: ["PRIVILEGES"],
  prefix: "SC-SUDO",
  scenarios: [
    {
      captureAfterFirstNonOption: "args",
      postProcess: [{"subCommand":"args"}],
      cmd: "$0",
      name: "SC-SUDO",
      prefix: "SC-SUDO",
      booleans: ["A","askpass","b","background","E","preserve-env","e","edit","H","set-home","h","help","i","login","K","remove-timestamp","k","reset-timestamp","l","list","n","non-interactive","P","preserve-groups","S","stdin","s","shell","V","version","v","validate"],
      strings: ["C","close-from","g","group","h","host","p","prompt","r","role","U","other-user","u","user"],
      argv: () => {
        return (yargs() as Argv)
          .describe("sudo", "SC-SUDO")
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
          .command("$0", "SC-SUDO")
          .option("A", {"alias":"askpass","type":"boolean"})
          .option("b", {"alias":"background","type":"boolean"})
          .option("E", {"alias":"preserve-env","type":"boolean"})
          .option("e", {"alias":"edit","type":"boolean"})
          .option("H", {"alias":"set-home","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("i", {"alias":"login","type":"boolean"})
          .option("K", {"alias":"remove-timestamp","type":"boolean"})
          .option("k", {"alias":"reset-timestamp","type":"boolean"})
          .option("l", {"alias":"list","type":"boolean"})
          .option("n", {"alias":"non-interactive","type":"boolean"})
          .option("P", {"alias":"preserve-groups","type":"boolean"})
          .option("S", {"alias":"stdin","type":"boolean"})
          .option("s", {"alias":"shell","type":"boolean"})
          .option("V", {"alias":"version","type":"boolean"})
          .option("v", {"alias":"validate","type":"boolean"})
          .option("C", {"alias":"close-from","type":"string"})
          .option("g", {"alias":"group","type":"string"})
          .option("h", {"alias":"host","type":"string"})
          .option("p", {"alias":"prompt","type":"string"})
          .option("r", {"alias":"role","type":"string"})
          .option("U", {"alias":"other-user","type":"string"})
          .option("u", {"alias":"user","type":"string"})
      }
    },
  ]
};