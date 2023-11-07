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
        argv: () => Argv<{
            b: boolean;
        } & {
            c: boolean;
        } & {
            tag: boolean;
        } & {
            t: boolean;
        } & {
            "ignore-missing": boolean;
        } & {
            quiet: boolean;
        } & {
            status: boolean;
        } & {
            strict: boolean;
        } & {
            w: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        }>;
    }[];
};
export default _default;
