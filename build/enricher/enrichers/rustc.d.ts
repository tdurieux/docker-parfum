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
        strings: string[];
        argv: () => Argv<{
            h: boolean;
        } & {
            g: boolean;
        } & {
            O: boolean;
        } & {
            test: boolean;
        } & {
            V: boolean;
        } & {
            v: boolean;
        } & {
            cfg: string;
        } & {
            L: string;
        } & {
            l: string;
        } & {
            "crate-type": string;
        } & {
            "crate-name": string;
        } & {
            edition: string;
        } & {
            emit: string;
        } & {
            print: string;
        } & {
            o: string;
        } & {
            "out-dir": string;
        } & {
            explain: string;
        } & {
            target: string;
        } & {
            A: string;
        } & {
            W: string;
        } & {
            "force-warn": string;
        } & {
            D: string;
        } & {
            F: string;
        } & {
            "cap-lints": string;
        } & {
            C: string;
        }>;
    }[];
};
export default _default;
