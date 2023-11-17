import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["cargo"],
  categories: ["PACKAGE_MANAGEMENT"],
  prefix: "SC-CARGO",
  scenarios: [
    {
      cmd: "$0",
      name: "SC-CARGO",
      prefix: "SC-CARGO",
      booleans: ["V","version","list","v","verbose...","q","quiet","frozen","locked","offline","h","help"],
      strings: ["explain","color","C","config","Z"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0", "SC-CARGO")
          .option("V", {"alias":"version","type":"boolean"})
          .option("list", {"type":"boolean"})
          .option("v", {"alias":"verbose...","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("frozen", {"type":"boolean"})
          .option("locked", {"type":"boolean"})
          .option("offline", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("explain", {"type":"string"})
          .option("color", {"type":"string"})
          .option("C", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
      }
    },
    {
      cmd: "$0 build",
      name: "SC-CARGO-BUILD",
      categories: ["BUILD_PACKAGES"],
      prefix: "SC-CARGO",
      paths: [],
      booleans: [],
      strings: [],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 build", "SC-CARGO-BUILD")
      }
    },
    {
      cmd: "$0 check",
      name: "SC-CARGO-CHECK",
      prefix: "SC-CARGO",
      paths: [],
      booleans: [],
      strings: [],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 check", "SC-CARGO-CHECK")
      }
    },
    {
      cmd: "$0 clean",
      name: "SC-CARGO-CLEAN",
      prefix: "SC-CARGO",
      booleans: ["doc","q","quiet","v","verbose...","h","help"],
      strings: ["color","config","Z"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 clean", "SC-CARGO-CLEAN")
          .option("doc", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("v", {"alias":"verbose...","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("color", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
      }
    },
    {
      cmd: "$0 doc",
      name: "SC-CARGO-DOC",
      prefix: "SC-CARGO",
      paths: [],
      booleans: [],
      strings: [],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 doc", "SC-CARGO-DOC")
      }
    },
    {
      cmd: "$0 new",
      name: "SC-CARGO-NEW",
      prefix: "SC-CARGO",
      booleans: ["bin","lib","q","quiet","v","verbose...","h","help"],
      strings: ["vcs","edition","name","registry","color","config","Z"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 new", "SC-CARGO-NEW")
          .option("bin", {"type":"boolean"})
          .option("lib", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("v", {"alias":"verbose...","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("vcs", {"type":"string"})
          .option("edition", {"type":"string"})
          .option("name", {"type":"string"})
          .option("registry", {"type":"string"})
          .option("color", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
      }
    },
    {
      cmd: "$0 init",
      name: "SC-CARGO-INIT",
      prefix: "SC-CARGO",
      booleans: ["bin","lib","q","quiet","v","verbose...","h","help"],
      strings: ["vcs","edition","name","registry","color","config","Z"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 init", "SC-CARGO-INIT")
          .option("bin", {"type":"boolean"})
          .option("lib", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("v", {"alias":"verbose...","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("vcs", {"type":"string"})
          .option("edition", {"type":"string"})
          .option("name", {"type":"string"})
          .option("registry", {"type":"string"})
          .option("color", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
      }
    },
    {
      cmd: "$0 add",
      name: "SC-CARGO-ADD",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-CARGO",
      strings: ["no-default-features","default-features","F","features","optional","no-optional","rename","ignore-rust-version","dry-run","q","quiet","v","verbose...","color","config","Z","h","help"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 add", "SC-CARGO-ADD")
          .option("no-default-features", {"type":"string"})
          .option("default-features", {"type":"string"})
          .option("F", {"alias":"features","type":"string"})
          .option("optional", {"type":"string"})
          .option("no-optional", {"type":"string"})
          .option("rename", {"type":"string"})
          .option("ignore-rust-version", {"type":"string"})
          .option("dry-run", {"type":"string"})
          .option("q", {"alias":"quiet","type":"string"})
          .option("v", {"alias":"verbose...","type":"string"})
          .option("color", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
          .option("h", {"alias":"help","type":"string"})
      }
    },
    {
      cmd: "$0 remove",
      name: "SC-CARGO-REMOVE",
      categories: ["UNINSTALL_PACKAGES"],
      prefix: "SC-CARGO",
      booleans: ["dry-run","q","quiet","v","verbose...","h","help"],
      strings: ["color","config","Z"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 remove", "SC-CARGO-REMOVE")
          .option("dry-run", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("v", {"alias":"verbose...","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("color", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
      }
    },
    {
      cmd: "$0 run",
      name: "SC-CARGO-RUN",
      categories: ["RUN_PACKAGES"],
      prefix: "SC-CARGO",
      paths: [],
      booleans: [],
      strings: [],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 run", "SC-CARGO-RUN")
      }
    },
    {
      cmd: "$0 test",
      name: "SC-CARGO-TEST",
      categories: ["TEST_PACKAGES"],
      prefix: "SC-CARGO",
      paths: [],
      booleans: [],
      strings: [],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 test", "SC-CARGO-TEST")
      }
    },
    {
      cmd: "$0 bench",
      name: "SC-CARGO-BENCH",
      prefix: "SC-CARGO",
      booleans: ["no-run","no-fail-fast","ignore-rust-version","q","quiet","v","verbose...","h","help"],
      strings: ["message-format","color","config","Z"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 bench", "SC-CARGO-BENCH")
          .option("no-run", {"type":"boolean"})
          .option("no-fail-fast", {"type":"boolean"})
          .option("ignore-rust-version", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("v", {"alias":"verbose...","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("message-format", {"type":"string"})
          .option("color", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
      }
    },
    {
      cmd: "$0 update",
      name: "SC-CARGO-UPDATE",
      categories: ["UPDATE_PACKAGES"],
      prefix: "SC-CARGO",
      booleans: ["dry-run","aggressive","q","quiet","v","verbose...","h","help"],
      strings: ["precise","color","config","Z"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 update", "SC-CARGO-UPDATE")
          .option("dry-run", {"type":"boolean"})
          .option("aggressive", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("v", {"alias":"verbose...","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("precise", {"type":"string"})
          .option("color", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
      }
    },
    {
      cmd: "$0 search",
      name: "SC-CARGO-SEARCH",
      prefix: "SC-CARGO",
      booleans: ["q","quiet","v","verbose...","h","help"],
      strings: ["limit","index","registry","color","config","Z"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 search", "SC-CARGO-SEARCH")
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("v", {"alias":"verbose...","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("limit", {"type":"string"})
          .option("index", {"type":"string"})
          .option("registry", {"type":"string"})
          .option("color", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
      }
    },
    {
      cmd: "$0 publish",
      name: "SC-CARGO-PUBLISH",
      categories: ["DEPLOY_PACKAGES"],
      prefix: "SC-CARGO",
      booleans: ["dry-run","no-verify","allow-dirty","q","quiet","v","verbose...","h","help"],
      strings: ["index","registry","token","color","config","Z"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 publish", "SC-CARGO-PUBLISH")
          .option("dry-run", {"type":"boolean"})
          .option("no-verify", {"type":"boolean"})
          .option("allow-dirty", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("v", {"alias":"verbose...","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("index", {"type":"string"})
          .option("registry", {"type":"string"})
          .option("token", {"type":"string"})
          .option("color", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
      }
    },
    {
      cmd: "$0 install",
      name: "SC-CARGO-INSTALL",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-CARGO",
      booleans: ["f","force","no-track","list","ignore-rust-version","q","quiet","debug","v","verbose...","h","help"],
      strings: ["version","index","registry","git","branch","tag","rev","path","root","message-format","color","config","Z"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 install", "SC-CARGO-INSTALL")
          .option("f", {"alias":"force","type":"boolean"})
          .option("no-track", {"type":"boolean"})
          .option("list", {"type":"boolean"})
          .option("ignore-rust-version", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("debug", {"type":"boolean"})
          .option("v", {"alias":"verbose...","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("version", {"type":"string"})
          .option("index", {"type":"string"})
          .option("registry", {"type":"string"})
          .option("git", {"type":"string"})
          .option("branch", {"type":"string"})
          .option("tag", {"type":"string"})
          .option("rev", {"type":"string"})
          .option("path", {"type":"string"})
          .option("root", {"type":"string"})
          .option("message-format", {"type":"string"})
          .option("color", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
      }
    },
    {
      cmd: "$0 uninstall",
      name: "SC-CARGO-UNINSTALL",
      categories: ["UNINSTALL_PACKAGES"],
      prefix: "SC-CARGO",
      booleans: ["q","quiet","v","verbose...","h","help"],
      strings: ["root","color","config","Z"],
      argv: () => {
        return (yargs() as Argv)
          .describe("cargo", "SC-CARGO")
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
          .command("$0 uninstall", "SC-CARGO-UNINSTALL")
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("v", {"alias":"verbose...","type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("root", {"type":"string"})
          .option("color", {"type":"string"})
          .option("config", {"type":"string"})
          .option("Z", {"type":"string"})
      }
    },
  ]
};