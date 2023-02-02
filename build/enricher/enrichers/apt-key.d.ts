import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        argv: () => Argv<{
            keyring: string;
        }>;
        booleans?: undefined;
        counts?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<{
            version: boolean;
        } & {
            verbose: boolean;
        } & {
            fingerprint: boolean;
        } & {
            batch: boolean;
        } & {
            y: boolean;
        } & {
            "no-tty": boolean;
        } & {
            import: boolean;
        } & {
            "fast-import": boolean;
        } & {
            a: boolean;
        } & {
            "no-batch": boolean;
        } & {
            q: boolean;
        } & {
            enarmor: boolean;
        } & {
            dearmor: boolean;
        } & {
            d: boolean;
        } & {
            "refresh-keys": boolean;
        } & {
            "trusted-key": string;
        } & {
            "recv-key": string;
        } & {
            recv: string;
        } & {
            keyserver: string;
        } & {
            keyring: string;
        } & {
            homedir: string;
        } & {
            options: string;
        } & {
            export: (string | number)[];
        } & {
            verify: (string | number)[];
        } & {
            "recv-keys": (string | number)[];
        } & {
            "keyserver-options": (string | number)[];
        }>;
    })[];
};
export default _default;
