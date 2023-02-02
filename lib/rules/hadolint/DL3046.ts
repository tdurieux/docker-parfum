import { nodeType } from "@tdurieux/dinghy";
import { Rule } from "..";

export default {
  scope: "INTRA-DIRECTIVE",
  name: "DL3046",
  description: `Without the -l or the --no-log-init flag, useradd will add the user to the lastlog and faillog databases..`,
  query: nodeType.Q("SC-USER-ADD"),
  source: "https://github.com/hadolint/hadolint/wiki/DL3046",
  consequent: {
    inNode: nodeType.Q("SC-USER-ADD-F-NO-LOG-INIT"),
  },
  repair: async (node) => {
    node.addChild(
      new nodeType.BashCommandArgs()
        .setPosition(node.children[1].position)
        .addChild(
          new nodeType.BashWord().addChild(
            new nodeType.BashLiteral("--no-log-init")
          )
        )
    );
  },
} as Rule;
