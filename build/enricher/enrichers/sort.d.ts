import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: any[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<import("yargs").Omit<{
            c: boolean;
        } & {
            m: boolean;
        } & {
            u: boolean;
        } & {
            s: boolean;
        } & {
            version: boolean;
        } & {
            help: boolean;
        } & {
            b: boolean;
        } & {
            d: boolean;
        } & {
            f: boolean;
        } & {
            g: boolean;
        } & {
            h: boolean;
        } & {
            i: boolean;
        } & {
            M: boolean;
        } & {
            n: boolean;
        } & {
            R: boolean;
        } & {
            r: boolean;
        } & {
            V: boolean;
        }, "b"> & {
            b: boolean;
        } & {
            z: boolean;
        } & {
            debug: boolean;
        } & {
            parallel: boolean;
        } & {
            radixsort: boolean;
        } & {
            mergesort: boolean;
        } & {
            qsort: boolean;
        } & {
            heapsort: boolean;
        } & {
            mmap: boolean;
        } & {
            o: string;
        } & {
            S: string;
        } & {
            t: string;
        } & {
            T: string;
        } & {
            k: string;
        } & {
            sort: string;
        } & {
            "files0-from=filename": string;
        } & {
            "batch-size": string;
        } & {
            "compress-program": string;
        } & {
            "random-source": string;
        }>;
    }[];
};
export default _default;
