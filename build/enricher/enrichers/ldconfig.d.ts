import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: any[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        strings: string[];
        argv: () => Argv<import("yargs").Omit<{
            i: boolean;
        } & {
            l: boolean;
        } & {
            n: boolean;
        } & {
            N: boolean;
        } & {
            p: boolean;
        } & {
            v: boolean;
        } & {
            X: boolean;
        } & {
            "?": boolean;
        }, "?"> & {
            "?": boolean;
        } & {
            V: boolean;
        } & {
            c: string;
        } & {
            r: string;
        } & {
            C: string;
        } & {
            f: string;
        }>;
    }[];
};
export default _default;
