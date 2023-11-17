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
        strings: string[];
        argv: () => Argv<{
            version: boolean;
        } & {
            seq: boolean;
        } & {
            stream: boolean;
        } & {
            slurp: boolean;
        } & {
            "raw-input": boolean;
        } & {
            "null-input": boolean;
        } & {
            "compact-output": boolean;
        } & {
            tab: boolean;
        } & {
            "color-output": boolean;
        } & {
            "monochrome-output": boolean;
        } & {
            "ascii-output": boolean;
        } & {
            unbuffered: boolean;
        } & {
            "sort-keys": boolean;
        } & {
            "raw-output": boolean;
        } & {
            "join-output": boolean;
        } & {
            args: boolean;
        } & {
            jsonargs: boolean;
        } & {
            e: string;
        } & {
            arg: string;
        } & {
            L: string;
        } & {
            argjson: string;
        } & {
            slurpfile: string;
        } & {
            argfile: string;
        } & {
            f: string;
        } & {
            "run-tests": string;
        } & {
            indent: string;
        }>;
    }[];
};
export default _default;
