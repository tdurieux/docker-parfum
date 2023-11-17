import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        strings: string[];
        counts: string[];
        argv: () => Argv<import("yargs").Omit<{
            q: boolean;
        } & {
            G: boolean;
        } & {
            S: boolean;
        } & {
            s: boolean;
        } & {
            v: boolean;
        } & {
            h: boolean;
        } & {
            "?": boolean;
        } & {
            d: string;
        } & {
            D: string;
        } & {
            y: string;
        } & {
            c: string;
        }, "v"> & {
            v: number;
        }>;
        categories?: undefined;
    } | {
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        paths: string[];
        booleans: string[];
        strings: string[];
        counts: string[];
        argv: () => Argv<import("yargs").Omit<{
            q: boolean;
        } & {
            G: boolean;
        } & {
            S: boolean;
        } & {
            s: boolean;
        } & {
            v: boolean;
        } & {
            h: boolean;
        } & {
            "?": boolean;
        } & {
            d: string;
        } & {
            D: string;
        } & {
            y: string;
        } & {
            c: string;
        }, "v"> & {
            v: number;
        }>;
    })[];
};
export default _default;
