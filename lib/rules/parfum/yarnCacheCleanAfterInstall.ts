import { nodeType, parseShell } from "@tdurieux/dinghy";
import { postFixWith } from "../utils";
import { Rule } from "..";

/**
 * Running \`npm cache clean\` after \`npm install\` in a Dockerfile can help to reduce the size of the image and ensure that the latest version of packages are installed.
 * @example
 * // bad
 * RUN yarn install
 * // good
 * RUN yarn install && yarn cache clean --force
 */
export default {
  scope: "INTRA-DIRECTIVE",
  name: "yarnCacheCleanAfterInstall",
  description: `yarn keeps a local cache of downloaded packages. This unnecessarily increases image size. It can be cleared by executing yarn cache clean.`,
  query: nodeType.Q("SC-YARN-INSTALL"),
  consequent: {
    afterNode: nodeType.Q("SC-YARN-CACHE-CLEAN"),
  },
  source: "https://github.com/hadolint/hadolint/wiki/DL3060",
  repair: async (violation) => {
    postFixWith(violation, await parseShell("yarn cache clean;"));
  },
} as Rule;
