import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["go"],
  categories: ["BUILD_SYSTEM","DEVELOPMENT"],
  prefix: "SC-GO",
  scenarios: [
    {
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 get [packages...]",
      name: "SC-GO-GET",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-GO",
      paths: ["o"],
      booleans: ["i","a","n","race","msan","v","work","x","linkshared","c","d","f","t","u","v","fix","insecure"],
      counts: [],
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 get [packages...]", "SC-GO-GET")
          .option("i", {"type":"boolean"})
          .option("a", {"type":"boolean"})
          .option("n", {"type":"boolean"})
          .option("race", {"type":"boolean"})
          .option("msan", {"type":"boolean"})
          .option("v", {"type":"boolean"})
          .option("work", {"type":"boolean"})
          .option("x", {"type":"boolean"})
          .option("linkshared", {"type":"boolean"})
          .option("c", {"type":"boolean"})
          .option("d", {"type":"boolean"})
          .option("f", {"type":"boolean"})
          .option("t", {"type":"boolean"})
          .option("u", {"type":"boolean"})
          .option("v", {"type":"boolean"})
          .option("fix", {"type":"boolean"})
          .option("insecure", {"type":"boolean"})
          .option("asmflags", {"type":"string"})
          .option("buildmode", {"type":"string"})
          .option("compiler", {"type":"string"})
          .option("gccgoflags", {"type":"string"})
          .option("gcflags", {"type":"string"})
          .option("installsuffix", {"type":"string"})
          .option("ldflags", {"type":"string"})
          .option("mod", {"type":"string"})
          .option("pkgdir", {"type":"string"})
          .option("tags", {"type":"string"})
          .option("toolexec", {"type":"string"})
          .option("exec", {"type":"string"})
          .option("o", {"type":"string"})
      }
    },
    {
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 vet",
      name: "SC-GO-VET",
      prefix: "SC-GO",
      booleans: ["all"],
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 vet", "SC-GO-VET")
          .option("all", {"type":"boolean"})
      }
    },
    {
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 fmt",
      name: "SC-GO-FMT",
      prefix: "SC-GO",
      booleans: ["n","x"],
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 fmt", "SC-GO-FMT")
          .option("n", {"type":"boolean"})
          .option("x", {"type":"boolean"})
      }
    },
    {
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 version",
      name: "SC-GO-VERSION",
      prefix: "SC-GO",
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 version", "SC-GO-VERSION")
      }
    },
    {
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 install [packages...]",
      name: "SC-GO-INSTALL",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-GO",
      paths: ["o"],
      booleans: ["i","a","n","race","msan","v","work","x","linkshared","c"],
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 install [packages...]", "SC-GO-INSTALL")
          .option("i", {"type":"boolean"})
          .option("a", {"type":"boolean"})
          .option("n", {"type":"boolean"})
          .option("race", {"type":"boolean"})
          .option("msan", {"type":"boolean"})
          .option("v", {"type":"boolean"})
          .option("work", {"type":"boolean"})
          .option("x", {"type":"boolean"})
          .option("linkshared", {"type":"boolean"})
          .option("c", {"type":"boolean"})
          .option("asmflags", {"type":"string"})
          .option("buildmode", {"type":"string"})
          .option("compiler", {"type":"string"})
          .option("gccgoflags", {"type":"string"})
          .option("gcflags", {"type":"string"})
          .option("installsuffix", {"type":"string"})
          .option("ldflags", {"type":"string"})
          .option("mod", {"type":"string"})
          .option("pkgdir", {"type":"string"})
          .option("tags", {"type":"string"})
          .option("toolexec", {"type":"string"})
          .option("exec", {"type":"string"})
          .option("o", {"type":"string"})
      }
    },
    {
      captureAllAfter: {"match":["--args"],"name":"args"},
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 test [packages...]",
      name: "SC-GO-TEST",
      categories: ["TEST_PACKAGES"],
      prefix: "SC-GO",
      paths: ["o"],
      booleans: ["i","a","n","race","msan","v","work","x","linkshared","c"],
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 test [packages...]", "SC-GO-TEST")
          .option("i", {"type":"boolean"})
          .option("a", {"type":"boolean"})
          .option("n", {"type":"boolean"})
          .option("race", {"type":"boolean"})
          .option("msan", {"type":"boolean"})
          .option("v", {"type":"boolean"})
          .option("work", {"type":"boolean"})
          .option("x", {"type":"boolean"})
          .option("linkshared", {"type":"boolean"})
          .option("c", {"type":"boolean"})
          .option("asmflags", {"type":"string"})
          .option("buildmode", {"type":"string"})
          .option("compiler", {"type":"string"})
          .option("gccgoflags", {"type":"string"})
          .option("gcflags", {"type":"string"})
          .option("installsuffix", {"type":"string"})
          .option("ldflags", {"type":"string"})
          .option("mod", {"type":"string"})
          .option("pkgdir", {"type":"string"})
          .option("tags", {"type":"string"})
          .option("toolexec", {"type":"string"})
          .option("exec", {"type":"string"})
          .option("o", {"type":"string"})
      }
    },
    {
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 clean",
      name: "SC-GO-CLEAN",
      prefix: "SC-GO",
      booleans: ["cache"],
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 clean", "SC-GO-CLEAN")
          .option("cache", {"type":"boolean"})
      }
    },
    {
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 build [packages...]",
      name: "SC-GO-BUILD",
      categories: ["BUILD_PACKAGES"],
      prefix: "SC-GO",
      paths: ["o"],
      booleans: ["i","a","n","race","msan","v","work","x","linkshared","c"],
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 build [packages...]", "SC-GO-BUILD")
          .option("i", {"type":"boolean"})
          .option("a", {"type":"boolean"})
          .option("n", {"type":"boolean"})
          .option("race", {"type":"boolean"})
          .option("msan", {"type":"boolean"})
          .option("v", {"type":"boolean"})
          .option("work", {"type":"boolean"})
          .option("x", {"type":"boolean"})
          .option("linkshared", {"type":"boolean"})
          .option("c", {"type":"boolean"})
          .option("asmflags", {"type":"string"})
          .option("buildmode", {"type":"string"})
          .option("compiler", {"type":"string"})
          .option("gccgoflags", {"type":"string"})
          .option("gcflags", {"type":"string"})
          .option("installsuffix", {"type":"string"})
          .option("ldflags", {"type":"string"})
          .option("mod", {"type":"string"})
          .option("pkgdir", {"type":"string"})
          .option("tags", {"type":"string"})
          .option("toolexec", {"type":"string"})
          .option("exec", {"type":"string"})
          .option("o", {"type":"string"})
      }
    },
    {
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 mod [arg]",
      name: "SC-GO-MOD",
      prefix: "SC-GO",
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 mod [arg]", "SC-GO-MOD")
      }
    },
    {
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 env [arg]",
      name: "SC-GO-ENV",
      categories: ["ENVIRONMENT"],
      prefix: "SC-GO",
      booleans: ["json"],
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 env [arg]", "SC-GO-ENV")
          .option("json", {"type":"boolean"})
      }
    },
    {
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 generate [path]",
      name: "SC-GO-GENERATE",
      prefix: "SC-GO",
      booleans: ["n","v","x"],
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 generate [path]", "SC-GO-GENERATE")
          .option("n", {"type":"boolean"})
          .option("v", {"type":"boolean"})
          .option("x", {"type":"boolean"})
      }
    },
    {
      fixBadLongNames: ["-race","-msan","-work","-asmflags","-buildmode","-compiler","-gccgoflags","-gcflags","-installsuffix","-ldflags","-mod","-pkgdir","-tags","-toolexec","-fix","-insecure","-json","-exec","-all","-args","-cache"],
      fixupNonSpacedArgs: true,
      cmd: "$0 list [path]",
      name: "SC-GO-LIST",
      prefix: "SC-GO",
      argv: () => {
        return (yargs() as Argv)
          .describe("go", "SC-GO")
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
          .command("$0 list [path]", "SC-GO-LIST")
      }
    },
  ]
};