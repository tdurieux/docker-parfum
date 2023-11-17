import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            version: boolean;
        } & {
            f: boolean;
        } & {
            s: boolean;
        } & {
            l: boolean;
        } & {
            N: boolean;
        } & {
            v: boolean;
        } & {
            S: boolean;
        } & {
            L: boolean;
        } & {
            compressed: boolean;
        } & {
            j: boolean;
        } & {
            k: boolean;
        } & {
            progress: boolean;
        } & {
            "progress-bar": boolean;
        } & {
            "create-dirs": boolean;
        } & {
            O: boolean;
        } & {
            retry: string;
        } & {
            url: string;
        } & {
            o: string;
        }>;
    }[];
};
export default _default;
