import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["apt-get"],
  categories: ["PACKAGE_MANAGEMENT"],
  prefix: "SC-APT",
  scenarios: [
    {
      cmd: "$0 install [packages...]",
      name: "SC-APT-INSTALL",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes","d","download-only","no-download","upgrade","only-upgrade","just-print","dry-run","recon","no-act","assume-yes","u","show-upgraded","V","verbose-version","b","compile","build","ignore-hold","no-upgrade","no-install-suggests","install-suggests","print-uris","reinstall","list-cleanup","trivial-only","no-remove","only-source"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 install [packages...]", "SC-APT-INSTALL")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("d", {"alias":"download-only","type":"boolean"})
          .option("no-download", {"type":"boolean"})
          .option("upgrade", {"type":"boolean"})
          .option("only-upgrade", {"type":"boolean"})
          .option("just-print", {"type":"boolean"})
          .option("dry-run", {"type":"boolean"})
          .option("recon", {"type":"boolean"})
          .option("no-act", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("V", {"alias":"verbose-version","type":"boolean"})
          .option("b", {"alias":"compile","type":"boolean"})
          .option("build", {"type":"boolean"})
          .option("ignore-hold", {"type":"boolean"})
          .option("no-upgrade", {"type":"boolean"})
          .option("no-install-suggests", {"type":"boolean"})
          .option("install-suggests", {"type":"boolean"})
          .option("print-uris", {"type":"boolean"})
          .option("reinstall", {"type":"boolean"})
          .option("list-cleanup", {"type":"boolean"})
          .option("trivial-only", {"type":"boolean"})
          .option("no-remove", {"type":"boolean"})
          .option("only-source", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
    {
      cmd: "$0 purge [packages...]",
      name: "SC-APT-PURGE",
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 purge [packages...]", "SC-APT-PURGE")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
    {
      cmd: "$0 remove [packages...]",
      name: "SC-APT-REMOVE",
      categories: ["UNINSTALL_PACKAGES"],
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 remove [packages...]", "SC-APT-REMOVE")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
    {
      cmd: "$0 source <package>",
      name: "SC-APT-SOURCE",
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 source <package>", "SC-APT-SOURCE")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
    {
      cmd: "$0 build-dep [packages...]",
      name: "SC-APT-BUILD-DEP",
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 build-dep [packages...]", "SC-APT-BUILD-DEP")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
    {
      cmd: "$0 clean",
      name: "SC-APT-CLEAN",
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 clean", "SC-APT-CLEAN")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
    {
      cmd: "$0 autoclean",
      name: "SC-APT-AUTO-CLEAN",
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 autoclean", "SC-APT-AUTO-CLEAN")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
    {
      cmd: "$0 autoremove [packages...]",
      name: "SC-APT-AUTO-REMOVE",
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 autoremove [packages...]", "SC-APT-AUTO-REMOVE")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
    {
      cmd: "$0 check",
      name: "SC-APT-CHECK",
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 check", "SC-APT-CHECK")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
    {
      cmd: "$0 update",
      name: "SC-APT-UPDATE",
      categories: ["UPDATE_PACKAGES"],
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 update", "SC-APT-UPDATE")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
    {
      cmd: "$0 upgrade [packages...]",
      name: "SC-APT-UPGRADE",
      categories: ["UPGRADE_PACKAGES"],
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 upgrade [packages...]", "SC-APT-UPGRADE")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
    {
      cmd: "$0 dist-upgrade",
      name: "SC-APT-DIST-UPGRADE",
      categories: ["UPGRADE_PACKAGES"],
      prefix: "SC-APT",
      paths: ["C","config"],
      booleans: ["y","yes","f","fix-broken","m","ignore-missing","fix-missing","allow-unauthenticated","allow-downgrades","allow-remove-essential","allow-change-held-packages","s","simulate","u","show-upgraded","no-install-recommends","h","help","v","version","purge","auto-remove","autoremove","force-yes","assume-yes"],
      strings: ["o","option"],
      counts: ["q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("apt-get", "SC-APT")
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
          .command("$0 dist-upgrade", "SC-APT-DIST-UPGRADE")
          .option("y", {"alias":"yes","type":"boolean"})
          .option("f", {"alias":"fix-broken","type":"boolean"})
          .option("m", {"alias":"ignore-missing","type":"boolean"})
          .option("fix-missing", {"type":"boolean"})
          .option("allow-unauthenticated", {"type":"boolean"})
          .option("allow-downgrades", {"type":"boolean"})
          .option("allow-remove-essential", {"type":"boolean"})
          .option("allow-change-held-packages", {"type":"boolean"})
          .option("s", {"alias":"simulate","type":"boolean"})
          .option("u", {"alias":"show-upgraded","type":"boolean"})
          .option("no-install-recommends", {"type":"boolean"})
          .option("h", {"alias":"help","type":"boolean"})
          .option("v", {"alias":"version","type":"boolean"})
          .option("purge", {"type":"boolean"})
          .option("auto-remove", {"type":"boolean"})
          .option("autoremove", {"type":"boolean"})
          .option("force-yes", {"type":"boolean"})
          .option("assume-yes", {"type":"boolean"})
          .option("o", {"alias":"option","type":"string"})
          .option("C", {"alias":"config","type":"string"})
          .option("q", {"alias":"quiet","type":"count"})
      }
    },
  ]
};