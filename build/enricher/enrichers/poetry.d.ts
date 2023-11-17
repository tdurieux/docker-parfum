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
            h: boolean;
        } & {
            q: boolean;
        } & {
            n: boolean;
        } & {
            "no-plugins": boolean;
        } & {
            "no-cache": boolean;
        } & {
            c: string;
        } & {
            v: number;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: string[];
        argv: () => Argv<{
            h: boolean;
        } & {
            q: boolean;
        } & {
            n: boolean;
        } & {
            "no-plugins": boolean;
        } & {
            "no-cache": boolean;
        } & {
            c: string;
        } & {
            v: number;
        }>;
        categories?: undefined;
    })[];
};
export default _default;
