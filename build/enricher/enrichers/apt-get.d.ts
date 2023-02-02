import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: string[];
        argv: () => Argv<{
            y: boolean;
        } & {
            f: boolean;
        } & {
            m: boolean;
        } & {
            "fix-missing": boolean;
        } & {
            "allow-unauthenticated": boolean;
        } & {
            "allow-downgrades": boolean;
        } & {
            "allow-remove-essential": boolean;
        } & {
            "allow-change-held-packages": boolean;
        } & {
            s: boolean;
        } & {
            u: boolean;
        } & {
            "no-install-recommends": boolean;
        } & {
            h: boolean;
        } & {
            v: boolean;
        } & {
            purge: boolean;
        } & {
            "auto-remove": boolean;
        } & {
            autoremove: boolean;
        } & {
            "force-yes": boolean;
        } & {
            "assume-yes": boolean;
        } & {
            o: string;
        } & {
            C: string;
        } & {
            q: number;
        }>;
    }[];
};
export default _default;
