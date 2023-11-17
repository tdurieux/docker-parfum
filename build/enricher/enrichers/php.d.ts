import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        captureAllAfter: {
            match: string[];
            name: string;
        };
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            a: boolean;
        } & {
            C: boolean;
        } & {
            q: boolean;
        } & {
            n: boolean;
        } & {
            e: boolean;
        } & {
            h: boolean;
        } & {
            H: boolean;
        } & {
            i: boolean;
        } & {
            L: boolean;
        } & {
            m: boolean;
        } & {
            s: boolean;
        } & {
            v: boolean;
        } & {
            w: boolean;
        } & {
            b: string;
        } & {
            T: string;
        } & {
            g: string;
        } & {
            r: string;
        } & {
            B: string;
        } & {
            R: string;
        } & {
            E: string;
        } & {
            f: string;
        } & {
            F: string;
        } & {
            c: string;
        } & {
            z: string;
        } & {
            d: (string | number)[];
        }>;
    }[];
};
export default _default;
