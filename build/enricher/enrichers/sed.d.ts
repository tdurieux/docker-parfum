import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: ({
        rejectIf: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<import("yargs").Omit<import("yargs").Omit<{
            i: boolean;
        } & {
            posix: boolean;
        } & {
            n: boolean;
        }, "n"> & {
            n: boolean;
        } & {
            s: boolean;
        } & {
            sandbox: boolean;
        } & {
            u: boolean;
        } & {
            z: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            E: boolean;
        }, "E"> & {
            E: boolean;
        } & {
            f: string;
        } & {
            e: (string | number)[];
        }>;
        stealFromArrayFor?: undefined;
        mustHave?: undefined;
    } | {
        stealFromArrayFor: {
            array: string;
            for: string;
        };
        mustHave: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<import("yargs").Omit<import("yargs").Omit<{
            i: boolean;
        } & {
            posix: boolean;
        } & {
            n: boolean;
        }, "n"> & {
            n: boolean;
        } & {
            s: boolean;
        } & {
            sandbox: boolean;
        } & {
            u: boolean;
        } & {
            z: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            E: boolean;
        }, "E"> & {
            E: boolean;
        } & {
            f: string;
        } & {
            e: (string | number)[];
        }>;
        rejectIf?: undefined;
    } | {
        mustHave: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<import("yargs").Omit<import("yargs").Omit<{
            i: boolean;
        } & {
            posix: boolean;
        } & {
            n: boolean;
        }, "n"> & {
            n: boolean;
        } & {
            s: boolean;
        } & {
            sandbox: boolean;
        } & {
            u: boolean;
        } & {
            z: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            E: boolean;
        }, "E"> & {
            E: boolean;
        } & {
            f: string;
        } & {
            e: (string | number)[];
        }>;
        rejectIf?: undefined;
        stealFromArrayFor?: undefined;
    })[];
};
export default _default;
