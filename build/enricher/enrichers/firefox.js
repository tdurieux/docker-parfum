"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs/yargs");
exports.default = {
    providerFor: ["firefox"],
    categories: ["BROWSER"],
    prefix: "SC-FIREFOX",
    scenarios: [
        {
            fixBadLongNames: ["-installer", "-version", "-ProfileWizard", "-ProfileManager", "-SelectProfile", "-splash", "-jsconsole", "-height", "-width", "-CreateProfile", "-P", "-lang", "-remote", "-chrome"],
            cmd: "$0 <url>",
            name: "SC-FIREFOX",
            prefix: "SC-FIREFOX",
            booleans: ["sync", "no-xshm", "g-fatal-warnings", "h", "help", "installer", "v", "version", "ProfileWizard", "ProfileManager", "SelectProfile", "splash", "jsconsole"],
            argv: function () {
                return yargs()
                    .describe("firefox", "SC-FIREFOX")
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
                    .command("$0 <url>", "SC-FIREFOX")
                    .option("sync", { "type": "boolean" })
                    .option("no-xshm", { "type": "boolean" })
                    .option("g-fatal-warnings", { "type": "boolean" })
                    .option("h", { "alias": "help", "type": "boolean" })
                    .option("installer", { "type": "boolean" })
                    .option("v", { "alias": "version", "type": "boolean" })
                    .option("ProfileWizard", { "type": "boolean" })
                    .option("ProfileManager", { "type": "boolean" })
                    .option("SelectProfile", { "type": "boolean" })
                    .option("splash", { "type": "boolean" })
                    .option("jsconsole", { "type": "boolean" })
                    .option("gdk-debug", { "type": "string" })
                    .option("gdk-no-debug", { "type": "string" })
                    .option("gtk-debug", { "type": "string" })
                    .option("gtk-no-debug", { "type": "string" })
                    .option("gtk-module", { "type": "string" })
                    .option("display", { "type": "string" })
                    .option("xim-preedit", { "type": "string" })
                    .option("xim-status", { "type": "string" })
                    .option("height", { "type": "string" })
                    .option("width", { "type": "string" })
                    .option("CreateProfile", { "type": "string" })
                    .option("P", { "type": "string" })
                    .option("lang", { "type": "string" })
                    .option("remote", { "type": "string" })
                    .option("chrome", { "type": "string" });
            }
        },
    ]
};
//# sourceMappingURL=firefox.js.map