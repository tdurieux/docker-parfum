import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        captureAfterFirstNonOption: string;
        postProcess: {
            subCommand: string;
        }[];
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<import("yargs").Omit<{
            A: boolean;
        } & {
            b: boolean;
        } & {
            E: boolean;
        } & {
            e: boolean;
        } & {
            H: boolean;
        } & {
            h: boolean;
        } & {
            i: boolean;
        } & {
            K: boolean;
        } & {
            k: boolean;
        } & {
            l: boolean;
        } & {
            n: boolean;
        } & {
            P: boolean;
        } & {
            S: boolean;
        } & {
            s: boolean;
        } & {
            V: boolean;
        } & {
            v: boolean;
        } & {
            C: string;
        } & {
            g: string;
        }, "h"> & {
            h: string;
        } & {
            p: string;
        } & {
            r: string;
        } & {
            U: string;
        } & {
            u: string;
        }>;
    }[];
};
export default _default;
