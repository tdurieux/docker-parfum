import { nodeType } from "@tdurieux/dinghy";
import { Rule } from "..";
import { BashWord } from "@tdurieux/dinghy/build/docker-type";

export default {
  scope: "INTRA-DIRECTIVE",
  name: "DL3004",
  description: `Do not use sudo as it leads to unpredictable behavior. Use a tool like gosu to enforce root.`,
  query: nodeType.Q(
    nodeType.BashCommandCommand,
    nodeType.Q(BashWord, nodeType.Q(nodeType.DockerLiteral, "sudo"))
  ),
  consequent: {},
  source: "https://github.com/hadolint/hadolint/wiki/DL3004",
  repair: async (node) => {
    const cmd = node.parent;
    cmd.replace(cmd.getChild(nodeType.BashCommand));
  },
} as Rule;
