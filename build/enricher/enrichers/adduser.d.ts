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
        argv: () => Argv<{
            D: boolean;
        } & {
            m: boolean;
        } & {
            M: boolean;
        } & {
            N: boolean;
        } & {
            o: boolean;
        } & {
            r: boolean;
        } & {
            U: boolean;
        } & {
            "disabled-password": boolean;
        } & {
            S: boolean;
        } & {
            "no-log-init": boolean;
        } & {
            c: string;
        } & {
            e: string;
        } & {
            f: string;
        } & {
            g: string;
        } & {
            p: string;
        } & {
            s: string;
        } & {
            u: string;
        } & {
            Z: string;
        } & {
            ingroup: string;
        } & {
            G: string;
        } & {
            b: string;
        } & {
            d: string;
        } & {
            "home-dir": string;
        } & {
            h: string;
        } & {
            k: string;
        } & {
            K: (string | number)[];
        } & {
            gecos: (string | number)[];
        }>;
    }[];
};
export default _default;
