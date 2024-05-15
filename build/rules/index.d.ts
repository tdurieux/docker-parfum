import { AllDockerNodes, QueryI } from "@tdurieux/dinghy";
export interface Rule {
    scope: "INTRA-DIRECTIVE" | "INTER-DIRECTIVE";
    name: string;
    description: string;
    notes?: string;
    source: string;
    query: QueryI;
    consequent: {
        inNode?: QueryI;
        beforeNode?: QueryI;
        afterNode?: QueryI;
    };
    repair: (node: AllDockerNodes) => Promise<void>;
}
export { rules as BINNACLE_RULES } from "./binnacle";
export { rules as HADOLINT_RULES } from "./hadolint";
export { rules as PARFUM_RULES } from "./parfum";
export declare const SIZE_RULES: Rule[];
export declare const ALL_RULES: Rule[];
