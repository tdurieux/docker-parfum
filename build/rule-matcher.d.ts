import { nodeType } from "@tdurieux/dinghy";
import { Rule } from "./rules";
export declare class Violation {
    readonly rule: Rule;
    readonly node: nodeType.DockerOpsNodeType;
    constructor(rule: Rule, node: nodeType.DockerOpsNodeType);
    repair(opt?: {
        clone: boolean;
    }): Promise<nodeType.DockerOpsNodeType>;
    isStillValid(): boolean;
    toString(): string;
}
export declare class Matcher {
    private _root;
    constructor(root: nodeType.DockerOpsNodeType, { toEnrich }?: {
        toEnrich: boolean;
    });
    get node(): nodeType.DockerOpsNodeType;
    match(rule: Rule): Violation[];
    matchAll(): Violation[];
}
