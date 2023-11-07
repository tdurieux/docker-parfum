import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["grep"],
  categories: ["SEARCH","FILE_SYSTEM"],
  prefix: "SC-GREP",
  scenarios: [
    {
      cmd: "$0 <pattern> [paths...]",
      name: "SC-GREP",
      prefix: "SC-GREP",
      paths: ["f","file","exclude-from"],
      booleans: ["E","extended-regexp","F","fixed-strings","G","basic-regexp","P","perl-regexp","i","ignore-case","w","word-regexp","x","line-regexp","z","null-data","s","no-messages","v","invert-match","V","version","help","b","byte-offset","n","line-number","lin-buffered","H","with-filename","h","no-filename","o","only-matching","q","quiet","q","silent","a","text","I","r","recursive","R","dereference-recursive","L","files-without-match","l","files-with-match","c","count","T","initial-tab","Z","null","U","binary","u","unix-bytes-offsets","e","regexp"],
      argv: () => {
        return (yargs() as Argv)
          .describe("grep", "SC-GREP")
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
          .command("$0 <pattern> [paths...]", "SC-GREP")
          .option("E", {"alias":"extended-regexp","type":"boolean"})
          .option("F", {"alias":"fixed-strings","type":"boolean"})
          .option("G", {"alias":"basic-regexp","type":"boolean"})
          .option("P", {"alias":"perl-regexp","type":"boolean"})
          .option("i", {"alias":"ignore-case","type":"boolean"})
          .option("w", {"alias":"word-regexp","type":"boolean"})
          .option("x", {"alias":"line-regexp","type":"boolean"})
          .option("z", {"alias":"null-data","type":"boolean"})
          .option("s", {"alias":"no-messages","type":"boolean"})
          .option("v", {"alias":"invert-match","type":"boolean"})
          .option("V", {"alias":"version","type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("b", {"alias":"byte-offset","type":"boolean"})
          .option("n", {"alias":"line-number","type":"boolean"})
          .option("lin-buffered", {"type":"boolean"})
          .option("H", {"alias":"with-filename","type":"boolean"})
          .option("h", {"alias":"no-filename","type":"boolean"})
          .option("o", {"alias":"only-matching","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("q", {"alias":"silent","type":"boolean"})
          .option("a", {"alias":"text","type":"boolean"})
          .option("I", {"type":"boolean"})
          .option("r", {"alias":"recursive","type":"boolean"})
          .option("R", {"alias":"dereference-recursive","type":"boolean"})
          .option("L", {"alias":"files-without-match","type":"boolean"})
          .option("l", {"alias":"files-with-match","type":"boolean"})
          .option("c", {"alias":"count","type":"boolean"})
          .option("T", {"alias":"initial-tab","type":"boolean"})
          .option("Z", {"alias":"null","type":"boolean"})
          .option("U", {"alias":"binary","type":"boolean"})
          .option("u", {"alias":"unix-bytes-offsets","type":"boolean"})
          .option("e", {"alias":"regexp","type":"boolean"})
          .option("label", {"type":"string"})
          .option("binary-files", {"type":"string"})
          .option("include", {"type":"string"})
          .option("exclude", {"type":"string"})
          .option("exclude-dir", {"type":"string"})
          .option("C", {"alias":"context","type":"string"})
          .option("B", {"alias":"before-context","type":"string"})
          .option("A", {"alias":"after-context","type":"string"})
          .option("f", {"alias":"file","type":"string"})
          .option("exclude-from", {"type":"string"})
      }
    },
  ]
};