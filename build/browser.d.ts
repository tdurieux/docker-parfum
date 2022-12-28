export { RULES } from "./rules";
export * as rules from "./rules";
export { Violation, Matcher } from "./rule-matcher";
export * as dinghy from "@tdurieux/dinghy";
export * as enricher from "dinghy-enricher";
export declare function parseAndMatch(dockerfile: string): Promise<import("./rule-matcher").Violation[]>;
