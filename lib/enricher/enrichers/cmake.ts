import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["cmake"],
  prefix: "SC-CMAKE",
  scenarios: [
    {
      fixupNonSpacedArgs: true,
      mustHave: ["--build"],
      cmd: "$0 [options...]",
      name: "SC-CMAKE",
      prefix: "SC-CMAKE",
      paths: ["build","install","open","config","prefix","S","B","C"],
      booleans: ["help","version","v","verbose","strip","N","clean-first","user-stderr"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cmake", "SC-CMAKE")
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
          .command("$0 [options...]", "SC-CMAKE")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("strip", {"type":"boolean"})
          .option("N", {"type":"boolean"})
          .option("clean-first", {"type":"boolean"})
          .option("user-stderr", {"type":"boolean"})
          .option("from", {"type":"string"})
          .option("E", {"type":"string"})
          .option("G", {"type":"string"})
          .option("U", {"type":"string"})
          .option("T", {"type":"string"})
          .option("A", {"type":"string"})
          .option("component", {"type":"string"})
          .option("j", {"alias":"parallel","type":"string"})
          .option("build", {"type":"string"})
          .option("install", {"type":"string"})
          .option("open", {"type":"string"})
          .option("config", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("S", {"type":"string"})
          .option("B", {"type":"string"})
          .option("C", {"type":"string"})
          .option("D", {"type":"array"})
          .option("W", {"type":"array"})
          .option("t", {"alias":"target","type":"array"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      mustHave: ["-S","-B"],
      cmd: "$0",
      name: "SC-CMAKE",
      prefix: "SC-CMAKE",
      paths: ["build","install","open","config","prefix","S","B","C"],
      booleans: ["help","version","v","verbose","strip","N","clean-first","user-stderr"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cmake", "SC-CMAKE")
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
          .command("$0", "SC-CMAKE")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("strip", {"type":"boolean"})
          .option("N", {"type":"boolean"})
          .option("clean-first", {"type":"boolean"})
          .option("user-stderr", {"type":"boolean"})
          .option("from", {"type":"string"})
          .option("E", {"type":"string"})
          .option("G", {"type":"string"})
          .option("U", {"type":"string"})
          .option("T", {"type":"string"})
          .option("A", {"type":"string"})
          .option("component", {"type":"string"})
          .option("j", {"alias":"parallel","type":"string"})
          .option("build", {"type":"string"})
          .option("install", {"type":"string"})
          .option("open", {"type":"string"})
          .option("config", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("S", {"type":"string"})
          .option("B", {"type":"string"})
          .option("C", {"type":"string"})
          .option("D", {"type":"array"})
          .option("W", {"type":"array"})
          .option("t", {"alias":"target","type":"array"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      mustHave: ["--install"],
      cmd: "$0",
      name: "SC-CMAKE",
      prefix: "SC-CMAKE",
      paths: ["build","install","open","config","prefix","S","B","C"],
      booleans: ["help","version","v","verbose","strip","N","clean-first","user-stderr"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cmake", "SC-CMAKE")
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
          .command("$0", "SC-CMAKE")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("strip", {"type":"boolean"})
          .option("N", {"type":"boolean"})
          .option("clean-first", {"type":"boolean"})
          .option("user-stderr", {"type":"boolean"})
          .option("from", {"type":"string"})
          .option("E", {"type":"string"})
          .option("G", {"type":"string"})
          .option("U", {"type":"string"})
          .option("T", {"type":"string"})
          .option("A", {"type":"string"})
          .option("component", {"type":"string"})
          .option("j", {"alias":"parallel","type":"string"})
          .option("build", {"type":"string"})
          .option("install", {"type":"string"})
          .option("open", {"type":"string"})
          .option("config", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("S", {"type":"string"})
          .option("B", {"type":"string"})
          .option("C", {"type":"string"})
          .option("D", {"type":"array"})
          .option("W", {"type":"array"})
          .option("t", {"alias":"target","type":"array"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      mustHave: ["--open"],
      cmd: "$0",
      name: "SC-CMAKE",
      prefix: "SC-CMAKE",
      paths: ["build","install","open","config","prefix","S","B","C"],
      booleans: ["help","version","v","verbose","strip","N","clean-first","user-stderr"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cmake", "SC-CMAKE")
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
          .command("$0", "SC-CMAKE")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("strip", {"type":"boolean"})
          .option("N", {"type":"boolean"})
          .option("clean-first", {"type":"boolean"})
          .option("user-stderr", {"type":"boolean"})
          .option("from", {"type":"string"})
          .option("E", {"type":"string"})
          .option("G", {"type":"string"})
          .option("U", {"type":"string"})
          .option("T", {"type":"string"})
          .option("A", {"type":"string"})
          .option("component", {"type":"string"})
          .option("j", {"alias":"parallel","type":"string"})
          .option("build", {"type":"string"})
          .option("install", {"type":"string"})
          .option("open", {"type":"string"})
          .option("config", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("S", {"type":"string"})
          .option("B", {"type":"string"})
          .option("C", {"type":"string"})
          .option("D", {"type":"array"})
          .option("W", {"type":"array"})
          .option("t", {"alias":"target","type":"array"})
      }
    },
    {
      saveLastNonOption: "pathToSourceOrBuild",
      fixupNonSpacedArgs: true,
      cmd: "$0 [pathToSourceOrBuild]",
      name: "SC-CMAKE",
      prefix: "SC-CMAKE",
      paths: ["build","install","open","config","prefix","S","B","C"],
      booleans: ["help","version","v","verbose","strip","N","clean-first","user-stderr"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cmake", "SC-CMAKE")
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
          .command("$0 [pathToSourceOrBuild]", "SC-CMAKE")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("strip", {"type":"boolean"})
          .option("N", {"type":"boolean"})
          .option("clean-first", {"type":"boolean"})
          .option("user-stderr", {"type":"boolean"})
          .option("from", {"type":"string"})
          .option("E", {"type":"string"})
          .option("G", {"type":"string"})
          .option("U", {"type":"string"})
          .option("T", {"type":"string"})
          .option("A", {"type":"string"})
          .option("component", {"type":"string"})
          .option("j", {"alias":"parallel","type":"string"})
          .option("build", {"type":"string"})
          .option("install", {"type":"string"})
          .option("open", {"type":"string"})
          .option("config", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("S", {"type":"string"})
          .option("B", {"type":"string"})
          .option("C", {"type":"string"})
          .option("D", {"type":"array"})
          .option("W", {"type":"array"})
          .option("t", {"alias":"target","type":"array"})
      }
    },
  ]
};