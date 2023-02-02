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
            "no-install-recommends": boolean;
        } & {
            "no-install-suggests": boolean;
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
