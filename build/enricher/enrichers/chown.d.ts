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
        paths: string[];
        booleans: string[];
        argv: () => Argv<import("yargs").Omit<{
            c: boolean;
        } & {
            f: boolean;
        }, "f"> & {
            f: boolean;
        } & {
            v: boolean;
        } & {
            dereference: boolean;
        } & {
            h: boolean;
        } & {
            "no-preserve-root": boolean;
        } & {
            "preserve-root": boolean;
        } & {
            R: boolean;
        } & {
            H: boolean;
        } & {
            L: boolean;
        } & {
            P: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            from: string;
        } & {
            reference: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<import("yargs").Omit<{
            c: boolean;
        } & {
            f: boolean;
        }, "f"> & {
            f: boolean;
        } & {
            v: boolean;
        } & {
            dereference: boolean;
        } & {
            h: boolean;
        } & {
            "no-preserve-root": boolean;
        } & {
            "preserve-root": boolean;
        } & {
            R: boolean;
        } & {
            H: boolean;
        } & {
            L: boolean;
        } & {
            P: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            from: string;
        } & {
            reference: string;
        }>;
        mustHave?: undefined;
    })[];
};
export default _default;
