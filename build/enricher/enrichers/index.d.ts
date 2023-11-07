/// <reference types="yargs" />
export { default as adduser } from "./adduser";
export { default as apk } from "./apk";
export { default as apt_add_repository } from "./apt-add-repository";
export { default as apt_get } from "./apt-get";
export { default as apt_key } from "./apt-key";
export { default as apt } from "./apt";
export { default as bash } from "./bash";
export { default as bundle } from "./bundle";
export { default as cat } from "./cat";
export { default as cd } from "./cd";
export { default as chmod } from "./chmod";
export { default as chown } from "./chown";
export { default as cmake } from "./cmake";
export { default as conda } from "./conda";
export { default as configure } from "./configure";
export { default as cp } from "./cp";
export { default as curl } from "./curl";
export { default as diff } from "./diff";
export { default as dnf } from "./dnf";
export { default as docker_php_ext_install } from "./docker-php-ext-install";
export { default as docker } from "./docker";
export { default as dotnet } from "./dotnet";
export { default as dpkg_architecture } from "./dpkg-architecture";
export { default as dpkg } from "./dpkg";
export { default as echo } from "./echo";
export { default as exit } from "./exit";
export { default as _export } from "./export";
export { default as find } from "./find";
export { default as firefox } from "./firefox";
export { default as gem } from "./gem";
export { default as git } from "./git";
export { default as go } from "./go";
export { default as google_chrome } from "./google-chrome";
export { default as gpg } from "./gpg";
export { default as gradle } from "./gradle";
export { default as grep } from "./grep";
export { default as groupadd } from "./groupadd";
export { default as jq } from "./jq";
export { default as ldconfig } from "./ldconfig";
export { default as ln } from "./ln";
export { default as locale_gen } from "./locale-gen";
export { default as ls } from "./ls";
export { default as make } from "./make";
export { default as mkdir } from "./mkdir";
export { default as mktemp } from "./mktemp";
export { default as mv } from "./mv";
export { default as mvn } from "./mvn";
export { default as node } from "./node";
export { default as npm } from "./npm";
export { default as nproc } from "./nproc";
export { default as pecl } from "./pecl";
export { default as php } from "./php";
export { default as pip } from "./pip";
export { default as printf } from "./printf";
export { default as pytest } from "./pytest";
export { default as python } from "./python";
export { default as rm } from "./rm";
export { default as rpm } from "./rpm";
export { default as sed } from "./sed";
export { default as set } from "./set";
export { default as sh } from "./sh";
export { default as sha256sum } from "./sha256sum";
export { default as sha512sum } from "./sha512sum";
export { default as sort } from "./sort";
export { default as sudo } from "./sudo";
export { default as tar } from "./tar";
export { default as tee } from "./tee";
export { default as touch } from "./touch";
export { default as _true } from "./true";
export { default as unzip } from "./unzip";
export { default as useradd } from "./useradd";
export { default as wget } from "./wget";
export { default as which } from "./which";
export { default as xargs } from "./xargs";
export { default as yarn } from "./yarn";
export { default as yum } from "./yum";
export declare const enrichers: ({
    providerFor: string[];
    categories: any[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => import("yargs").Argv<import("yargs").Omit<{
            i: boolean;
        } & {
            l: boolean;
        } & {
            n: boolean;
        } & {
            N: boolean;
        } & {
            p: boolean;
        } & {
            v: boolean;
        } & {
            X: boolean;
        } & {
            "?": boolean;
        }, "?"> & {
            "?": boolean;
        } & {
            V: boolean;
        } & {
            c: string;
        } & {
            r: string;
        } & {
            C: string;
        } & {
            f: string;
        }>;
    }[];
} | {
    providerFor: string[];
    categories: any[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<import("yargs").Omit<{
            c: boolean;
        } & {
            m: boolean;
        } & {
            u: boolean;
        } & {
            s: boolean;
        } & {
            version: boolean;
        } & {
            help: boolean;
        } & {
            b: boolean;
        } & {
            d: boolean;
        } & {
            f: boolean;
        } & {
            g: boolean;
        } & {
            h: boolean;
        } & {
            i: boolean;
        } & {
            M: boolean;
        } & {
            n: boolean;
        } & {
            R: boolean;
        } & {
            r: boolean;
        } & {
            V: boolean;
        }, "b"> & {
            b: boolean;
        } & {
            z: boolean;
        } & {
            debug: boolean;
        } & {
            parallel: boolean;
        } & {
            radixsort: boolean;
        } & {
            mergesort: boolean;
        } & {
            qsort: boolean;
        } & {
            heapsort: boolean;
        } & {
            mmap: boolean;
        } & {
            o: string;
        } & {
            S: string;
        } & {
            t: string;
        } & {
            T: string;
        } & {
            k: string;
        } & {
            sort: string;
        } & {
            "files0-from=filename": string;
        } & {
            "batch-size": string;
        } & {
            "compress-program": string;
        } & {
            "random-source": string;
        }>;
    }[];
} | {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: any;
        argv: () => import("yargs").Argv<{}>;
    }[];
})[];
