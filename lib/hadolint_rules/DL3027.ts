import { nodeType } from "@tdurieux/dinghy";
import { Rule } from "../rules";

export default {
  scope: "INTRA-DIRECTIVE",
  name: "DL3027",
  description: `apt is discouraged by the linux distributions as an unattended tool as its interface may suffer changes between versions. Better use the more stable apt-get and apt-cache`,
  query: nodeType.Q(
    nodeType.BashCommandCommand,
    nodeType.Q(nodeType.BashWord, nodeType.Q(nodeType.DockerLiteral, "apt"))
  ),
  consequent: {},
  source: "https://github.com/hadolint/hadolint/wiki/DL3027",
  repair: async (node) => {
    node.getElement(nodeType.BashLiteral).value = "apt-get";
  },
} as Rule;
