import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            V: boolean;
        } & {
            list: boolean;
        } & {
            v: boolean;
        } & {
            q: boolean;
        } & {
            frozen: boolean;
        } & {
            locked: boolean;
        } & {
            offline: boolean;
        } & {
            h: boolean;
        } & {
            explain: string;
        } & {
            color: string;
        } & {
            C: string;
        } & {
            config: string;
        } & {
            Z: string;
        }>;
        categories?: undefined;
        paths?: undefined;
        counts?: undefined;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        paths: any[];
        booleans: any[];
        strings: any[];
        counts: any[];
        argv: () => Argv<{}>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: any[];
        booleans: any[];
        strings: any[];
        counts: any[];
        argv: () => Argv<{}>;
        categories?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            doc: boolean;
        } & {
            q: boolean;
        } & {
            v: boolean;
        } & {
            h: boolean;
        } & {
            color: string;
        } & {
            config: string;
        } & {
            Z: string;
        }>;
        categories?: undefined;
        paths?: undefined;
        counts?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            bin: boolean;
        } & {
            lib: boolean;
        } & {
            q: boolean;
        } & {
            v: boolean;
        } & {
            h: boolean;
        } & {
            vcs: string;
        } & {
            edition: string;
        } & {
            name: string;
        } & {
            registry: string;
        } & {
            color: string;
        } & {
            config: string;
        } & {
            Z: string;
        }>;
        categories?: undefined;
        paths?: undefined;
        counts?: undefined;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        strings: string[];
        argv: () => Argv<{
            "no-default-features": string;
        } & {
            "default-features": string;
        } & {
            F: string;
        } & {
            optional: string;
        } & {
            "no-optional": string;
        } & {
            rename: string;
        } & {
            "ignore-rust-version": string;
        } & {
            "dry-run": string;
        } & {
            q: string;
        } & {
            v: string;
        } & {
            color: string;
        } & {
            config: string;
        } & {
            Z: string;
        } & {
            h: string;
        }>;
        booleans?: undefined;
        paths?: undefined;
        counts?: undefined;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "dry-run": boolean;
        } & {
            q: boolean;
        } & {
            v: boolean;
        } & {
            h: boolean;
        } & {
            color: string;
        } & {
            config: string;
        } & {
            Z: string;
        }>;
        paths?: undefined;
        counts?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "no-run": boolean;
        } & {
            "no-fail-fast": boolean;
        } & {
            "ignore-rust-version": boolean;
        } & {
            q: boolean;
        } & {
            v: boolean;
        } & {
            h: boolean;
        } & {
            "message-format": string;
        } & {
            color: string;
        } & {
            config: string;
        } & {
            Z: string;
        }>;
        categories?: undefined;
        paths?: undefined;
        counts?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            q: boolean;
        } & {
            v: boolean;
        } & {
            h: boolean;
        } & {
            limit: string;
        } & {
            index: string;
        } & {
            registry: string;
        } & {
            color: string;
        } & {
            config: string;
        } & {
            Z: string;
        }>;
        categories?: undefined;
        paths?: undefined;
        counts?: undefined;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            q: boolean;
        } & {
            v: boolean;
        } & {
            h: boolean;
        } & {
            root: string;
        } & {
            color: string;
        } & {
            config: string;
        } & {
            Z: string;
        }>;
        paths?: undefined;
        counts?: undefined;
    })[];
};
export default _default;
