import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        captureAfterFirstNonOption: string;
        captureAllAfter: {
            match: string[];
            name: string;
        };
        postProcess: {
            subCommand: string;
        }[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            i: boolean;
        } & {
            L: boolean;
        } & {
            r: boolean;
        } & {
            s: boolean;
        } & {
            D: boolean;
        } & {
            noediting: boolean;
        } & {
            noprofile: boolean;
        } & {
            norc: boolean;
        } & {
            posix: boolean;
        } & {
            restricted: boolean;
        } & {
            v: boolean;
        } & {
            version: boolean;
        } & {
            "rpm-requires": boolean;
        } & {
            debugger: boolean;
        } & {
            "dump-po-strings": boolean;
        } & {
            "dump-strings": boolean;
        } & {
            help: boolean;
        } & {
            c: string;
        } & {
            "init-file": string;
        } & {
            rcfile: string;
        }>;
    }[];
};
export default _default;
