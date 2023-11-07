import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["adduser"],
  categories: ["USER_MANAGEMENT"],
  prefix: "SC-ADD-USER",
  scenarios: [
    {
      cmd: "$0 [login]",
      name: "SC-ADD-USER",
      prefix: "SC-ADD-USER",
      paths: ["b","base-dir","d","home","home-dir","h","k","skel"],
      booleans: ["D","defaults","m","create-home","M","N","no-user-group","o","non-unique","r","system","U","user-group","disabled-password","S","system","no-log-init"],
      argv: () => {
        return (yargs() as Argv)
          .describe("adduser", "SC-ADD-USER")
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
          .command("$0 [login]", "SC-ADD-USER")
          .option("D", {"alias":"defaults","type":"boolean"})
          .option("m", {"alias":"create-home","type":"boolean"})
          .option("M", {"type":"boolean"})
          .option("N", {"alias":"no-user-group","type":"boolean"})
          .option("o", {"alias":"non-unique","type":"boolean"})
          .option("r", {"alias":"system","type":"boolean"})
          .option("U", {"alias":"user-group","type":"boolean"})
          .option("disabled-password", {"type":"boolean"})
          .option("S", {"alias":"system","type":"boolean"})
          .option("no-log-init", {"type":"boolean"})
          .option("c", {"alias":"comment","type":"string"})
          .option("e", {"alias":"expiredate","type":"string"})
          .option("f", {"alias":"inactive","type":"string"})
          .option("g", {"alias":"gid","type":"string"})
          .option("p", {"alias":"password","type":"string"})
          .option("s", {"alias":"shell","type":"string"})
          .option("u", {"alias":"uid","type":"string"})
          .option("Z", {"alias":"selinux-user","type":"string"})
          .option("ingroup", {"type":"string"})
          .option("G", {"alias":"groups","type":"string"})
          .option("b", {"alias":"base-dir","type":"string"})
          .option("d", {"alias":"home","type":"string"})
          .option("home-dir", {"type":"string"})
          .option("h", {"type":"string"})
          .option("k", {"alias":"skel","type":"string"})
          .option("K", {"alias":"key","type":"array"})
          .option("gecos", {"type":"array"})
      }
    },
  ]
};