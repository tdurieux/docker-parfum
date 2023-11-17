import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        captureAfterFirstNonOption: string;
        captureAllAfter: {
            match: string[];
            name: string;
        };
        mustHave: string[];
        postProcess: {
            subCommand: string;
        }[];
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            b: boolean;
        } & {
            B: boolean;
        } & {
            d: boolean;
        } & {
            E: boolean;
        } & {
            i: boolean;
        } & {
            I: boolean;
        } & {
            O: boolean;
        } & {
            OO: boolean;
        } & {
            P: boolean;
        } & {
            q: boolean;
        } & {
            s: boolean;
        } & {
            S: boolean;
        } & {
            u: boolean;
        } & {
            v: boolean;
        } & {
            V: boolean;
        } & {
            x: boolean;
        } & {
            h: boolean;
        } & {
            c: string;
        } & {
            m: string;
        } & {
            W: string;
        } & {
            X: string;
        }>;
        fixupNonSpacedArgs?: undefined;
    } | {
        captureAfterFirstNonOption: string;
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            b: boolean;
        } & {
            B: boolean;
        } & {
            d: boolean;
        } & {
            E: boolean;
        } & {
            i: boolean;
        } & {
            I: boolean;
        } & {
            O: boolean;
        } & {
            OO: boolean;
        } & {
            P: boolean;
        } & {
            q: boolean;
        } & {
            s: boolean;
        } & {
            S: boolean;
        } & {
            u: boolean;
        } & {
            v: boolean;
        } & {
            V: boolean;
        } & {
            x: boolean;
        } & {
            h: boolean;
        } & {
            c: string;
        } & {
            m: string;
        } & {
            W: string;
        } & {
            X: string;
        }>;
        captureAllAfter?: undefined;
        mustHave?: undefined;
        postProcess?: undefined;
    })[];
};
export default _default;
