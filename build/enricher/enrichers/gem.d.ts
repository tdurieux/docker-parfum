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
        strings: string[];
        argv: () => Argv<{
            h: boolean;
        } & {
            V: boolean;
        } & {
            "no-verbose": boolean;
        } & {
            q: boolean;
        } & {
            silent: boolean;
        } & {
            backtrace: boolean;
        } & {
            debug: boolean;
        } & {
            norc: boolean;
        } & {
            l: boolean;
        } & {
            r: boolean;
        } & {
            b: boolean;
        } & {
            "clear-source": boolean;
        } & {
            "no-http-proxy": boolean;
        } & {
            "no-lock": boolean;
        } & {
            "no-suggestions": boolean;
        } & {
            lock: boolean;
        } & {
            suggestions: boolean;
        } & {
            default: boolean;
        } & {
            "post-install-message": boolean;
        } & {
            "no-post-install-message": boolean;
        } & {
            "minimal-deps": boolean;
        } & {
            conservative: boolean;
        } & {
            development: boolean;
        } & {
            "development-all": boolean;
        } & {
            "user-install": boolean;
        } & {
            "no-user-install": boolean;
        } & {
            "ignore-dependencies": boolean;
        } & {
            f: boolean;
        } & {
            "no-force": boolean;
        } & {
            w: boolean;
        } & {
            "no-wrappers": boolean;
        } & {
            vendor: boolean;
        } & {
            N: boolean;
        } & {
            E: boolean;
        } & {
            "no-env-shebang": boolean;
        } & {
            u: boolean;
        } & {
            "no-update-sources": boolean;
        } & {
            prerelease: boolean;
        } & {
            "no-prerelease": boolean;
        } & {
            "no-ri": boolean;
        } & {
            "no-rdoc": boolean;
        } & {
            system: boolean;
        } & {
            platform: string;
        } & {
            P: string;
        } & {
            s: string;
        } & {
            p: string;
        } & {
            i: string;
        } & {
            n: string;
        } & {
            g: string;
        } & {
            "config-file": string;
        } & {
            "build-root": string;
        } & {
            v: (string | number)[];
        } & {
            document: (string | number)[];
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        argv: () => Argv<{}>;
        categories?: undefined;
        paths?: undefined;
        booleans?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            h: boolean;
        } & {
            V: boolean;
        } & {
            "no-verbose": boolean;
        } & {
            q: boolean;
        } & {
            silent: boolean;
        } & {
            backtrace: boolean;
        } & {
            debug: boolean;
        } & {
            norc: boolean;
        } & {
            force: boolean;
        } & {
            strict: boolean;
        } & {
            o: string;
        } & {
            "config-file": string;
        }>;
        strings?: undefined;
    })[];
};
export default _default;
