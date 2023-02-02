import { nodeType } from "@tdurieux/dinghy";
import { Rule } from "..";

export default {
  scope: "INTRA-DIRECTIVE",
  name: "DL3002",
  description: `Switching to the root USER opens up certain security risks if an attacker gets access to the container. In order to mitigate this, switch back to a non privileged user after running the commands you need as root.`,
  query: nodeType.Q(
    nodeType.DockerUser,
    nodeType.Q(nodeType.DockerLiteral, "root")
  ),
  consequent: {
    afterNode: nodeType.Q(nodeType.DockerUser),
  },
  source: "https://github.com/hadolint/hadolint/wiki/DL3002",
  repair: async (violation) => {
    throw new Error("Not implemented");
  },
} as Rule;
