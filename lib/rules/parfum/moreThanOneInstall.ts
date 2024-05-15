import { Q } from "@tdurieux/dinghy";
import { Rule } from "..";

/**
 * All apt-get install should group into one.
 * @example
 * // bad
 * RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
 * RUN apt-get install -y --no-install-recommends wget
 * // good
 * RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates wget
 */
export default {
  scope: "INTER-DIRECTIVE",
  name: "ruleMoreThanOneInstall",
  description: "All apt-get install should group into one.",
  source: "IMPLICIT --- slow down the build",
  query: Q("ANY", Q("SC-APT-INSTALL"), Q("SC-APT-INSTALL")),
  consequent: {},
  repair: async (violation) => {
    throw new Error("Not implemented");
  },
} as Rule;
