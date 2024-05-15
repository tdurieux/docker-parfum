import { BashCommandArgs, BashLiteral, BashWord, Q } from "@tdurieux/dinghy";
import { Rule } from "..";

export default {
  scope: "INTRA-DIRECTIVE",
  name: "DL3046",
  description: `Without the -l or the --no-log-init flag, useradd will add the user to the lastlog and faillog databases..`,
  query: Q("SC-USER-ADD"),
  source: "https://github.com/hadolint/hadolint/wiki/DL3046",
  consequent: {
    inNode: Q("SC-USER-ADD-F-NO-LOG-INIT"),
  },
  repair: async (node) => {
    node.addChild(
      new BashCommandArgs()
        .setPosition(node.children[1].position)
        .addChild(new BashWord().addChild(new BashLiteral("--no-log-init")))
    );
  },
} as Rule;
