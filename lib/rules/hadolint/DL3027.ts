import {
  BashCommandCommand,
  BashLiteral,
  BashWord,
  DockerLiteral,
  Q,
} from "@tdurieux/dinghy";
import { Rule } from "..";

export default {
  scope: "INTRA-DIRECTIVE",
  name: "DL3027",
  description: `apt is discouraged by the linux distributions as an unattended tool as its interface may suffer changes between versions. Better use the more stable apt-get and apt-cache`,
  query: Q(BashCommandCommand, Q(BashWord, Q(DockerLiteral, "apt"))),
  consequent: {},
  source: "https://github.com/hadolint/hadolint/wiki/DL3027",
  repair: async (node) => {
    node.getElement(BashLiteral).value = "apt-get";
  },
} as Rule;
