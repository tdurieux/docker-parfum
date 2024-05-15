import { DockerAdd, DockerKeyword, Q } from "@tdurieux/dinghy";
import { Rule } from "..";

export default {
  scope: "INTRA-DIRECTIVE",
  name: "DL3020",
  description: `Use COPY instead of ADD for files and folders.`,
  query: Q(DockerAdd),
  consequent: {
    inNode: Q("ABS-EXTENSION-TAR"),
  },
  source: "https://github.com/hadolint/hadolint/wiki/DL3020",
  repair: async (node) => {
    node.getChild(DockerKeyword).value = "COPY";
  },
} as Rule;
