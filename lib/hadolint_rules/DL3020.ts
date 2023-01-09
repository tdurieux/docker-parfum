import { nodeType } from "@tdurieux/dinghy";
import { Rule } from "../rules";

export default {
  scope: "INTRA-DIRECTIVE",
  name: "DL3020",
  description: `Use COPY instead of ADD for files and folders.`,
  query: nodeType.Q(nodeType.DockerAdd),
  consequent: {
    inNode: nodeType.Q("ABS-EXTENSION-TAR"),
  },
  source: "https://github.com/hadolint/hadolint/wiki/DL3020",
  repair: async (node) => {
    node.getChild(nodeType.DockerKeyword).value = "COPY";
  },
} as Rule;
