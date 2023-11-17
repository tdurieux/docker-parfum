import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["php"],
  categories: ["DEVELOPMENT"],
  prefix: "SC-PHP",
  scenarios: [
    {
      captureAllAfter: {"match":["--"],"name":"args"},
      cmd: "$0 [script] [args...]",
      name: "SC-PHP",
      prefix: "SC-PHP",
      paths: ["f","file","F","process-file","c","php-ini","z","zend-extension"],
      booleans: ["a","interactive","C","nochdir","q","no-header","n","no-php-ini","e","h","help","H","hide-args","i","info","L","m","modules","s","syntax-highlight","v","version","w","stripped"],
      strings: ["b","bindpath","T","timing","g","global","r","run","B","process-begin","R","process-code","E","process-end"],
      argv: () => {
        return (yargs() as Argv)
          .describe("php", "SC-PHP")
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
          .command("$0 [script] [args...]", "SC-PHP")
          .option("a", {"alias":"interactive","type":"boolean"})
          .option("C", {"alias":"nochdir","type":"boolean"})
          .option("q", {"alias":"no-header","type":"boolean"})
          .option("n", {"alias":"no-php-ini","type":"boolean"})
          .option("e", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("H", {"alias":"hide-args","type":"boolean"})
          .option("i", {"alias":"info","type":"boolean"})
          .option("L", {"type":"boolean"})
          .option("m", {"alias":"modules","type":"boolean"})
          .option("s", {"alias":"syntax-highlight","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("w", {"alias":"stripped","type":"boolean"})
          .option("b", {"alias":"bindpath","type":"string"})
          .option("T", {"alias":"timing","type":"string"})
          .option("g", {"alias":"global","type":"string"})
          .option("r", {"alias":"run","type":"string"})
          .option("B", {"alias":"process-begin","type":"string"})
          .option("R", {"alias":"process-code","type":"string"})
          .option("E", {"alias":"process-end","type":"string"})
          .option("f", {"alias":"file","type":"string"})
          .option("F", {"alias":"process-file","type":"string"})
          .option("c", {"alias":"php-ini","type":"string"})
          .option("z", {"alias":"zend-extension","type":"string"})
          .option("d", {"alias":"define","type":"array"})
      }
    },
  ]
};