import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["dotnet"],
  categories: ["BUILD_SYSTEM"],
  prefix: "SC-DOTNET",
  scenarios: [
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 build [options...]",
      name: "SC-DOTNET-BUILD",
      categories: ["BUILD_PACKAGES"],
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 build [options...]", "SC-DOTNET-BUILD")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 build-server [options...]",
      name: "SC-DOTNET-BUID-SERVER",
      categories: ["BUILD_PACKAGES"],
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 build-server [options...]", "SC-DOTNET-BUID-SERVER")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 clean [options...]",
      name: "SC-DOTNET-CLEAN",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 clean [options...]", "SC-DOTNET-CLEAN")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 exec [options...]",
      name: "SC-DOTNET-exec",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 exec [options...]", "SC-DOTNET-exec")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 help [options...]",
      name: "SC-DOTNET-help",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 help [options...]", "SC-DOTNET-help")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 migrate [options...]",
      name: "SC-DOTNET-migrate",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 migrate [options...]", "SC-DOTNET-migrate")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 msbuild [options...]",
      name: "SC-DOTNET-msbuild",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 msbuild [options...]", "SC-DOTNET-msbuild")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 new [options...]",
      name: "SC-DOTNET-new",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 new [options...]", "SC-DOTNET-new")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 pack [options...]",
      name: "SC-DOTNET-pack",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 pack [options...]", "SC-DOTNET-pack")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 publish [options...]",
      name: "SC-DOTNET-publish",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 publish [options...]", "SC-DOTNET-publish")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 restore [options...]",
      name: "SC-DOTNET-restore",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 restore [options...]", "SC-DOTNET-restore")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 run [options...]",
      name: "SC-DOTNET-run",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 run [options...]", "SC-DOTNET-run")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 sdk check [options...]",
      name: "SC-DOTNET-sdk check",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 sdk check [options...]", "SC-DOTNET-sdk check")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 sln [options...]",
      name: "SC-DOTNET-sln",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 sln [options...]", "SC-DOTNET-sln")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 store [options...]",
      name: "SC-DOTNET-store",
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 store [options...]", "SC-DOTNET-store")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 test [options...]",
      name: "SC-DOTNET-test",
      categories: ["TEST_PACKAGES"],
      prefix: "SC-DOTNET",
      booleans: ["help","version"],
      argv: () => {
        return (yargs() as Argv)
          .describe("dotnet", "SC-DOTNET")
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
          .command("$0 test [options...]", "SC-DOTNET-test")
          .option("help", {"type":"boolean"})
          .option("version", {"type":"boolean"})
      }
    },
  ]
};