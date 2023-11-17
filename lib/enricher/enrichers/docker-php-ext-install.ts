import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["docker-php-ext-install"],
  categories: ["PACKAGE_MANAGEMENT"],
  prefix: "SC-DPHP-EXT-INSTALL",
  scenarios: [
    {
      fixupNonSpacedArgs: true,
      cmd: "$0 [packages...]",
      name: "SC-DPHP-EXT-INSTALL",
      categories: ["INSTALL_PACKAGES"],
      prefix: "SC-DPHP-EXT-INSTALL",
      strings: ["j"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker-php-ext-install", "SC-DPHP-EXT-INSTALL")
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
          .command("$0 [packages...]", "SC-DPHP-EXT-INSTALL")
          .option("j", {"type":"string"})
      }
    },
  ]
};