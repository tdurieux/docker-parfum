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
            compatibility: boolean;
        } & {
            "dry-run": boolean;
        } & {
            ansi: string;
        } & {
            "env-file": string;
        } & {
            f: string;
        } & {
            parallel: string;
        } & {
            profile: string;
        } & {
            progress: string;
        } & {
            "project-directory": string;
        } & {
            p: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "dry-run": boolean;
        } & {
            "no-cache": boolean;
        } & {
            pull: boolean;
        } & {
            push: boolean;
        } & {
            q: boolean;
        } & {
            "build-arg": string;
        } & {
            builder: string;
        } & {
            m: string;
        } & {
            ssh: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            a: boolean;
        } & {
            "dry-run": boolean;
        } & {
            L: boolean;
        } & {
            index: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            build: boolean;
        } & {
            "dry-run": boolean;
        } & {
            "force-recreate": boolean;
        } & {
            "no-build": boolean;
        } & {
            "no-recreate": boolean;
        } & {
            "remove-orphans": boolean;
        } & {
            pull: string;
        } & {
            scale: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            d: boolean;
        } & {
            "dry-run": boolean;
        } & {
            privileged: boolean;
        } & {
            e: string;
        } & {
            index: string;
        } & {
            T: string;
        } & {
            u: string;
        } & {
            w: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "dry-run": boolean;
        } & {
            q: boolean;
        } & {
            format: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "dry-run": boolean;
        } & {
            "remove-orphans": boolean;
        } & {
            s: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "dry-run": boolean;
        } & {
            f: boolean;
        } & {
            "no-color": boolean;
        } & {
            "no-log-prefix": boolean;
        } & {
            t: boolean;
        } & {
            since: string;
        } & {
            n: string;
        } & {
            until: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            "dry-run": boolean;
        }>;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "dry-run": boolean;
        } & {
            index: string;
        } & {
            protocol: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "dry-run": boolean;
        } & {
            "ignore-buildable": boolean;
        } & {
            "ignore-pull-failures": boolean;
        } & {
            "include-deps": boolean;
        } & {
            q: boolean;
        } & {
            policy: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            build: boolean;
        } & {
            d: boolean;
        } & {
            "dry-run": boolean;
        } & {
            i: boolean;
        } & {
            T: boolean;
        } & {
            "no-deps": boolean;
        } & {
            "quiet-pull": boolean;
        } & {
            "remove-orphans": boolean;
        } & {
            rm: boolean;
        } & {
            "service-ports": boolean;
        } & {
            "use-aliases": boolean;
        } & {
            "cap-add": string;
        } & {
            "cap-drop": string;
        } & {
            entrypoint: string;
        } & {
            e: string;
        } & {
            l: string;
        } & {
            name: string;
        } & {
            p: string;
        } & {
            u: string;
        } & {
            v: string;
        } & {
            w: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "dry-run": boolean;
        } & {
            t: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "dry-run": boolean;
        } & {
            short: boolean;
        } & {
            f: string;
        }>;
    })[];
};
export default _default;
