import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            P: boolean;
        } & {
            D: boolean;
        } & {
            O: boolean;
        } & {
            "no-save": boolean;
        } & {
            E: boolean;
        } & {
            B: boolean;
        } & {
            "dry-run": boolean;
        } & {
            "package-lock-only": boolean;
        } & {
            f: boolean;
        } & {
            g: boolean;
        } & {
            "global-style": boolean;
        } & {
            "ignore-scripts": boolean;
        } & {
            "legacy-bundling": boolean;
        } & {
            link: boolean;
        } & {
            "no-bin-links": boolean;
        } & {
            "no-optional": boolean;
        } & {
            "no-shrinkwrap": boolean;
        } & {
            "no-package-lock": boolean;
        } & {
            "no-audit": boolean;
        } & {
            "no-color": boolean;
        } & {
            save: boolean;
        } & {
            production: boolean;
        } & {
            "unsafe-perm": boolean;
        } & {
            only: string;
        } & {
            tag: string;
        } & {
            prefix: string;
        } & {
            nodedir: string;
        }>;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        argv: () => Argv<{}>;
        paths?: undefined;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            force: boolean;
        }>;
        categories?: undefined;
        paths?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        argv: () => Argv<{}>;
        categories?: undefined;
        paths?: undefined;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            production: boolean;
        } & {
            json: boolean;
        } & {
            "dry-run": boolean;
        }>;
        paths?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            help: boolean;
        } & {
            v: boolean;
        }>;
        categories?: undefined;
        paths?: undefined;
    })[];
};
export default _default;
