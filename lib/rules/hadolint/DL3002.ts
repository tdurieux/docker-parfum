import { DockerLiteral, DockerUser, Q } from "@tdurieux/dinghy";
import { Rule } from "..";

export default {
  scope: "INTRA-DIRECTIVE",
  name: "DL3002",
  description: `Switching to the root USER opens up certain security risks if an attacker gets access to the container. In order to mitigate this, switch back to a non privileged user after running the commands you need as root.`,
  query: Q(DockerUser, Q(DockerLiteral, "root")),
  consequent: {
    afterNode: Q(DockerUser),
  },
  source: "https://github.com/hadolint/hadolint/wiki/DL3002",
  repair: async (violation) => {
    throw new Error("Not implemented");
  },
} as Rule;
