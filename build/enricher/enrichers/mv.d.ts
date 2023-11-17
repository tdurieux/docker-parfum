import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        postProcess: {
            tagLastElement: {
                source: string;
                tag: string;
            };
        }[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            b: boolean;
        } & {
            f: boolean;
        } & {
            i: boolean;
        } & {
            n: boolean;
        } & {
            "strip-trailing-slashes": boolean;
        } & {
            u: boolean;
        } & {
            v: boolean;
        } & {
            version: boolean;
        } & {
            help: boolean;
        } & {
            T: boolean;
        } & {
            S: string;
        } & {
            t: string;
        }>;
    }[];
};
export default _default;
