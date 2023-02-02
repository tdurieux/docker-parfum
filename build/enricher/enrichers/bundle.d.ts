import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<{
            "no-color": boolean;
        } & {
            V: boolean;
        } & {
            r: string;
        } & {
            binstubs: string;
        } & {
            standalone: string;
        } & {
            "trust-policy": string;
        } & {
            with: string;
        } & {
            without: string;
        } & {
            jobs: string;
        } & {
            retry: string;
        } & {
            "path PATH": string;
        } & {
            "gemfile=GEMFILE": string;
        } & {
            clean: string;
        } & {
            deployment: string;
        } & {
            frozen: string;
        } & {
            "full-index": string;
        } & {
            local: string;
        } & {
            "no-cache": string;
        } & {
            "no-prune": string;
        } & {
            quiet: string;
        } & {
            redownload: string;
        } & {
            shebang: string;
        } & {
            system: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: any[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<{
            "no-color": boolean;
        } & {
            V: boolean;
        } & {
            r: string;
        }>;
    })[];
};
export default _default;
