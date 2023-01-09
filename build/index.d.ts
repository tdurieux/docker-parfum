export { RULES, BINNACLE_RULES } from "./rules";
export * as rules from "./rules";
export * as hadoling_rules from "./hadolint_rules";
export { HADOLING_RULES } from "./hadolint_rules";
export { Violation, Matcher } from "./rule-matcher";
export declare function parseAndMatch(dockerfile: string): Promise<import("./rule-matcher").Violation[]>;
