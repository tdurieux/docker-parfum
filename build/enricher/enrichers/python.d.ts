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
        argv: () => Argv<{
            B: boolean;
        } & {
            d: boolean;
        } & {
            E: boolean;
        } & {
            i: boolean;
        } & {
            O: boolean;
        } & {
            R: boolean;
        } & {
            s: boolean;
        } & {
            S: boolean;
        } & {
            t: boolean;
        } & {
            u: boolean;
        } & {
            v: boolean;
        } & {
            V: boolean;
        } & {
            x: boolean;
        } & {
            3: boolean;
        } & {
            h: boolean;
        } & {
            c: string;
        } & {
            m: string;
        } & {
            q: string;
        }>;
        fixupNonSpacedArgs?: undefined;
    } | {
        captureAfterFirstNonOption: string;
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            B: boolean;
        } & {
            d: boolean;
        } & {
            E: boolean;
        } & {
            i: boolean;
        } & {
            O: boolean;
        } & {
            R: boolean;
        } & {
            s: boolean;
        } & {
            S: boolean;
        } & {
            t: boolean;
        } & {
            u: boolean;
        } & {
            v: boolean;
        } & {
            V: boolean;
        } & {
            x: boolean;
        } & {
            3: boolean;
        } & {
            h: boolean;
        } & {
            c: string;
        } & {
            m: string;
        } & {
            q: string;
        }>;
        captureAllAfter?: undefined;
        mustHave?: undefined;
        postProcess?: undefined;
    })[];
};
export default _default;
