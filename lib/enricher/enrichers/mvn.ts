import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["mvn","mvnw"],
  categories: ["PACKAGE_MANAGEMENT"],
  prefix: "SC-MVN",
  scenarios: [
    {
      cmd: "$0 install",
      name: "SC-MVN-INSTALL",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-MVN",
      paths: ["f","file","l","log-file","s","settings","t","toolchains"],
      booleans: ["am","also-make","amd","also-make-dependents","B","batch-mode","C","strict-checksums","c","lax-checksums","cpu","check-plugin-updates","e","errors","fae","fail-at-end","ff","fail-fast","fn","fail-never","h","help","llr","legacy-local-repository","N","non-recursive","npr","no-plugin-registry","npu","no-plugin-updates","nsu","no-snapshot-updates","ntp","no-transfer-progress","o","offline","q","quiet","U","update-snapshots","up","update-plugins","v","version","V","show-version","X","debug"],
      strings: ["b","builder","color","D","define","emp","encrypt-master-password","ep","encrypt-password","gs","global-settings","gt","global-toolchains","P","activate-profiles","pl","projects","rf","resume-from","T","threads"],
      argv: () => {
        return (yargs() as Argv)
          .describe("mvn,mvnw", "SC-MVN")
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
          .command("$0 install", "SC-MVN-INSTALL")
          .option("am", {"alias":"also-make","type":"boolean"})
          .option("amd", {"alias":"also-make-dependents","type":"boolean"})
          .option("B", {"alias":"batch-mode","type":"boolean"})
          .option("C", {"alias":"strict-checksums","type":"boolean"})
          .option("c", {"alias":"lax-checksums","type":"boolean"})
          .option("cpu", {"alias":"check-plugin-updates","type":"boolean"})
          .option("e", {"alias":"errors","type":"boolean"})
          .option("fae", {"alias":"fail-at-end","type":"boolean"})
          .option("ff", {"alias":"fail-fast","type":"boolean"})
          .option("fn", {"alias":"fail-never","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("llr", {"alias":"legacy-local-repository","type":"boolean"})
          .option("N", {"alias":"non-recursive","type":"boolean"})
          .option("npr", {"alias":"no-plugin-registry","type":"boolean"})
          .option("npu", {"alias":"no-plugin-updates","type":"boolean"})
          .option("nsu", {"alias":"no-snapshot-updates","type":"boolean"})
          .option("ntp", {"alias":"no-transfer-progress","type":"boolean"})
          .option("o", {"alias":"offline","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("U", {"alias":"update-snapshots","type":"boolean"})
          .option("up", {"alias":"update-plugins","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("V", {"alias":"show-version","type":"boolean"})
          .option("X", {"alias":"debug","type":"boolean"})
          .option("b", {"alias":"builder","type":"string"})
          .option("color", {"type":"string"})
          .option("D", {"alias":"define","type":"string"})
          .option("emp", {"alias":"encrypt-master-password","type":"string"})
          .option("ep", {"alias":"encrypt-password","type":"string"})
          .option("gs", {"alias":"global-settings","type":"string"})
          .option("gt", {"alias":"global-toolchains","type":"string"})
          .option("P", {"alias":"activate-profiles","type":"string"})
          .option("pl", {"alias":"projects","type":"string"})
          .option("rf", {"alias":"resume-from","type":"string"})
          .option("T", {"alias":"threads","type":"string"})
          .option("f", {"alias":"file","type":"string"})
          .option("l", {"alias":"log-file","type":"string"})
          .option("s", {"alias":"settings","type":"string"})
          .option("t", {"alias":"toolchains","type":"string"})
      }
    },
    {
      cmd: "$0 clean",
      name: "SC-MVN-CLEAN",
      prefix: "SC-MVN",
      paths: ["f","file","l","log-file","s","settings","t","toolchains"],
      booleans: ["am","also-make","amd","also-make-dependents","B","batch-mode","C","strict-checksums","c","lax-checksums","cpu","check-plugin-updates","e","errors","fae","fail-at-end","ff","fail-fast","fn","fail-never","h","help","llr","legacy-local-repository","N","non-recursive","npr","no-plugin-registry","npu","no-plugin-updates","nsu","no-snapshot-updates","ntp","no-transfer-progress","o","offline","q","quiet","U","update-snapshots","up","update-plugins","v","version","V","show-version","X","debug"],
      strings: ["b","builder","color","D","define","emp","encrypt-master-password","ep","encrypt-password","gs","global-settings","gt","global-toolchains","P","activate-profiles","pl","projects","rf","resume-from","T","threads"],
      argv: () => {
        return (yargs() as Argv)
          .describe("mvn,mvnw", "SC-MVN")
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
          .command("$0 clean", "SC-MVN-CLEAN")
          .option("am", {"alias":"also-make","type":"boolean"})
          .option("amd", {"alias":"also-make-dependents","type":"boolean"})
          .option("B", {"alias":"batch-mode","type":"boolean"})
          .option("C", {"alias":"strict-checksums","type":"boolean"})
          .option("c", {"alias":"lax-checksums","type":"boolean"})
          .option("cpu", {"alias":"check-plugin-updates","type":"boolean"})
          .option("e", {"alias":"errors","type":"boolean"})
          .option("fae", {"alias":"fail-at-end","type":"boolean"})
          .option("ff", {"alias":"fail-fast","type":"boolean"})
          .option("fn", {"alias":"fail-never","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("llr", {"alias":"legacy-local-repository","type":"boolean"})
          .option("N", {"alias":"non-recursive","type":"boolean"})
          .option("npr", {"alias":"no-plugin-registry","type":"boolean"})
          .option("npu", {"alias":"no-plugin-updates","type":"boolean"})
          .option("nsu", {"alias":"no-snapshot-updates","type":"boolean"})
          .option("ntp", {"alias":"no-transfer-progress","type":"boolean"})
          .option("o", {"alias":"offline","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("U", {"alias":"update-snapshots","type":"boolean"})
          .option("up", {"alias":"update-plugins","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("V", {"alias":"show-version","type":"boolean"})
          .option("X", {"alias":"debug","type":"boolean"})
          .option("b", {"alias":"builder","type":"string"})
          .option("color", {"type":"string"})
          .option("D", {"alias":"define","type":"string"})
          .option("emp", {"alias":"encrypt-master-password","type":"string"})
          .option("ep", {"alias":"encrypt-password","type":"string"})
          .option("gs", {"alias":"global-settings","type":"string"})
          .option("gt", {"alias":"global-toolchains","type":"string"})
          .option("P", {"alias":"activate-profiles","type":"string"})
          .option("pl", {"alias":"projects","type":"string"})
          .option("rf", {"alias":"resume-from","type":"string"})
          .option("T", {"alias":"threads","type":"string"})
          .option("f", {"alias":"file","type":"string"})
          .option("l", {"alias":"log-file","type":"string"})
          .option("s", {"alias":"settings","type":"string"})
          .option("t", {"alias":"toolchains","type":"string"})
      }
    },
    {
      cmd: "$0 compile",
      name: "SC-MVN-COMPILE",
      categories: ["BUILD_PACKAGES"],
      prefix: "SC-MVN",
      paths: ["f","file","l","log-file","s","settings","t","toolchains"],
      booleans: ["am","also-make","amd","also-make-dependents","B","batch-mode","C","strict-checksums","c","lax-checksums","cpu","check-plugin-updates","e","errors","fae","fail-at-end","ff","fail-fast","fn","fail-never","h","help","llr","legacy-local-repository","N","non-recursive","npr","no-plugin-registry","npu","no-plugin-updates","nsu","no-snapshot-updates","ntp","no-transfer-progress","o","offline","q","quiet","U","update-snapshots","up","update-plugins","v","version","V","show-version","X","debug"],
      strings: ["b","builder","color","D","define","emp","encrypt-master-password","ep","encrypt-password","gs","global-settings","gt","global-toolchains","P","activate-profiles","pl","projects","rf","resume-from","T","threads"],
      argv: () => {
        return (yargs() as Argv)
          .describe("mvn,mvnw", "SC-MVN")
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
          .command("$0 compile", "SC-MVN-COMPILE")
          .option("am", {"alias":"also-make","type":"boolean"})
          .option("amd", {"alias":"also-make-dependents","type":"boolean"})
          .option("B", {"alias":"batch-mode","type":"boolean"})
          .option("C", {"alias":"strict-checksums","type":"boolean"})
          .option("c", {"alias":"lax-checksums","type":"boolean"})
          .option("cpu", {"alias":"check-plugin-updates","type":"boolean"})
          .option("e", {"alias":"errors","type":"boolean"})
          .option("fae", {"alias":"fail-at-end","type":"boolean"})
          .option("ff", {"alias":"fail-fast","type":"boolean"})
          .option("fn", {"alias":"fail-never","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("llr", {"alias":"legacy-local-repository","type":"boolean"})
          .option("N", {"alias":"non-recursive","type":"boolean"})
          .option("npr", {"alias":"no-plugin-registry","type":"boolean"})
          .option("npu", {"alias":"no-plugin-updates","type":"boolean"})
          .option("nsu", {"alias":"no-snapshot-updates","type":"boolean"})
          .option("ntp", {"alias":"no-transfer-progress","type":"boolean"})
          .option("o", {"alias":"offline","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("U", {"alias":"update-snapshots","type":"boolean"})
          .option("up", {"alias":"update-plugins","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("V", {"alias":"show-version","type":"boolean"})
          .option("X", {"alias":"debug","type":"boolean"})
          .option("b", {"alias":"builder","type":"string"})
          .option("color", {"type":"string"})
          .option("D", {"alias":"define","type":"string"})
          .option("emp", {"alias":"encrypt-master-password","type":"string"})
          .option("ep", {"alias":"encrypt-password","type":"string"})
          .option("gs", {"alias":"global-settings","type":"string"})
          .option("gt", {"alias":"global-toolchains","type":"string"})
          .option("P", {"alias":"activate-profiles","type":"string"})
          .option("pl", {"alias":"projects","type":"string"})
          .option("rf", {"alias":"resume-from","type":"string"})
          .option("T", {"alias":"threads","type":"string"})
          .option("f", {"alias":"file","type":"string"})
          .option("l", {"alias":"log-file","type":"string"})
          .option("s", {"alias":"settings","type":"string"})
          .option("t", {"alias":"toolchains","type":"string"})
      }
    },
    {
      cmd: "$0 test",
      name: "SC-MVN-TEST",
      categories: ["TEST_PACKAGES"],
      prefix: "SC-MVN",
      paths: ["f","file","l","log-file","s","settings","t","toolchains"],
      booleans: ["am","also-make","amd","also-make-dependents","B","batch-mode","C","strict-checksums","c","lax-checksums","cpu","check-plugin-updates","e","errors","fae","fail-at-end","ff","fail-fast","fn","fail-never","h","help","llr","legacy-local-repository","N","non-recursive","npr","no-plugin-registry","npu","no-plugin-updates","nsu","no-snapshot-updates","ntp","no-transfer-progress","o","offline","q","quiet","U","update-snapshots","up","update-plugins","v","version","V","show-version","X","debug"],
      strings: ["b","builder","color","D","define","emp","encrypt-master-password","ep","encrypt-password","gs","global-settings","gt","global-toolchains","P","activate-profiles","pl","projects","rf","resume-from","T","threads"],
      argv: () => {
        return (yargs() as Argv)
          .describe("mvn,mvnw", "SC-MVN")
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
          .command("$0 test", "SC-MVN-TEST")
          .option("am", {"alias":"also-make","type":"boolean"})
          .option("amd", {"alias":"also-make-dependents","type":"boolean"})
          .option("B", {"alias":"batch-mode","type":"boolean"})
          .option("C", {"alias":"strict-checksums","type":"boolean"})
          .option("c", {"alias":"lax-checksums","type":"boolean"})
          .option("cpu", {"alias":"check-plugin-updates","type":"boolean"})
          .option("e", {"alias":"errors","type":"boolean"})
          .option("fae", {"alias":"fail-at-end","type":"boolean"})
          .option("ff", {"alias":"fail-fast","type":"boolean"})
          .option("fn", {"alias":"fail-never","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("llr", {"alias":"legacy-local-repository","type":"boolean"})
          .option("N", {"alias":"non-recursive","type":"boolean"})
          .option("npr", {"alias":"no-plugin-registry","type":"boolean"})
          .option("npu", {"alias":"no-plugin-updates","type":"boolean"})
          .option("nsu", {"alias":"no-snapshot-updates","type":"boolean"})
          .option("ntp", {"alias":"no-transfer-progress","type":"boolean"})
          .option("o", {"alias":"offline","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("U", {"alias":"update-snapshots","type":"boolean"})
          .option("up", {"alias":"update-plugins","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("V", {"alias":"show-version","type":"boolean"})
          .option("X", {"alias":"debug","type":"boolean"})
          .option("b", {"alias":"builder","type":"string"})
          .option("color", {"type":"string"})
          .option("D", {"alias":"define","type":"string"})
          .option("emp", {"alias":"encrypt-master-password","type":"string"})
          .option("ep", {"alias":"encrypt-password","type":"string"})
          .option("gs", {"alias":"global-settings","type":"string"})
          .option("gt", {"alias":"global-toolchains","type":"string"})
          .option("P", {"alias":"activate-profiles","type":"string"})
          .option("pl", {"alias":"projects","type":"string"})
          .option("rf", {"alias":"resume-from","type":"string"})
          .option("T", {"alias":"threads","type":"string"})
          .option("f", {"alias":"file","type":"string"})
          .option("l", {"alias":"log-file","type":"string"})
          .option("s", {"alias":"settings","type":"string"})
          .option("t", {"alias":"toolchains","type":"string"})
      }
    },
    {
      cmd: "$0 package",
      name: "SC-MVN-PACKAGE",
      categories: ["BUILD_PACKAGES"],
      prefix: "SC-MVN",
      paths: ["f","file","l","log-file","s","settings","t","toolchains"],
      booleans: ["am","also-make","amd","also-make-dependents","B","batch-mode","C","strict-checksums","c","lax-checksums","cpu","check-plugin-updates","e","errors","fae","fail-at-end","ff","fail-fast","fn","fail-never","h","help","llr","legacy-local-repository","N","non-recursive","npr","no-plugin-registry","npu","no-plugin-updates","nsu","no-snapshot-updates","ntp","no-transfer-progress","o","offline","q","quiet","U","update-snapshots","up","update-plugins","v","version","V","show-version","X","debug"],
      strings: ["b","builder","color","D","define","emp","encrypt-master-password","ep","encrypt-password","gs","global-settings","gt","global-toolchains","P","activate-profiles","pl","projects","rf","resume-from","T","threads"],
      argv: () => {
        return (yargs() as Argv)
          .describe("mvn,mvnw", "SC-MVN")
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
          .command("$0 package", "SC-MVN-PACKAGE")
          .option("am", {"alias":"also-make","type":"boolean"})
          .option("amd", {"alias":"also-make-dependents","type":"boolean"})
          .option("B", {"alias":"batch-mode","type":"boolean"})
          .option("C", {"alias":"strict-checksums","type":"boolean"})
          .option("c", {"alias":"lax-checksums","type":"boolean"})
          .option("cpu", {"alias":"check-plugin-updates","type":"boolean"})
          .option("e", {"alias":"errors","type":"boolean"})
          .option("fae", {"alias":"fail-at-end","type":"boolean"})
          .option("ff", {"alias":"fail-fast","type":"boolean"})
          .option("fn", {"alias":"fail-never","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("llr", {"alias":"legacy-local-repository","type":"boolean"})
          .option("N", {"alias":"non-recursive","type":"boolean"})
          .option("npr", {"alias":"no-plugin-registry","type":"boolean"})
          .option("npu", {"alias":"no-plugin-updates","type":"boolean"})
          .option("nsu", {"alias":"no-snapshot-updates","type":"boolean"})
          .option("ntp", {"alias":"no-transfer-progress","type":"boolean"})
          .option("o", {"alias":"offline","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("U", {"alias":"update-snapshots","type":"boolean"})
          .option("up", {"alias":"update-plugins","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("V", {"alias":"show-version","type":"boolean"})
          .option("X", {"alias":"debug","type":"boolean"})
          .option("b", {"alias":"builder","type":"string"})
          .option("color", {"type":"string"})
          .option("D", {"alias":"define","type":"string"})
          .option("emp", {"alias":"encrypt-master-password","type":"string"})
          .option("ep", {"alias":"encrypt-password","type":"string"})
          .option("gs", {"alias":"global-settings","type":"string"})
          .option("gt", {"alias":"global-toolchains","type":"string"})
          .option("P", {"alias":"activate-profiles","type":"string"})
          .option("pl", {"alias":"projects","type":"string"})
          .option("rf", {"alias":"resume-from","type":"string"})
          .option("T", {"alias":"threads","type":"string"})
          .option("f", {"alias":"file","type":"string"})
          .option("l", {"alias":"log-file","type":"string"})
          .option("s", {"alias":"settings","type":"string"})
          .option("t", {"alias":"toolchains","type":"string"})
      }
    },
    {
      cmd: "$0 deploy",
      name: "SC-MVN-DEPLOY",
      categories: ["DEPLOY_PACKAGES"],
      prefix: "SC-MVN",
      paths: ["f","file","l","log-file","s","settings","t","toolchains"],
      booleans: ["am","also-make","amd","also-make-dependents","B","batch-mode","C","strict-checksums","c","lax-checksums","cpu","check-plugin-updates","e","errors","fae","fail-at-end","ff","fail-fast","fn","fail-never","h","help","llr","legacy-local-repository","N","non-recursive","npr","no-plugin-registry","npu","no-plugin-updates","nsu","no-snapshot-updates","ntp","no-transfer-progress","o","offline","q","quiet","U","update-snapshots","up","update-plugins","v","version","V","show-version","X","debug"],
      strings: ["b","builder","color","D","define","emp","encrypt-master-password","ep","encrypt-password","gs","global-settings","gt","global-toolchains","P","activate-profiles","pl","projects","rf","resume-from","T","threads"],
      argv: () => {
        return (yargs() as Argv)
          .describe("mvn,mvnw", "SC-MVN")
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
          .command("$0 deploy", "SC-MVN-DEPLOY")
          .option("am", {"alias":"also-make","type":"boolean"})
          .option("amd", {"alias":"also-make-dependents","type":"boolean"})
          .option("B", {"alias":"batch-mode","type":"boolean"})
          .option("C", {"alias":"strict-checksums","type":"boolean"})
          .option("c", {"alias":"lax-checksums","type":"boolean"})
          .option("cpu", {"alias":"check-plugin-updates","type":"boolean"})
          .option("e", {"alias":"errors","type":"boolean"})
          .option("fae", {"alias":"fail-at-end","type":"boolean"})
          .option("ff", {"alias":"fail-fast","type":"boolean"})
          .option("fn", {"alias":"fail-never","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("llr", {"alias":"legacy-local-repository","type":"boolean"})
          .option("N", {"alias":"non-recursive","type":"boolean"})
          .option("npr", {"alias":"no-plugin-registry","type":"boolean"})
          .option("npu", {"alias":"no-plugin-updates","type":"boolean"})
          .option("nsu", {"alias":"no-snapshot-updates","type":"boolean"})
          .option("ntp", {"alias":"no-transfer-progress","type":"boolean"})
          .option("o", {"alias":"offline","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("U", {"alias":"update-snapshots","type":"boolean"})
          .option("up", {"alias":"update-plugins","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("V", {"alias":"show-version","type":"boolean"})
          .option("X", {"alias":"debug","type":"boolean"})
          .option("b", {"alias":"builder","type":"string"})
          .option("color", {"type":"string"})
          .option("D", {"alias":"define","type":"string"})
          .option("emp", {"alias":"encrypt-master-password","type":"string"})
          .option("ep", {"alias":"encrypt-password","type":"string"})
          .option("gs", {"alias":"global-settings","type":"string"})
          .option("gt", {"alias":"global-toolchains","type":"string"})
          .option("P", {"alias":"activate-profiles","type":"string"})
          .option("pl", {"alias":"projects","type":"string"})
          .option("rf", {"alias":"resume-from","type":"string"})
          .option("T", {"alias":"threads","type":"string"})
          .option("f", {"alias":"file","type":"string"})
          .option("l", {"alias":"log-file","type":"string"})
          .option("s", {"alias":"settings","type":"string"})
          .option("t", {"alias":"toolchains","type":"string"})
      }
    },
  ]
};