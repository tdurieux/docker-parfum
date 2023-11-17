import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["rustc"],
  categories: ["DEVELOPMENT"],
  prefix: "SC-RUSTC",
  scenarios: [
    {
      cmd: "$0",
      name: "SC-RUSTC",
      prefix: "SC-RUSTC",
      booleans: ["h","help","g","O","test","V","version","v","verbose"],
      strings: ["cfg","L","l","crate-type","crate-name","edition","emit","print","o","out-dir","explain","target","A","allow","W","warn","force-warn","D","deny","F","forbid","cap-lints","C","codegen"],
      argv: () => {
        return (yargs() as Argv)
          .describe("rustc", "SC-RUSTC")
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
          .command("$0", "SC-RUSTC")
          .option("h", {"alias":"help","type":"boolean"})
          .option("g", {"type":"boolean"})
          .option("O", {"type":"boolean"})
          .option("test", {"type":"boolean"})
          .option("V", {"alias":"version","type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("cfg", {"type":"string"})
          .option("L", {"type":"string"})
          .option("l", {"type":"string"})
          .option("crate-type", {"type":"string"})
          .option("crate-name", {"type":"string"})
          .option("edition", {"type":"string"})
          .option("emit", {"type":"string"})
          .option("print", {"type":"string"})
          .option("o", {"type":"string"})
          .option("out-dir", {"type":"string"})
          .option("explain", {"type":"string"})
          .option("target", {"type":"string"})
          .option("A", {"alias":"allow","type":"string"})
          .option("W", {"alias":"warn","type":"string"})
          .option("force-warn", {"type":"string"})
          .option("D", {"alias":"deny","type":"string"})
          .option("F", {"alias":"forbid","type":"string"})
          .option("cap-lints", {"type":"string"})
          .option("C", {"alias":"codegen","type":"string"})
      }
    },
  ]
};