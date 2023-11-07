import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        mustHave: string[];
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            L: boolean;
        } & {
            "print-architecture": boolean;
        } & {
            "add-architecture": string;
        } & {
            x: string;
        } & {
            X: string;
        } & {
            i: (string | number)[];
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            L: boolean;
        } & {
            "print-architecture": boolean;
        } & {
            "add-architecture": string;
        } & {
            x: string;
        } & {
            X: string;
        } & {
            i: (string | number)[];
        }>;
        mustHave?: undefined;
    })[];
};
export default _default;
