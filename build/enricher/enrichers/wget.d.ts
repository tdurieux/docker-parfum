import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        fixBadLongNames: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            d: boolean;
        } & {
            q: boolean;
        } & {
            v: boolean;
        } & {
            "no-verbose": boolean;
        } & {
            "span-hosts": boolean;
        } & {
            "no-check-certificate": boolean;
        } & {
            N: boolean;
        } & {
            c: boolean;
        } & {
            nc: boolean;
        } & {
            nv: boolean;
        } & {
            "content-disposition": boolean;
        } & {
            progress: string;
        } & {
            U: string;
        } & {
            O: string;
        } & {
            a: string;
        } & {
            o: string;
        } & {
            i: string;
        }>;
    }[];
};
export default _default;
