export { RULES } from "./rules";
export * as rules from "./rules";
export { Violation, Matcher } from "./rule-matcher";
export declare function parseAndMatch(dockerfile: string): Promise<import("./rule-matcher").Violation[]>;
