"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["yarn"],
    categories: ["PACKAGE_MANAGEMENT"],
    prefix: "SC-YARN",
    scenarios: [
        {
            cmd: "$0 add [modules...]",
            name: "SC-YARN-ADD",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-YARN",
            paths: ["cache-folder"],
            booleans: ["verbose", "help", "D", "dev", "P", "peer", "O", "optional", "E", "exact", "T", "tilde", "N", "ignore-workspace-root-check", "audit"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 add [modules...]", "SC-YARN-ADD")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("D", { "alias": "dev", "type": "boolean" })
                    .option("P", { "alias": "peer", "type": "boolean" })
                    .option("O", { "alias": "optional", "type": "boolean" })
                    .option("E", { "alias": "exact", "type": "boolean" })
                    .option("T", { "alias": "tilde", "type": "boolean" })
                    .option("N", { "alias": "ignore-workspace-root-check", "type": "boolean" })
                    .option("audit", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("cache-folder", { "type": "string" });
            }
        },
        {
            cmd: "$0 audit",
            name: "SC-YARN-AUDIT",
            categories: ["AUDIT_PACKAGES"],
            prefix: "SC-YARN",
            paths: ["cache-folder"],
            booleans: ["verbose", "help", "verbose", "json"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 audit", "SC-YARN-AUDIT")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("verbose", { "type": "boolean" })
                    .option("json", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("cache-folder", { "type": "string" });
            }
        },
        {
            cmd: "$0 autoclean",
            name: "SC-YARN-AUTO-CLEAN",
            prefix: "SC-YARN",
            paths: ["cache-folder"],
            booleans: ["verbose", "help", "I", "init", "F", "force"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 autoclean", "SC-YARN-AUTO-CLEAN")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("I", { "alias": "init", "type": "boolean" })
                    .option("F", { "alias": "force", "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("cache-folder", { "type": "string" });
            }
        },
        {
            cmd: "$0 bin <executable>",
            name: "SC-YARN-BIN",
            prefix: "SC-YARN",
            paths: ["cache-folder"],
            booleans: ["verbose", "help"],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 bin <executable>", "SC-YARN-BIN")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("cache-folder", { "type": "string" });
            }
        },
        {
            cmd: "$0 lint",
            name: "SC-YARN-LINT",
            prefix: "SC-YARN",
            paths: ["cache-folder"],
            booleans: ["verbose", "help"],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 lint", "SC-YARN-LINT")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("cache-folder", { "type": "string" });
            }
        },
        {
            cmd: "$0 cache list",
            name: "SC-YARN-CACHE-LIST",
            prefix: "SC-YARN",
            paths: ["cache-folder"],
            booleans: ["verbose", "help"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 cache list", "SC-YARN-CACHE-LIST")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("pattern", { "type": "string" })
                    .option("cache-folder", { "type": "string" });
            }
        },
        {
            cmd: "$0 cache clean [modules...]",
            name: "SC-YARN-CACHE-CLEAN",
            prefix: "SC-YARN",
            paths: ["cache-folder"],
            booleans: ["verbose", "help"],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 cache clean [modules...]", "SC-YARN-CACHE-CLEAN")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("cache-folder", { "type": "string" });
            }
        },
        {
            cmd: "$0 cache dir",
            name: "SC-YARN-CACHE-DIR",
            prefix: "SC-YARN",
            paths: ["cache-folder"],
            booleans: ["verbose", "help"],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 cache dir", "SC-YARN-CACHE-DIR")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("cache-folder", { "type": "string" });
            }
        },
        {
            cmd: "$0 global add [modules...]",
            name: "SC-YARN-GLOBAL-ADD",
            prefix: "SC-YARN",
            paths: ["cache-folder"],
            booleans: ["verbose", "help", "D", "dev", "P", "peer", "O", "optional", "E", "exact", "T", "tilde", "N", "ignore-workspace-root-check", "audit"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 global add [modules...]", "SC-YARN-GLOBAL-ADD")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("D", { "alias": "dev", "type": "boolean" })
                    .option("P", { "alias": "peer", "type": "boolean" })
                    .option("O", { "alias": "optional", "type": "boolean" })
                    .option("E", { "alias": "exact", "type": "boolean" })
                    .option("T", { "alias": "tilde", "type": "boolean" })
                    .option("N", { "alias": "ignore-workspace-root-check", "type": "boolean" })
                    .option("audit", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("cache-folder", { "type": "string" });
            }
        },
        {
            cmd: "$0 install",
            name: "SC-YARN-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-YARN",
            paths: ["cache-folder", "modules-folder"],
            booleans: ["verbose", "help", "check-files", "flat", "force", "har", "ignore-scripts", "no-lockfile", "pure-lockfile", "focus", "frozen-lockfile", "silent", "ignore-engines", "ignore-optional", "offline", "non-interactive", "update-checksums", "audit", "no-bin-links", "link-duplicates"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 install", "SC-YARN-INSTALL")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("check-files", { "type": "boolean" })
                    .option("flat", { "type": "boolean" })
                    .option("force", { "type": "boolean" })
                    .option("har", { "type": "boolean" })
                    .option("ignore-scripts", { "type": "boolean" })
                    .option("no-lockfile", { "type": "boolean" })
                    .option("pure-lockfile", { "type": "boolean" })
                    .option("focus", { "type": "boolean" })
                    .option("frozen-lockfile", { "type": "boolean" })
                    .option("silent", { "type": "boolean" })
                    .option("ignore-engines", { "type": "boolean" })
                    .option("ignore-optional", { "type": "boolean" })
                    .option("offline", { "type": "boolean" })
                    .option("non-interactive", { "type": "boolean" })
                    .option("update-checksums", { "type": "boolean" })
                    .option("audit", { "type": "boolean" })
                    .option("no-bin-links", { "type": "boolean" })
                    .option("link-duplicates", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("prod", { "alias": "production", "type": "string" })
                    .option("cache-folder", { "type": "string" })
                    .option("modules-folder", { "type": "string" });
            }
        },
        {
            captureAfterThirdNonOption: "args",
            cmd: "$0 run <script>",
            name: "SC-YARN-RUN-SCRIPT",
            categories: ["RUN_PACKAGES"],
            prefix: "SC-YARN",
            paths: ["cache-folder"],
            booleans: ["verbose", "help"],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 run <script>", "SC-YARN-RUN-SCRIPT")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("cache-folder", { "type": "string" });
            }
        },
        {
            captureAfterSecondNonOption: "args",
            rejectIfIs: { "name": "script", "values": ["add", "audit", "autoclean", "bin", "cache", "check", "config", "create", "dedupe", "generate-lock-entry", "global", "help", "import", "info", "init", "install", "licenses", "link", "list", "lockfile", "login", "logout", "outdated", "owner", "pack", "policies", "prune", "publish", "remove", "run", "self-update", "tag", "team", "test", "unlink", "upgrade", "upgrade-interactive", "version", "versions", "why", "workspace", "workspaces"] },
            cmd: "$0 <script>",
            name: "SC-YARN-RUN-SCRIPT",
            categories: ["RUN_PACKAGES"],
            prefix: "SC-YARN",
            paths: ["cache-folder"],
            booleans: ["verbose", "help"],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0 <script>", "SC-YARN-RUN-SCRIPT")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("cache-folder", { "type": "string" });
            }
        },
        {
            rejectIf: ["install"],
            cmd: "$0",
            name: "SC-YARN-INSTALL",
            categories: ["INSTALL_PACKAGES"],
            prefix: "SC-YARN",
            paths: ["cache-folder", "modules-folder"],
            booleans: ["verbose", "help", "check-files", "flat", "force", "har", "ignore-scripts", "no-lockfile", "pure-lockfile", "focus", "frozen-lockfile", "silent", "ignore-engines", "ignore-optional", "offline", "non-interactive", "update-checksums", "audit", "no-bin-links", "link-duplicates"],
            counts: [],
            argv: function () {
                return yargs()
                    .describe("yarn", "SC-YARN")
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
                    .command("$0", "SC-YARN-INSTALL")
                    .option("verbose", { "type": "boolean" })
                    .option("help", { "type": "boolean" })
                    .option("check-files", { "type": "boolean" })
                    .option("flat", { "type": "boolean" })
                    .option("force", { "type": "boolean" })
                    .option("har", { "type": "boolean" })
                    .option("ignore-scripts", { "type": "boolean" })
                    .option("no-lockfile", { "type": "boolean" })
                    .option("pure-lockfile", { "type": "boolean" })
                    .option("focus", { "type": "boolean" })
                    .option("frozen-lockfile", { "type": "boolean" })
                    .option("silent", { "type": "boolean" })
                    .option("ignore-engines", { "type": "boolean" })
                    .option("ignore-optional", { "type": "boolean" })
                    .option("offline", { "type": "boolean" })
                    .option("non-interactive", { "type": "boolean" })
                    .option("update-checksums", { "type": "boolean" })
                    .option("audit", { "type": "boolean" })
                    .option("no-bin-links", { "type": "boolean" })
                    .option("link-duplicates", { "type": "boolean" })
                    .option("mutex", { "type": "string" })
                    .option("prod", { "alias": "production", "type": "string" })
                    .option("cache-folder", { "type": "string" })
                    .option("modules-folder", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=yarn.js.map