import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        paths: any[];
        booleans: string[];
        strings: string[];
        counts: string[];
        argv: () => Argv<{
            "print-arch": boolean;
        } & {
            "no-cache": boolean;
        } & {
            force: boolean;
        } & {
            u: boolean;
        } & {
            U: boolean;
        } & {
            q: boolean;
        } & {
            "no-progress": boolean;
        } & {
            "no-network": boolean;
        } & {
            initdb: boolean;
        } & {
            "allow-untrusted": boolean;
        } & {
            upgrade: boolean;
        } & {
            p: string;
        } & {
            t: string;
        } & {
            X: (string | number)[];
        } & {
            v: number;
        }>;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        paths: any[];
        booleans: string[];
        strings: any[];
        counts: string[];
        argv: () => Argv<{
            "print-arch": boolean;
        } & {
            "no-cache": boolean;
        } & {
            force: boolean;
        } & {
            u: boolean;
        } & {
            U: boolean;
        } & {
            q: boolean;
        } & {
            "no-progress": boolean;
        } & {
            "no-network": boolean;
        } & {
            purge: boolean;
        } & {
            X: (string | number)[];
        } & {
            v: number;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        counts: string[];
        argv: () => Argv<{
            "print-arch": boolean;
        } & {
            "no-cache": boolean;
        } & {
            force: boolean;
        } & {
            u: boolean;
        } & {
            U: boolean;
        } & {
            q: boolean;
        } & {
            "no-progress": boolean;
        } & {
            X: (string | number)[];
        } & {
            v: number;
        }>;
        categories?: undefined;
        paths?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        booleans: string[];
        counts: string[];
        argv: () => Argv<{
            "print-arch": boolean;
        } & {
            "no-cache": boolean;
        } & {
            force: boolean;
        } & {
            u: boolean;
        } & {
            U: boolean;
        } & {
            q: boolean;
        } & {
            "no-progress": boolean;
        } & {
            X: (string | number)[];
        } & {
            v: number;
        }>;
        paths?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: any[];
        booleans: string[];
        strings: any[];
        counts: string[];
        argv: () => Argv<{
            "print-arch": boolean;
        } & {
            "no-cache": boolean;
        } & {
            force: boolean;
        } & {
            u: boolean;
        } & {
            U: boolean;
        } & {
            q: boolean;
        } & {
            "no-progress": boolean;
        } & {
            installed: boolean;
        } & {
            X: (string | number)[];
        } & {
            v: number;
        }>;
        categories?: undefined;
    })[];
};
export default _default;
