import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        postProcess: {
            tagLastElement: {
                source: string;
                tag: string;
            };
        }[];
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            r: boolean;
        } & {
            R: boolean;
        } & {
            a: boolean;
        } & {
            f: boolean;
        } & {
            l: boolean;
        } & {
            L: boolean;
        } & {
            n: boolean;
        } & {
            d: boolean;
        } & {
            i: boolean;
        } & {
            p: boolean;
        } & {
            parents: boolean;
        } & {
            s: boolean;
        } & {
            "remove-destination": boolean;
        } & {
            T: boolean;
        } & {
            u: boolean;
        } & {
            v: boolean;
        } & {
            x: boolean;
        } & {
            Z: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            H: boolean;
        } & {
            "copy-contents": boolean;
        } & {
            b: boolean;
        } & {
            "attributes-only": boolean;
        } & {
            "strip-trailing-slashes": boolean;
        } & {
            preserve: string;
        } & {
            "no-preserve": string;
        } & {
            context: string;
        } & {
            backup: string;
        } & {
            sparse: string;
        }>;
    }[];
};
export default _default;
