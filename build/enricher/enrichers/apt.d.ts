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
    } | {
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
        categories?: undefined;
    })[];
};
export default _default;
