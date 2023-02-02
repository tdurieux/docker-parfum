import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: ({
        fixupNonSpacedArgs: boolean;
        mustHave: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            help: boolean;
        } & {
            version: boolean;
        } & {
            v: boolean;
        } & {
            strip: boolean;
        } & {
            N: boolean;
        } & {
            "clean-first": boolean;
        } & {
            "user-stderr": boolean;
        } & {
            from: string;
        } & {
            E: string;
        } & {
            G: string;
        } & {
            U: string;
        } & {
            T: string;
        } & {
            A: string;
        } & {
            component: string;
        } & {
            j: string;
        } & {
            build: string;
        } & {
            install: string;
        } & {
            open: string;
        } & {
            config: string;
        } & {
            prefix: string;
        } & {
            S: string;
        } & {
            B: string;
        } & {
            C: string;
        } & {
            D: (string | number)[];
        } & {
            W: (string | number)[];
        } & {
            t: (string | number)[];
        }>;
        saveLastNonOption?: undefined;
    } | {
        saveLastNonOption: string;
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            help: boolean;
        } & {
            version: boolean;
        } & {
            v: boolean;
        } & {
            strip: boolean;
        } & {
            N: boolean;
        } & {
            "clean-first": boolean;
        } & {
            "user-stderr": boolean;
        } & {
            from: string;
        } & {
            E: string;
        } & {
            G: string;
        } & {
            U: string;
        } & {
            T: string;
        } & {
            A: string;
        } & {
            component: string;
        } & {
            j: string;
        } & {
            build: string;
        } & {
            install: string;
        } & {
            open: string;
        } & {
            config: string;
        } & {
            prefix: string;
        } & {
            S: string;
        } & {
            B: string;
        } & {
            C: string;
        } & {
            D: (string | number)[];
        } & {
            W: (string | number)[];
        } & {
            t: (string | number)[];
        }>;
        mustHave?: undefined;
    })[];
};
export default _default;
