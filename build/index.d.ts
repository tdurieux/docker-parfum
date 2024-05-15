export { PARFUM_RULES, BINNACLE_RULES, HADOLINT_RULES } from "./rules";
export { Violation, Matcher } from "./rule-matcher";
export { enricher } from "@tdurieux/dinghy";
export declare function parseAndMatch(dockerfile: string): import("./rule-matcher").Violation[];
