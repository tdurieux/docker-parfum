import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<import("yargs").Omit<{
            R: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            "no-preserve-root": boolean;
        } & {
            v: boolean;
        } & {
            f: boolean;
        }, "f"> & {
            f: boolean;
        } & {
            c: boolean;
        } & {
            "preserve-root": boolean;
        } & {
            reference: string;
        }>;
        mustHave?: undefined;
    } | {
        mustHave: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<import("yargs").Omit<{
            R: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            "no-preserve-root": boolean;
        } & {
            v: boolean;
        } & {
            f: boolean;
        }, "f"> & {
            f: boolean;
        } & {
            c: boolean;
        } & {
            "preserve-root": boolean;
        } & {
            reference: string;
        }>;
    })[];
};
export default _default;
