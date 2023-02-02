import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        prefix: string;
        argv: () => Argv<{}>;
        booleans?: undefined;
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
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            hard: boolean;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            short: boolean;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
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
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            always: boolean;
        } & {
            tags: boolean;
        } & {
            match: string;
        } & {
            dirty: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            "allow-empty": boolean;
        } & {
            "allow-empty-message": boolean;
        } & {
            "no-edit": boolean;
        } & {
            m: string;
        }>;
    } | {
        cmd: string;
        name: string;
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
    })[];
};
export default _default;
