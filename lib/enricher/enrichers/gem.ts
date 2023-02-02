import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["gem"],
  prefix: "SC-GEM",
  scenarios: [
    {
      cmd: "$0 install [gems...]",
      name: "SC-GEM-INSTALL",
      prefix: "SC-GEM",
      paths: ["i","install-dir","n","bindir","g","file","config-file","build-root"],
      booleans: ["h","help","V","verbose","no-verbose","q","quiet","silent","backtrace","debug","norc","l","local","r","remote","b","both","clear-source","no-http-proxy","no-lock","no-suggestions","lock","suggestions","default","post-install-message","no-post-install-message","minimal-deps","conservative","development","development-all","user-install","no-user-install","ignore-dependencies","f","force","no-force","w","wrappers","no-wrappers","vendor","N","no-document","E","env-shebang","no-env-shebang","u","update-sources","no-update-sources","prerelease","no-prerelease","no-ri","no-rdoc","system"],
      argv: () => {
        return (yargs() as Argv)
          .describe("gem", "SC-GEM")
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
          .command("$0 install [gems...]", "SC-GEM-INSTALL")
          .option("h", {"alias":"help","type":"boolean"})
          .option("V", {"alias":"verbose","type":"boolean"})
          .option("no-verbose", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("silent", {"type":"boolean"})
          .option("backtrace", {"type":"boolean"})
          .option("debug", {"type":"boolean"})
          .option("norc", {"type":"boolean"})
          .option("l", {"alias":"local","type":"boolean"})
          .option("r", {"alias":"remote","type":"boolean"})
          .option("b", {"alias":"both","type":"boolean"})
          .option("clear-source", {"type":"boolean"})
          .option("no-http-proxy", {"type":"boolean"})
          .option("no-lock", {"type":"boolean"})
          .option("no-suggestions", {"type":"boolean"})
          .option("lock", {"type":"boolean"})
          .option("suggestions", {"type":"boolean"})
          .option("default", {"type":"boolean"})
          .option("post-install-message", {"type":"boolean"})
          .option("no-post-install-message", {"type":"boolean"})
          .option("minimal-deps", {"type":"boolean"})
          .option("conservative", {"type":"boolean"})
          .option("development", {"type":"boolean"})
          .option("development-all", {"type":"boolean"})
          .option("user-install", {"type":"boolean"})
          .option("no-user-install", {"type":"boolean"})
          .option("ignore-dependencies", {"type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("no-force", {"type":"boolean"})
          .option("w", {"alias":"wrappers","type":"boolean"})
          .option("no-wrappers", {"type":"boolean"})
          .option("vendor", {"type":"boolean"})
          .option("N", {"alias":"no-document","type":"boolean"})
          .option("E", {"alias":"env-shebang","type":"boolean"})
          .option("no-env-shebang", {"type":"boolean"})
          .option("u", {"alias":"update-sources","type":"boolean"})
          .option("no-update-sources", {"type":"boolean"})
          .option("prerelease", {"type":"boolean"})
          .option("no-prerelease", {"type":"boolean"})
          .option("no-ri", {"type":"boolean"})
          .option("no-rdoc", {"type":"boolean"})
          .option("system", {"type":"boolean"})
          .option("platform", {"type":"string"})
          .option("P", {"alias":"trust-policy","type":"string"})
          .option("s", {"alias":"source","type":"string"})
          .option("p", {"alias":"http-proxy","type":"string"})
          .option("i", {"alias":"install-dir","type":"string"})
          .option("n", {"alias":"bindir","type":"string"})
          .option("g", {"alias":"file","type":"string"})
          .option("config-file", {"type":"string"})
          .option("build-root", {"type":"string"})
          .option("v", {"alias":"version","type":"array"})
          .option("document", {"type":"array"})
      }
    },
    {
      cmd: "$0 update [gems...]",
      name: "SC-GEM-UPDATE",
      prefix: "SC-GEM",
      paths: ["i","install-dir","n","bindir","g","file","config-file","build-root"],
      booleans: ["h","help","V","verbose","no-verbose","q","quiet","silent","backtrace","debug","norc","l","local","r","remote","b","both","clear-source","no-http-proxy","no-lock","no-suggestions","lock","suggestions","default","post-install-message","no-post-install-message","minimal-deps","conservative","development","development-all","user-install","no-user-install","ignore-dependencies","f","force","no-force","w","wrappers","no-wrappers","vendor","N","no-document","E","env-shebang","no-env-shebang","u","update-sources","no-update-sources","prerelease","no-prerelease","no-ri","no-rdoc","system"],
      argv: () => {
        return (yargs() as Argv)
          .describe("gem", "SC-GEM")
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
          .command("$0 update [gems...]", "SC-GEM-UPDATE")
          .option("h", {"alias":"help","type":"boolean"})
          .option("V", {"alias":"verbose","type":"boolean"})
          .option("no-verbose", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("silent", {"type":"boolean"})
          .option("backtrace", {"type":"boolean"})
          .option("debug", {"type":"boolean"})
          .option("norc", {"type":"boolean"})
          .option("l", {"alias":"local","type":"boolean"})
          .option("r", {"alias":"remote","type":"boolean"})
          .option("b", {"alias":"both","type":"boolean"})
          .option("clear-source", {"type":"boolean"})
          .option("no-http-proxy", {"type":"boolean"})
          .option("no-lock", {"type":"boolean"})
          .option("no-suggestions", {"type":"boolean"})
          .option("lock", {"type":"boolean"})
          .option("suggestions", {"type":"boolean"})
          .option("default", {"type":"boolean"})
          .option("post-install-message", {"type":"boolean"})
          .option("no-post-install-message", {"type":"boolean"})
          .option("minimal-deps", {"type":"boolean"})
          .option("conservative", {"type":"boolean"})
          .option("development", {"type":"boolean"})
          .option("development-all", {"type":"boolean"})
          .option("user-install", {"type":"boolean"})
          .option("no-user-install", {"type":"boolean"})
          .option("ignore-dependencies", {"type":"boolean"})
          .option("f", {"alias":"force","type":"boolean"})
          .option("no-force", {"type":"boolean"})
          .option("w", {"alias":"wrappers","type":"boolean"})
          .option("no-wrappers", {"type":"boolean"})
          .option("vendor", {"type":"boolean"})
          .option("N", {"alias":"no-document","type":"boolean"})
          .option("E", {"alias":"env-shebang","type":"boolean"})
          .option("no-env-shebang", {"type":"boolean"})
          .option("u", {"alias":"update-sources","type":"boolean"})
          .option("no-update-sources", {"type":"boolean"})
          .option("prerelease", {"type":"boolean"})
          .option("no-prerelease", {"type":"boolean"})
          .option("no-ri", {"type":"boolean"})
          .option("no-rdoc", {"type":"boolean"})
          .option("system", {"type":"boolean"})
          .option("platform", {"type":"string"})
          .option("P", {"alias":"trust-policy","type":"string"})
          .option("s", {"alias":"source","type":"string"})
          .option("p", {"alias":"http-proxy","type":"string"})
          .option("i", {"alias":"install-dir","type":"string"})
          .option("n", {"alias":"bindir","type":"string"})
          .option("g", {"alias":"file","type":"string"})
          .option("config-file", {"type":"string"})
          .option("build-root", {"type":"string"})
          .option("v", {"alias":"version","type":"array"})
          .option("document", {"type":"array"})
      }
    },
    {
      cmd: "$0 cleanup",
      name: "SC-GEM-CLEAN",
      prefix: "SC-GEM",
      argv: () => {
        return (yargs() as Argv)
          .describe("gem", "SC-GEM")
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
          .command("$0 cleanup", "SC-GEM-CLEAN")
      }
    },
    {
      cmd: "$0 list",
      name: "SC-GEM-LIST",
      prefix: "SC-GEM",
      argv: () => {
        return (yargs() as Argv)
          .describe("gem", "SC-GEM")
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
          .command("$0 list", "SC-GEM-LIST")
      }
    },
    {
      cmd: "$0 build <path>",
      name: "SC-GEM-BUILD",
      prefix: "SC-GEM",
      paths: ["o","output","config-file"],
      booleans: ["h","help","V","verbose","no-verbose","q","quiet","silent","backtrace","debug","norc","force","strict"],
      argv: () => {
        return (yargs() as Argv)
          .describe("gem", "SC-GEM")
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
          .command("$0 build <path>", "SC-GEM-BUILD")
          .option("h", {"alias":"help","type":"boolean"})
          .option("V", {"alias":"verbose","type":"boolean"})
          .option("no-verbose", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("silent", {"type":"boolean"})
          .option("backtrace", {"type":"boolean"})
          .option("debug", {"type":"boolean"})
          .option("norc", {"type":"boolean"})
          .option("force", {"type":"boolean"})
          .option("strict", {"type":"boolean"})
          .option("o", {"alias":"output","type":"string"})
          .option("config-file", {"type":"string"})
      }
    },
  ]
};