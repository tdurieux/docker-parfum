export { PARFUM_RULES, BINNACLE_RULES, HADOLINT_RULES } from "./rules";
export { Violation, Matcher } from "./rule-matcher";
export declare function parseAndMatch(dockerfile: string): Promise<import("./rule-matcher").Violation[]>;
