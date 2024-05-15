import { AbstractNode, AllDockerNodes } from "@tdurieux/dinghy";
import { Rule } from "./rules";
export declare class Violation {
    readonly rule: Rule;
    readonly node: AbstractNode<AllDockerNodes>;
    constructor(rule: Rule, node: AbstractNode<AllDockerNodes>);
    repair(opt?: {
        clone: boolean;
    }): Promise<AbstractNode<AllDockerNodes>>;
    isStillValid(): boolean;
    toString(): string;
}
export declare class Matcher {
    private _root;
    constructor(root: AbstractNode<AllDockerNodes>, { toEnrich }?: {
        toEnrich: boolean;
    });
    get node(): AbstractNode<AllDockerNodes>;
    match(rule: Rule): Violation[];
    matchAll(rules?: Rule[]): Violation[];
}
