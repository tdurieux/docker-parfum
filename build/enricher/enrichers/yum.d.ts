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
            y: boolean;
        } & {
            q: boolean;
        } & {
            v: boolean;
        } & {
            C: boolean;
        } & {
            version: boolean;
        } & {
            showduplicates: boolean;
        } & {
            obsoletes: boolean;
        } & {
            noplugins: boolean;
        } & {
            nopgpgcheck: boolean;
        } & {
            "skip-broken": boolean;
        } & {
            t: boolean;
        } & {
            d: string;
        } & {
            e: string;
        } & {
            rpmverbosity: string;
        } & {
            R: string;
        } & {
            enablerepo: string;
        } & {
            disablerepo: string;
        } & {
            x: string;
        } & {
            color: string;
        } & {
            disableexcludes: string;
        } & {
            c: string;
        } & {
            installroot: string;
        } & {
            setopt: (string | number)[];
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            h: boolean;
        } & {
            y: boolean;
        } & {
            q: boolean;
        } & {
            v: boolean;
        } & {
            C: boolean;
        } & {
            version: boolean;
        } & {
            showduplicates: boolean;
        } & {
            obsoletes: boolean;
        } & {
            noplugins: boolean;
        } & {
            nopgpgcheck: boolean;
        } & {
            "skip-broken": boolean;
        } & {
            t: boolean;
        } & {
            d: string;
        } & {
            e: string;
        } & {
            rpmverbosity: string;
        } & {
            R: string;
        } & {
            enablerepo: string;
        } & {
            disablerepo: string;
        } & {
            x: string;
        } & {
            color: string;
        } & {
            disableexcludes: string;
        } & {
            c: string;
        } & {
            installroot: string;
        } & {
            setopt: (string | number)[];
        }>;
        categories?: undefined;
    })[];
};
export default _default;
