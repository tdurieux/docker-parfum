import { nodeType } from "@tdurieux/dinghy";
import { Rule } from "../rules";

export default {
  scope: "INTRA-DIRECTIVE",
  name: "DL3029",
  description: `Specifying --platform= in the docker file FROM clause forces the Image to build only one target platform.`,
  query: nodeType.Q(
    nodeType.DockerFlag,
    nodeType.Q(nodeType.DockerName, "platform")
  ),
  source: "https://github.com/hadolint/hadolint/wiki/DL3029",
  consequent: {},
  repair: async (node) => {
    node.remove();
  },
} as Rule;
