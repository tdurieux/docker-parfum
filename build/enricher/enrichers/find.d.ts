import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        captureAllAfter: {
            match: string[];
            name: string;
        };
        fixBadLongNames: string[];
        postProcess: {
            subCommand: string;
        }[];
        rejectIf: string[];
        replaceEmptyArgsWith: string[];
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            delete: boolean;
        } & {
            print0: boolean;
        } & {
            print: boolean;
        } & {
            execdir: boolean;
        } & {
            exec: boolean;
        } & {
            depth: boolean;
        } & {
            type: string;
        } & {
            name: string;
        } & {
            regextype: string;
        } & {
            regex: string;
        } & {
            wholename: string;
        } & {
            perm: string;
        } & {
            path: string;
        } & {
            mindepth: string;
        } & {
            maxdepth: string;
        }>;
    }[];
};
export default _default;
