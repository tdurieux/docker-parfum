import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["npm"],
  categories: ["PACKAGE_MANAGEMENT"],
  prefix: "SC-NPM",
  scenarios: [
    {
      cmd: "$0 install [packages...]",
      name: "SC-NPM-INSTALL",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-NPM",
      paths: ["nodedir"],
      booleans: ["P","save-prod","D","save-dev","O","save-optional","no-save","E","save-exact","B","save-bundle","dry-run","package-lock-only","f","force","g","global","global-style","ignore-scripts","legacy-bundling","link","no-bin-links","no-optional","no-shrinkwrap","no-package-lock","no-audit","no-color","save","production","unsafe-perm"],
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 install [packages...]", "SC-NPM-INSTALL")
          .option("P", {"alias":"save-prod","type":"boolean"})
          .option("D", {"alias":"save-dev","type":"boolean"})
          .option("O", {"alias":"save-optional","type":"boolean"})
          .option("no-save", {"type":"boolean"})
          .option("E", {"alias":"save-exact","type":"boolean"})
          .option("B", {"alias":"save-bundle","type":"boolean"})
          .option("dry-run", {"type":"boolean"})
          .option("package-lock-only", {"type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("g", {"alias":"global","type":"boolean"})
          .option("global-style", {"type":"boolean"})
          .option("ignore-scripts", {"type":"boolean"})
          .option("legacy-bundling", {"type":"boolean"})
          .option("link", {"type":"boolean"})
          .option("no-bin-links", {"type":"boolean"})
          .option("no-optional", {"type":"boolean"})
          .option("no-shrinkwrap", {"type":"boolean"})
          .option("no-package-lock", {"type":"boolean"})
          .option("no-audit", {"type":"boolean"})
          .option("no-color", {"type":"boolean"})
          .option("save", {"type":"boolean"})
          .option("production", {"type":"boolean"})
          .option("unsafe-perm", {"type":"boolean"})
          .option("only", {"type":"string"})
          .option("tag", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("nodedir", {"type":"string"})
      }
    },
    {
      cmd: "$0 i [packages...]",
      name: "SC-NPM-INSTALL",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-NPM",
      paths: ["nodedir"],
      booleans: ["P","save-prod","D","save-dev","O","save-optional","no-save","E","save-exact","B","save-bundle","dry-run","package-lock-only","f","force","g","global","global-style","ignore-scripts","legacy-bundling","link","no-bin-links","no-optional","no-shrinkwrap","no-package-lock","no-audit","no-color","save","production","unsafe-perm"],
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 i [packages...]", "SC-NPM-INSTALL")
          .option("P", {"alias":"save-prod","type":"boolean"})
          .option("D", {"alias":"save-dev","type":"boolean"})
          .option("O", {"alias":"save-optional","type":"boolean"})
          .option("no-save", {"type":"boolean"})
          .option("E", {"alias":"save-exact","type":"boolean"})
          .option("B", {"alias":"save-bundle","type":"boolean"})
          .option("dry-run", {"type":"boolean"})
          .option("package-lock-only", {"type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("g", {"alias":"global","type":"boolean"})
          .option("global-style", {"type":"boolean"})
          .option("ignore-scripts", {"type":"boolean"})
          .option("legacy-bundling", {"type":"boolean"})
          .option("link", {"type":"boolean"})
          .option("no-bin-links", {"type":"boolean"})
          .option("no-optional", {"type":"boolean"})
          .option("no-shrinkwrap", {"type":"boolean"})
          .option("no-package-lock", {"type":"boolean"})
          .option("no-audit", {"type":"boolean"})
          .option("no-color", {"type":"boolean"})
          .option("save", {"type":"boolean"})
          .option("production", {"type":"boolean"})
          .option("unsafe-perm", {"type":"boolean"})
          .option("only", {"type":"string"})
          .option("tag", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("nodedir", {"type":"string"})
      }
    },
    {
      cmd: "$0 add [packages...]",
      name: "SC-NPM-INSTALL",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-NPM",
      paths: ["nodedir"],
      booleans: ["P","save-prod","D","save-dev","O","save-optional","no-save","E","save-exact","B","save-bundle","dry-run","package-lock-only","f","force","g","global","global-style","ignore-scripts","legacy-bundling","link","no-bin-links","no-optional","no-shrinkwrap","no-package-lock","no-audit","no-color","save","production","unsafe-perm"],
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 add [packages...]", "SC-NPM-INSTALL")
          .option("P", {"alias":"save-prod","type":"boolean"})
          .option("D", {"alias":"save-dev","type":"boolean"})
          .option("O", {"alias":"save-optional","type":"boolean"})
          .option("no-save", {"type":"boolean"})
          .option("E", {"alias":"save-exact","type":"boolean"})
          .option("B", {"alias":"save-bundle","type":"boolean"})
          .option("dry-run", {"type":"boolean"})
          .option("package-lock-only", {"type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("g", {"alias":"global","type":"boolean"})
          .option("global-style", {"type":"boolean"})
          .option("ignore-scripts", {"type":"boolean"})
          .option("legacy-bundling", {"type":"boolean"})
          .option("link", {"type":"boolean"})
          .option("no-bin-links", {"type":"boolean"})
          .option("no-optional", {"type":"boolean"})
          .option("no-shrinkwrap", {"type":"boolean"})
          .option("no-package-lock", {"type":"boolean"})
          .option("no-audit", {"type":"boolean"})
          .option("no-color", {"type":"boolean"})
          .option("save", {"type":"boolean"})
          .option("production", {"type":"boolean"})
          .option("unsafe-perm", {"type":"boolean"})
          .option("only", {"type":"string"})
          .option("tag", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("nodedir", {"type":"string"})
      }
    },
    {
      cmd: "$0 ci",
      name: "SC-NPM-CI",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-NPM",
      paths: ["nodedir"],
      booleans: ["P","save-prod","D","save-dev","O","save-optional","no-save","E","save-exact","B","save-bundle","dry-run","package-lock-only","f","force","g","global","global-style","ignore-scripts","legacy-bundling","link","no-bin-links","no-optional","no-shrinkwrap","no-package-lock","no-audit","no-color","save","production","unsafe-perm"],
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 ci", "SC-NPM-CI")
          .option("P", {"alias":"save-prod","type":"boolean"})
          .option("D", {"alias":"save-dev","type":"boolean"})
          .option("O", {"alias":"save-optional","type":"boolean"})
          .option("no-save", {"type":"boolean"})
          .option("E", {"alias":"save-exact","type":"boolean"})
          .option("B", {"alias":"save-bundle","type":"boolean"})
          .option("dry-run", {"type":"boolean"})
          .option("package-lock-only", {"type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("g", {"alias":"global","type":"boolean"})
          .option("global-style", {"type":"boolean"})
          .option("ignore-scripts", {"type":"boolean"})
          .option("legacy-bundling", {"type":"boolean"})
          .option("link", {"type":"boolean"})
          .option("no-bin-links", {"type":"boolean"})
          .option("no-optional", {"type":"boolean"})
          .option("no-shrinkwrap", {"type":"boolean"})
          .option("no-package-lock", {"type":"boolean"})
          .option("no-audit", {"type":"boolean"})
          .option("no-color", {"type":"boolean"})
          .option("save", {"type":"boolean"})
          .option("production", {"type":"boolean"})
          .option("unsafe-perm", {"type":"boolean"})
          .option("only", {"type":"string"})
          .option("tag", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("nodedir", {"type":"string"})
      }
    },
    {
      cmd: "$0 uninstall [packages...]",
      name: "SC-NPM-REMOVE",
      categories: ["UNINSTALL_PACKAGES"],
      prefix: "SC-NPM",
      paths: ["nodedir"],
      booleans: ["P","save-prod","D","save-dev","O","save-optional","no-save","E","save-exact","B","save-bundle","dry-run","package-lock-only","f","force","g","global","global-style","ignore-scripts","legacy-bundling","link","no-bin-links","no-optional","no-shrinkwrap","no-package-lock","no-audit","no-color","save","production","unsafe-perm"],
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 uninstall [packages...]", "SC-NPM-REMOVE")
          .option("P", {"alias":"save-prod","type":"boolean"})
          .option("D", {"alias":"save-dev","type":"boolean"})
          .option("O", {"alias":"save-optional","type":"boolean"})
          .option("no-save", {"type":"boolean"})
          .option("E", {"alias":"save-exact","type":"boolean"})
          .option("B", {"alias":"save-bundle","type":"boolean"})
          .option("dry-run", {"type":"boolean"})
          .option("package-lock-only", {"type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("g", {"alias":"global","type":"boolean"})
          .option("global-style", {"type":"boolean"})
          .option("ignore-scripts", {"type":"boolean"})
          .option("legacy-bundling", {"type":"boolean"})
          .option("link", {"type":"boolean"})
          .option("no-bin-links", {"type":"boolean"})
          .option("no-optional", {"type":"boolean"})
          .option("no-shrinkwrap", {"type":"boolean"})
          .option("no-package-lock", {"type":"boolean"})
          .option("no-audit", {"type":"boolean"})
          .option("no-color", {"type":"boolean"})
          .option("save", {"type":"boolean"})
          .option("production", {"type":"boolean"})
          .option("unsafe-perm", {"type":"boolean"})
          .option("only", {"type":"string"})
          .option("tag", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("nodedir", {"type":"string"})
      }
    },
    {
      cmd: "$0 remove [packages...]",
      name: "SC-NPM-REMOVE",
      categories: ["UNINSTALL_PACKAGES"],
      prefix: "SC-NPM",
      paths: ["nodedir"],
      booleans: ["P","save-prod","D","save-dev","O","save-optional","no-save","E","save-exact","B","save-bundle","dry-run","package-lock-only","f","force","g","global","global-style","ignore-scripts","legacy-bundling","link","no-bin-links","no-optional","no-shrinkwrap","no-package-lock","no-audit","no-color","save","production","unsafe-perm"],
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 remove [packages...]", "SC-NPM-REMOVE")
          .option("P", {"alias":"save-prod","type":"boolean"})
          .option("D", {"alias":"save-dev","type":"boolean"})
          .option("O", {"alias":"save-optional","type":"boolean"})
          .option("no-save", {"type":"boolean"})
          .option("E", {"alias":"save-exact","type":"boolean"})
          .option("B", {"alias":"save-bundle","type":"boolean"})
          .option("dry-run", {"type":"boolean"})
          .option("package-lock-only", {"type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("g", {"alias":"global","type":"boolean"})
          .option("global-style", {"type":"boolean"})
          .option("ignore-scripts", {"type":"boolean"})
          .option("legacy-bundling", {"type":"boolean"})
          .option("link", {"type":"boolean"})
          .option("no-bin-links", {"type":"boolean"})
          .option("no-optional", {"type":"boolean"})
          .option("no-shrinkwrap", {"type":"boolean"})
          .option("no-package-lock", {"type":"boolean"})
          .option("no-audit", {"type":"boolean"})
          .option("no-color", {"type":"boolean"})
          .option("save", {"type":"boolean"})
          .option("production", {"type":"boolean"})
          .option("unsafe-perm", {"type":"boolean"})
          .option("only", {"type":"string"})
          .option("tag", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("nodedir", {"type":"string"})
      }
    },
    {
      cmd: "$0 build [folder]",
      name: "SC-NPM-BUILD",
      categories: ["BUILD_PACKAGES"],
      prefix: "SC-NPM",
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 build [folder]", "SC-NPM-BUILD")
      }
    },
    {
      cmd: "$0 TEST [args...]",
      name: "SC-NPM-TEST",
      categories: ["TEST_PACKAGES"],
      prefix: "SC-NPM",
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 TEST [args...]", "SC-NPM-TEST")
      }
    },
    {
      cmd: "$0 run build [args...]",
      name: "SC-NPM-RUN-BUILD",
      categories: ["BUILD_PACKAGES"],
      prefix: "SC-NPM",
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 run build [args...]", "SC-NPM-RUN-BUILD")
      }
    },
    {
      cmd: "$0 run [args...]",
      name: "SC-NPM-RUN",
      categories: ["RUN_PACKAGES"],
      prefix: "SC-NPM",
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 run [args...]", "SC-NPM-RUN")
      }
    },
    {
      cmd: "$0 run-script [args...]",
      name: "SC-NPM-RUN-SCRIPT",
      categories: ["RUN_PACKAGES"],
      prefix: "SC-NPM",
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 run-script [args...]", "SC-NPM-RUN-SCRIPT")
      }
    },
    {
      cmd: "$0 cache clean",
      name: "SC-NPM-CACHE-CLEAN",
      prefix: "SC-NPM",
      booleans: ["force"],
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 cache clean", "SC-NPM-CACHE-CLEAN")
          .option("force", {"type":"boolean"})
      }
    },
    {
      cmd: "$0 cache rm",
      name: "SC-NPM-CACHE-CLEAN",
      prefix: "SC-NPM",
      booleans: ["force"],
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 cache rm", "SC-NPM-CACHE-CLEAN")
          .option("force", {"type":"boolean"})
      }
    },
    {
      cmd: "$0 cache clear",
      name: "SC-NPM-CACHE-CLEAN",
      prefix: "SC-NPM",
      booleans: ["force"],
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 cache clear", "SC-NPM-CACHE-CLEAN")
          .option("force", {"type":"boolean"})
      }
    },
    {
      cmd: "$0 config set <key> <value>",
      name: "SC-NPM-CONFIG-SET",
      prefix: "SC-NPM",
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 config set <key> <value>", "SC-NPM-CONFIG-SET")
      }
    },
    {
      cmd: "$0 config set <combined>",
      name: "SC-NPM-CONFIG-SET",
      prefix: "SC-NPM",
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 config set <combined>", "SC-NPM-CONFIG-SET")
      }
    },
    {
      cmd: "$0 link",
      name: "SC-NPM-LINK",
      prefix: "SC-NPM",
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 link", "SC-NPM-LINK")
      }
    },
    {
      cmd: "$0 prune [packages...]",
      name: "SC-NPM-PRUNE",
      categories: ["UNINSTALL_PACKAGES"],
      prefix: "SC-NPM",
      booleans: ["production","json","dry-run"],
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0 prune [packages...]", "SC-NPM-PRUNE")
          .option("production", {"type":"boolean"})
          .option("json", {"type":"boolean"})
          .option("dry-run", {"type":"boolean"})
      }
    },
    {
      cmd: "$0",
      name: "SC-NPM",
      prefix: "SC-NPM",
      booleans: ["help","v","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("npm", "SC-NPM")
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
          .command("$0", "SC-NPM")
          .option("help", {"type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
      }
    },
  ]
};