import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["ln"],
  categories: ["FILE_SYSTEM"],
  prefix: "SC-LN",
  scenarios: [
    {
      cmd: "$0 <target> <link>",
      name: "SC-LN",
      prefix: "SC-LN",
      paths: ["t","target-directory"],
      booleans: ["b","d","directory","F","directory","f","force","i","interactive","L","logical","n","no-dereference","P","physical","r","relative","s","symbolic","T","no-target-directory","v","verbose","help","version"],
      strings: ["backup","S","suffix"],
      argv: () => {
        return (yargs() as Argv)
          .describe("ln", "SC-LN")
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
          .command("$0 <target> <link>", "SC-LN")
          .option("b", {"type":"boolean"})
          .option("d", {"alias":"directory","type":"boolean"})
          .option("F", {"alias":"directory","type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("i", {"alias":"interactive","type":"boolean"})
          .option("L", {"alias":"logical","type":"boolean"})
          .option("n", {"alias":"no-dereference","type":"boolean"})
          .option("P", {"alias":"physical","type":"boolean"})
          .option("r", {"alias":"relative","type":"boolean"})
          .option("s", {"alias":"symbolic","type":"boolean"})
          .option("T", {"alias":"no-target-directory","type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("backup", {"type":"string"})
          .option("S", {"alias":"suffix","type":"string"})
          .option("t", {"alias":"target-directory","type":"string"})
      }
    },
    {
      cmd: "$0 <target>",
      name: "SC-LN",
      prefix: "SC-LN",
      paths: ["t","target-directory"],
      booleans: ["b","d","directory","F","directory","f","force","i","interactive","L","logical","n","no-dereference","P","physical","r","relative","s","symbolic","T","no-target-directory","v","verbose","help","version"],
      strings: ["backup","S","suffix"],
      argv: () => {
        return (yargs() as Argv)
          .describe("ln", "SC-LN")
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
          .command("$0 <target>", "SC-LN")
          .option("b", {"type":"boolean"})
          .option("d", {"alias":"directory","type":"boolean"})
          .option("F", {"alias":"directory","type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("i", {"alias":"interactive","type":"boolean"})
          .option("L", {"alias":"logical","type":"boolean"})
          .option("n", {"alias":"no-dereference","type":"boolean"})
          .option("P", {"alias":"physical","type":"boolean"})
          .option("r", {"alias":"relative","type":"boolean"})
          .option("s", {"alias":"symbolic","type":"boolean"})
          .option("T", {"alias":"no-target-directory","type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("backup", {"type":"string"})
          .option("S", {"alias":"suffix","type":"string"})
          .option("t", {"alias":"target-directory","type":"string"})
      }
    },
    {
      mustHave: ["-t"],
      cmd: "$0 [targets...]",
      name: "SC-LN",
      prefix: "SC-LN",
      paths: ["t","target-directory"],
      booleans: ["b","d","directory","F","directory","f","force","i","interactive","L","logical","n","no-dereference","P","physical","r","relative","s","symbolic","T","no-target-directory","v","verbose","help","version"],
      strings: ["backup","S","suffix"],
      argv: () => {
        return (yargs() as Argv)
          .describe("ln", "SC-LN")
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
          .command("$0 [targets...]", "SC-LN")
          .option("b", {"type":"boolean"})
          .option("d", {"alias":"directory","type":"boolean"})
          .option("F", {"alias":"directory","type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("i", {"alias":"interactive","type":"boolean"})
          .option("L", {"alias":"logical","type":"boolean"})
          .option("n", {"alias":"no-dereference","type":"boolean"})
          .option("P", {"alias":"physical","type":"boolean"})
          .option("r", {"alias":"relative","type":"boolean"})
          .option("s", {"alias":"symbolic","type":"boolean"})
          .option("T", {"alias":"no-target-directory","type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("backup", {"type":"string"})
          .option("S", {"alias":"suffix","type":"string"})
          .option("t", {"alias":"target-directory","type":"string"})
      }
    },
    {
      mustHave: ["--target-directory"],
      cmd: "$0 [targets...]",
      name: "SC-LN",
      prefix: "SC-LN",
      paths: ["t","target-directory"],
      booleans: ["b","d","directory","F","directory","f","force","i","interactive","L","logical","n","no-dereference","P","physical","r","relative","s","symbolic","T","no-target-directory","v","verbose","help","version"],
      strings: ["backup","S","suffix"],
      argv: () => {
        return (yargs() as Argv)
          .describe("ln", "SC-LN")
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
          .command("$0 [targets...]", "SC-LN")
          .option("b", {"type":"boolean"})
          .option("d", {"alias":"directory","type":"boolean"})
          .option("F", {"alias":"directory","type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("i", {"alias":"interactive","type":"boolean"})
          .option("L", {"alias":"logical","type":"boolean"})
          .option("n", {"alias":"no-dereference","type":"boolean"})
          .option("P", {"alias":"physical","type":"boolean"})
          .option("r", {"alias":"relative","type":"boolean"})
          .option("s", {"alias":"symbolic","type":"boolean"})
          .option("T", {"alias":"no-target-directory","type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("backup", {"type":"string"})
          .option("S", {"alias":"suffix","type":"string"})
          .option("t", {"alias":"target-directory","type":"string"})
      }
    },
    {
      postProcess: [{"tagLastElement":{"source":"targets","tag":"SC-LN-DIRECTORY"}}],
      cmd: "$0 [targets...]",
      name: "SC-LN",
      prefix: "SC-LN",
      paths: ["t","target-directory"],
      booleans: ["b","d","directory","F","directory","f","force","i","interactive","L","logical","n","no-dereference","P","physical","r","relative","s","symbolic","T","no-target-directory","v","verbose","help","version"],
      strings: ["backup","S","suffix"],
      argv: () => {
        return (yargs() as Argv)
          .describe("ln", "SC-LN")
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
          .command("$0 [targets...]", "SC-LN")
          .option("b", {"type":"boolean"})
          .option("d", {"alias":"directory","type":"boolean"})
          .option("F", {"alias":"directory","type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("i", {"alias":"interactive","type":"boolean"})
          .option("L", {"alias":"logical","type":"boolean"})
          .option("n", {"alias":"no-dereference","type":"boolean"})
          .option("P", {"alias":"physical","type":"boolean"})
          .option("r", {"alias":"relative","type":"boolean"})
          .option("s", {"alias":"symbolic","type":"boolean"})
          .option("T", {"alias":"no-target-directory","type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("backup", {"type":"string"})
          .option("S", {"alias":"suffix","type":"string"})
          .option("t", {"alias":"target-directory","type":"string"})
      }
    },
  ]
};