import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        prefix: string;
        argv: () => Argv<{}>;
        booleans?: undefined;
        categories?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            init: boolean;
        } & {
            recursive: boolean;
        }>;
        categories?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        argv: () => Argv<{}>;
        booleans?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            hard: boolean;
        }>;
        categories?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            short: boolean;
        }>;
        categories?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "single-branch": boolean;
        } & {
            q: boolean;
        } & {
            recursive: boolean;
        } & {
            "no-recurse-submodules": boolean;
        } & {
            "recurse-submodules": boolean;
        } & {
            "no-checkout": boolean;
        } & {
            b: string;
        } & {
            depth: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            track: boolean;
        } & {
            q: boolean;
        }>;
        categories?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            aggressive: boolean;
        } & {
            p: boolean;
        }>;
        categories?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            global: boolean;
        } & {
            system: boolean;
        }>;
        categories?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            q: boolean;
        } & {
            tags: boolean;
        } & {
            f: boolean;
        } & {
            "no-recurse-submodules": boolean;
        } & {
            "recurse-submodules": boolean;
        } & {
            all: boolean;
        } & {
            p: boolean;
        }>;
        categories?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            always: boolean;
        } & {
            tags: boolean;
        } & {
            match: string;
        } & {
            dirty: string;
        }>;
        categories?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "allow-empty": boolean;
        } & {
            "allow-empty-message": boolean;
        } & {
            "no-edit": boolean;
        } & {
            m: string;
        }>;
        categories?: undefined;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            "no-index": boolean;
        } & {
            quiet: boolean;
        } & {
            raw: boolean;
        } & {
            minimal: boolean;
        }>;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            t: boolean;
        } & {
            s: boolean;
        } & {
            e: boolean;
        } & {
            p: boolean;
        }>;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            d: boolean;
        } & {
            f: boolean;
        } & {
            i: boolean;
        } & {
            n: boolean;
        } & {
            q: boolean;
        } & {
            x: boolean;
        } & {
            X: boolean;
        } & {
            e: (string | number)[];
        }>;
        categories?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            version: boolean;
        } & {
            help: boolean;
        }>;
        categories?: undefined;
        strings?: undefined;
    })[];
};
export default _default;
