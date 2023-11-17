import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["poetry"],
  categories: ["PACKAGE_MANAGEMENT"],
  prefix: "SC-POETRY",
  scenarios: [
    {
      cmd: "$0 build",
      name: "SC-POETRY-BUILD",
      categories: ["BUILD_PACKAGES"],
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 build", "SC-POETRY-BUILD")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 check",
      name: "SC-POETRY-CHECK",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 check", "SC-POETRY-CHECK")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 config",
      name: "SC-POETRY-CONFIG",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 config", "SC-POETRY-CONFIG")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 debug",
      name: "SC-POETRY-DEBUG",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 debug", "SC-POETRY-DEBUG")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 env",
      name: "SC-POETRY-ENV",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 env", "SC-POETRY-ENV")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 export",
      name: "SC-POETRY-EXPORT",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 export", "SC-POETRY-EXPORT")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 help",
      name: "SC-POETRY-HELP",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 help", "SC-POETRY-HELP")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 init",
      name: "SC-POETRY-INIT",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 init", "SC-POETRY-INIT")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 install",
      name: "SC-POETRY-INSTALL",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 install", "SC-POETRY-INSTALL")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 lock",
      name: "SC-POETRY-LOCK",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 lock", "SC-POETRY-LOCK")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 publish",
      name: "SC-POETRY-PUBLISH",
      categories: ["DEPLOY_PACKAGES"],
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 publish", "SC-POETRY-PUBLISH")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 remove",
      name: "SC-POETRY-REMOVE",
      categories: ["UNINSTALL_PACKAGES"],
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 remove", "SC-POETRY-REMOVE")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 run",
      name: "SC-POETRY-RUN",
      categories: ["RUN_PACKAGES"],
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 run", "SC-POETRY-RUN")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 search",
      name: "SC-POETRY-SEARCH",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 search", "SC-POETRY-SEARCH")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 shell",
      name: "SC-POETRY-SHELL",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 shell", "SC-POETRY-SHELL")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 show",
      name: "SC-POETRY-SHOW",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 show", "SC-POETRY-SHOW")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 update",
      name: "SC-POETRY-UPDATE",
      categories: ["UPDATE_PACKAGES"],
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 update", "SC-POETRY-UPDATE")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
    {
      cmd: "$0 version",
      name: "SC-POETRY-VERSION",
      prefix: "SC-POETRY",
      paths: ["c","directory"],
      booleans: ["h","help","q","quiet","n","no-interaction","no-plugins","no-cache"],
      counts: ["v","verbose"],
      argv: () => {
        return (yargs() as Argv)
          .describe("poetry", "SC-POETRY")
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
          .command("$0 version", "SC-POETRY-VERSION")
          .option("h", {"alias":"help","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("n", {"alias":"no-interaction","type":"boolean"})
          .option("no-plugins", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("c", {"alias":"directory","type":"string"})
          .option("v", {"alias":"verbose","type":"count"})
      }
    },
  ]
};