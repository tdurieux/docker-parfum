import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["pip","pip2","pip3"],
  categories: ["PACKAGE_MANAGEMENT"],
  prefix: "SC-PIP",
  scenarios: [
    {
      cmd: "$0 install [targets...]",
      name: "SC-PIP-INSTALL",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-PIP",
      paths: ["log","cert","client-cert","cache-dir","c","constraint","r","requirements","b","build","t","target","d","download","src","root","prefix"],
      booleans: ["h","help","isolated","v","verbose","V","version","q","quiet","no-cache-dir","disable-pip-version-check","U","upgrade","force-reinstall","I","ignore-installed","ignore-requires-python","no-deps","user","system","egg","compile","no-compile","no-use-wheel","pre","no-clean","require-hashes","no-index","process-dependency-links"],
      strings: ["proxy","retries","timeout","exists-action","trusted-host","i","index-url","e","editable","upgrade-strategy","no-binary","only-binary","f","find-links"],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("pip,pip2,pip3", "SC-PIP")
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
          .command("$0 install [targets...]", "SC-PIP-INSTALL")
          .option("h", {"alias":"help","type":"boolean"})
          .option("isolated", {"type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("V", {"alias":"version","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-cache-dir", {"type":"boolean"})
          .option("disable-pip-version-check", {"type":"boolean"})
          .option("U", {"alias":"upgrade","type":"boolean"})
          .option("force-reinstall", {"type":"boolean"})
          .option("I", {"alias":"ignore-installed","type":"boolean"})
          .option("ignore-requires-python", {"type":"boolean"})
          .option("no-deps", {"type":"boolean"})
          .option("user", {"type":"boolean"})
          .option("system", {"type":"boolean"})
          .option("egg", {"type":"boolean"})
          .option("compile", {"type":"boolean"})
          .option("no-compile", {"type":"boolean"})
          .option("no-use-wheel", {"type":"boolean"})
          .option("pre", {"type":"boolean"})
          .option("no-clean", {"type":"boolean"})
          .option("require-hashes", {"type":"boolean"})
          .option("no-index", {"type":"boolean"})
          .option("process-dependency-links", {"type":"boolean"})
          .option("proxy", {"type":"string"})
          .option("retries", {"type":"string"})
          .option("timeout", {"type":"string"})
          .option("exists-action", {"type":"string"})
          .option("trusted-host", {"type":"string"})
          .option("i", {"alias":"index-url","type":"string"})
          .option("e", {"alias":"editable","type":"string"})
          .option("upgrade-strategy", {"type":"string"})
          .option("no-binary", {"type":"string"})
          .option("only-binary", {"type":"string"})
          .option("f", {"alias":"find-links","type":"string"})
          .option("log", {"type":"string"})
          .option("cert", {"type":"string"})
          .option("client-cert", {"type":"string"})
          .option("cache-dir", {"type":"string"})
          .option("c", {"alias":"constraint","type":"string"})
          .option("r", {"alias":"requirements","type":"string"})
          .option("b", {"alias":"build","type":"string"})
          .option("t", {"alias":"target","type":"string"})
          .option("d", {"alias":"download","type":"string"})
          .option("src", {"type":"string"})
          .option("root", {"type":"string"})
          .option("prefix", {"type":"string"})
          .option("extra-index-url", {"type":"array"})
          .option("install-option", {"type":"array"})
          .option("global-option", {"type":"array"})
      }
    },
    {
      cmd: "$0 uninstall [targets...]",
      name: "SC-PIP-UNINSTALL",
      categories: ["UNINSTALL_PACKAGES"],
      prefix: "SC-PIP",
      paths: ["log","cert","client-cert","cache-dir","r","requirements"],
      booleans: ["h","help","isolated","v","verbose","V","version","q","quiet","no-cache-dir","disable-pip-version-check","y","yes"],
      strings: ["proxy","retries","timeout","exists-action","trusted-host"],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("pip,pip2,pip3", "SC-PIP")
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
          .command("$0 uninstall [targets...]", "SC-PIP-UNINSTALL")
          .option("h", {"alias":"help","type":"boolean"})
          .option("isolated", {"type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("V", {"alias":"version","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-cache-dir", {"type":"boolean"})
          .option("disable-pip-version-check", {"type":"boolean"})
          .option("y", {"alias":"yes","type":"boolean"})
          .option("proxy", {"type":"string"})
          .option("retries", {"type":"string"})
          .option("timeout", {"type":"string"})
          .option("exists-action", {"type":"string"})
          .option("trusted-host", {"type":"string"})
          .option("log", {"type":"string"})
          .option("cert", {"type":"string"})
          .option("client-cert", {"type":"string"})
          .option("cache-dir", {"type":"string"})
          .option("r", {"alias":"requirements","type":"string"})
      }
    },
    {
      cmd: "$0 freeze",
      name: "SC-PIP-FREEZE",
      prefix: "SC-PIP",
      paths: ["log","cert","client-cert","cache-dir"],
      booleans: ["h","help","isolated","v","verbose","V","version","q","quiet","no-cache-dir","disable-pip-version-check"],
      strings: ["proxy","retries","timeout","exists-action","trusted-host"],
      argv: () => {
        return (yargs() as Argv)
          .describe("pip,pip2,pip3", "SC-PIP")
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
          .command("$0 freeze", "SC-PIP-FREEZE")
          .option("h", {"alias":"help","type":"boolean"})
          .option("isolated", {"type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("V", {"alias":"version","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-cache-dir", {"type":"boolean"})
          .option("disable-pip-version-check", {"type":"boolean"})
          .option("proxy", {"type":"string"})
          .option("retries", {"type":"string"})
          .option("timeout", {"type":"string"})
          .option("exists-action", {"type":"string"})
          .option("trusted-host", {"type":"string"})
          .option("log", {"type":"string"})
          .option("cert", {"type":"string"})
          .option("client-cert", {"type":"string"})
          .option("cache-dir", {"type":"string"})
      }
    },
    {
      cmd: "$0",
      name: "SC-PIP",
      prefix: "SC-PIP",
      paths: ["log","cert","client-cert","cache-dir"],
      booleans: ["h","help","isolated","v","verbose","V","version","q","quiet","no-cache-dir","disable-pip-version-check"],
      strings: ["proxy","retries","timeout","exists-action","trusted-host"],
      argv: () => {
        return (yargs() as Argv)
          .describe("pip,pip2,pip3", "SC-PIP")
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
          .command("$0", "SC-PIP")
          .option("h", {"alias":"help","type":"boolean"})
          .option("isolated", {"type":"boolean"})
          .option("v", {"alias":"verbose","type":"boolean"})
          .option("V", {"alias":"version","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("no-cache-dir", {"type":"boolean"})
          .option("disable-pip-version-check", {"type":"boolean"})
          .option("proxy", {"type":"string"})
          .option("retries", {"type":"string"})
          .option("timeout", {"type":"string"})
          .option("exists-action", {"type":"string"})
          .option("trusted-host", {"type":"string"})
          .option("log", {"type":"string"})
          .option("cert", {"type":"string"})
          .option("client-cert", {"type":"string"})
          .option("cache-dir", {"type":"string"})
      }
    },
  ]
};