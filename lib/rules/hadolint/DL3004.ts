import {
  BashCommand,
  BashCommandCommand,
  BashWord,
  DockerLiteral,
  Q,
} from "@tdurieux/dinghy";
import { Rule } from "..";

export default {
  scope: "INTRA-DIRECTIVE",
  name: "DL3004",
  description: `Do not use sudo as it leads to unpredictable behavior. Use a tool like gosu to enforce root.`,
  query: Q(BashCommandCommand, Q(BashWord, Q(DockerLiteral, "sudo"))),
  consequent: {},
  source: "https://github.com/hadolint/hadolint/wiki/DL3004",
  repair: async (node) => {
    const cmd = node.parent as BashCommand;
    if (!cmd.getChild(BashCommand).semicolon) {
      cmd.getChild(BashCommand).semicolon = cmd.semicolon;
    }
    cmd.replace(cmd.getChild(BashCommand));
  },
} as Rule;
