import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["apk"],
  categories: ["PACKAGE_MANAGEMENT"],
  prefix: "SC-APK",
  scenarios: [
    {
      cmd: "$0 add [packages...]",
      name: "SC-APK-ADD",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-APK",
      paths: [],
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress","no-network","initdb","allow-untrusted","upgrade"],
      strings: ["p","t","virtual"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 add [packages...]", "SC-APK-ADD")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("no-network", {"type":"boolean"})
          .option("initdb", {"type":"boolean"})
          .option("allow-untrusted", {"type":"boolean"})
          .option("upgrade", {"type":"boolean"})
          .option("p", {"type":"string"})
          .option("t", {"alias":"virtual","type":"string"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 del [packages...]",
      name: "SC-APK-DEL",
      categories: ["UNINSTALL_PACKAGES"],
      prefix: "SC-APK",
      paths: [],
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress","no-network","purge"],
      strings: [],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 del [packages...]", "SC-APK-DEL")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("no-network", {"type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 fix",
      name: "SC-APK-FIX",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 fix", "SC-APK-FIX")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 update",
      name: "SC-APK-UPDATE",
      categories: ["UPDATE_PACKAGES"],
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 update", "SC-APK-UPDATE")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 info",
      name: "SC-APK-INFO",
      prefix: "SC-APK",
      paths: [],
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress","installed"],
      strings: [],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 info", "SC-APK-INFO")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("installed", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 search",
      name: "SC-APK-SEARCH",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 search", "SC-APK-SEARCH")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 upgrade [packages...]",
      name: "SC-APK-UPGRADE",
      categories: ["UPGRADE_PACKAGES"],
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 upgrade [packages...]", "SC-APK-UPGRADE")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 cache",
      name: "SC-APK-CACHE",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 cache", "SC-APK-CACHE")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 version",
      name: "SC-APK-VERSION",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 version", "SC-APK-VERSION")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 index",
      name: "SC-APK-INDEX",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 index", "SC-APK-INDEX")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 fetch",
      name: "SC-APK-FETCH",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 fetch", "SC-APK-FETCH")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 audit",
      name: "SC-APK-AUDIT",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 audit", "SC-APK-AUDIT")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 verify",
      name: "SC-APK-VERIFY",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 verify", "SC-APK-VERIFY")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 dot",
      name: "SC-APK-DOT",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 dot", "SC-APK-DOT")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 policy <package>",
      name: "SC-APK-POLICY",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 policy <package>", "SC-APK-POLICY")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 stats",
      name: "SC-APK-STATS",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 stats", "SC-APK-STATS")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 manifest",
      name: "SC-APK-MANIFEST",
      prefix: "SC-APK",
      booleans: ["print-arch","no-cache","force","u","update","U","update-cache","q","quiet","no-progress"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apk", "SC-APK")
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
          .command("$0 manifest", "SC-APK-MANIFEST")
          .option("print-arch", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("u", {"alias":"update","type":"boolean"})
          .option("U", {"alias":"update-cache","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-progress", {"type":"boolean"})
          .option("X", {"alias":"repository","type":"array"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
  ]
};