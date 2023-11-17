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
        argv: () => Argv<{
            h: boolean;
        }>;
        paths?: undefined;
        strings?: undefined;
        counts?: undefined;
    } | {
        cmd: string;
        name: string;
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
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "no-self-update": boolean;
        } & {
            force: boolean;
        } & {
            "allow-downgrade": boolean;
        } & {
            "force-non-host": boolean;
        } & {
            h: boolean;
        } & {
            profile: string;
        } & {
            c: string;
        } & {
            t: string;
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
            h: boolean;
        } & {
            toolchain: string;
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
            h: boolean;
        } & {
            path: string;
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
            h: boolean;
        } & {
            y: string;
        }>;
        paths?: undefined;
        counts?: undefined;
    })[];
};
export default _default;
