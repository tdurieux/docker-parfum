import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            l: boolean;
        } & {
            L: boolean;
        } & {
            s: boolean;
        } & {
            u: boolean;
        } & {
            "?": boolean;
        } & {
            version: boolean;
        } & {
            f: boolean;
        } & {
            i: string;
        } & {
            q: string;
        } & {
            c: string;
        } & {
            a: string;
        } & {
            t: string;
        } & {
            A: string;
        } & {
            T: string;
        } & {
            W: string;
        } & {
            B: string;
        } & {
            E: string;
        }>;
    }[];
};
export default _default;
