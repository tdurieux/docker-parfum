import { nodeType } from "@tdurieux/dinghy";
export interface Rule {
    scope: "INTRA-DIRECTIVE" | "INTER-DIRECTIVE";
    name: string;
    description: string;
    notes?: string;
    source: string;
    query: nodeType.QueryI;
    consequent: {
        inNode?: nodeType.QueryI;
        beforeNode?: nodeType.QueryI;
        afterNode?: nodeType.QueryI;
    };
    repair: (node: nodeType.DockerOpsNodeType) => Promise<void>;
}
export { rules as BINNACLE_RULES } from "./binnacle";
export { rules as HADOLINT_RULES } from "./hadolint";
export { rules as PARFUM_RULES } from "./parfum";
export declare const ALL_RULES: Rule[];
