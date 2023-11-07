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
            f: boolean;
        } & {
            i: boolean;
        } & {
            I: boolean;
        } & {
            "one-file-system": boolean;
        } & {
            v: boolean;
        } & {
            version: boolean;
        } & {
            help: boolean;
        } & {
            "preserve-root": boolean;
        } & {
            "no-preserve-root": boolean;
        } & {
            interactive: string;
        }>;
    }[];
};
export default _default;
