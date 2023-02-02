import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["jq"],
  prefix: "SC-JQ",
  scenarios: [
    {
      cmd: "$0 <filter> [PATH...]",
      name: "SC-JQ",
      prefix: "SC-JQ",
      booleans: ["version","seq","stream","slurp","s","raw-input","R","null-input","n","compact-output","c","tab","color-output","C","monochrome-output","M","ascii-output","a","unbuffered","sort-keys","S","raw-output","r","join-output","j","args","jsonargs"],
      argv: () => {
        return (yargs() as Argv)
          .describe("jq", "SC-JQ")
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
          .command("$0 <filter> [PATH...]", "SC-JQ")
          .option("version", {"type":"boolean"})
          .option("seq", {"type":"boolean"})
          .option("stream", {"type":"boolean"})
          .option("slurp", {"alias":"s","type":"boolean"})
          .option("raw-input", {"alias":"R","type":"boolean"})
          .option("null-input", {"alias":"n","type":"boolean"})
          .option("compact-output", {"alias":"c","type":"boolean"})
          .option("tab", {"type":"boolean"})
          .option("color-output", {"alias":"C","type":"boolean"})
          .option("monochrome-output", {"alias":"M","type":"boolean"})
          .option("ascii-output", {"alias":"a","type":"boolean"})
          .option("unbuffered", {"type":"boolean"})
          .option("sort-keys", {"alias":"S","type":"boolean"})
          .option("raw-output", {"alias":"r","type":"boolean"})
          .option("join-output", {"alias":"j","type":"boolean"})
          .option("args", {"type":"boolean"})
          .option("jsonargs", {"type":"boolean"})
          .option("e", {"alias":"exit-status","type":"string"})
          .option("arg", {"type":"string"})
          .option("L", {"type":"string"})
          .option("argjson", {"type":"string"})
          .option("slurpfile", {"type":"string"})
          .option("argfile", {"type":"string"})
          .option("f", {"alias":"from-file","type":"string"})
          .option("run-tests", {"type":"string"})
          .option("indent", {"type":"string"})
      }
    },
  ]
};