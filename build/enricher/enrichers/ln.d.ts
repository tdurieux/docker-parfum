import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            b: boolean;
        } & {
            d: boolean;
        } & {
            F: boolean;
        } & {
            f: boolean;
        } & {
            i: boolean;
        } & {
            L: boolean;
        } & {
            n: boolean;
        } & {
            P: boolean;
        } & {
            r: boolean;
        } & {
            s: boolean;
        } & {
            T: boolean;
        } & {
            v: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            backup: string;
        } & {
            S: string;
        } & {
            t: string;
        }>;
        mustHave?: undefined;
        postProcess?: undefined;
    } | {
        mustHave: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            b: boolean;
        } & {
            d: boolean;
        } & {
            F: boolean;
        } & {
            f: boolean;
        } & {
            i: boolean;
        } & {
            L: boolean;
        } & {
            n: boolean;
        } & {
            P: boolean;
        } & {
            r: boolean;
        } & {
            s: boolean;
        } & {
            T: boolean;
        } & {
            v: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            backup: string;
        } & {
            S: string;
        } & {
            t: string;
        }>;
        postProcess?: undefined;
    } | {
        postProcess: {
            tagLastElement: {
                source: string;
                tag: string;
            };
        }[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            b: boolean;
        } & {
            d: boolean;
        } & {
            F: boolean;
        } & {
            f: boolean;
        } & {
            i: boolean;
        } & {
            L: boolean;
        } & {
            n: boolean;
        } & {
            P: boolean;
        } & {
            r: boolean;
        } & {
            s: boolean;
        } & {
            T: boolean;
        } & {
            v: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            backup: string;
        } & {
            S: string;
        } & {
            t: string;
        }>;
        mustHave?: undefined;
    })[];
};
export default _default;
