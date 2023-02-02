import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: {
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
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
    }[];
};
export default _default;
