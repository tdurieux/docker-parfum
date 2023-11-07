/// <reference types="yargs" />
export { default as adduser } from "./adduser";
export { default as apk } from "./apk";
export { default as apt_add_repository } from "./apt-add-repository";
export { default as apt_get } from "./apt-get";
export { default as apt_key } from "./apt-key";
export { default as apt } from "./apt";
export { default as basename } from "./basename";
export { default as bash } from "./bash";
export { default as bundle } from "./bundle";
export { default as cat } from "./cat";
export { default as cd } from "./cd";
export { default as chmod } from "./chmod";
export { default as chown } from "./chown";
export { default as cmake } from "./cmake";
export { default as codecov } from "./codecov";
export { default as composer } from "./composer";
export { default as conda } from "./conda";
export { default as configure } from "./configure";
export { default as coverage } from "./coverage";
export { default as coveralls } from "./coveralls";
export { default as cp } from "./cp";
export { default as ctest } from "./ctest";
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
export { default as gh } from "./gh";
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
export { default as pwd } from "./pwd";
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
export { default as swift } from "./swift";
export { default as tar } from "./tar";
export { default as tee } from "./tee";
export { default as touch } from "./touch";
export { default as _true } from "./true";
export { default as unzip } from "./unzip";
export { default as useradd } from "./useradd";
export { default as wc } from "./wc";
export { default as wget } from "./wget";
export { default as which } from "./which";
export { default as xargs } from "./xargs";
export { default as yarn } from "./yarn";
export { default as yum } from "./yum";
export declare const enrichers: ({
    providerFor: string[];
    categories: any[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            help: boolean;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            "insecure-storage": boolean;
        } & {
            w: boolean;
        } & {
            "with-token": boolean;
        } & {
            p: string;
        } & {
            h: string;
        } & {
            s: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        argv: () => import("yargs").Argv<{
            h: string;
        }>;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            "insecure-storage": boolean;
        } & {
            "reset-scopes": boolean;
        } & {
            h: string;
        } & {
            r: string;
        } & {
            s: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            t: boolean;
        } & {
            h: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            n: boolean;
        } & {
            p: boolean;
        } & {
            r: boolean;
        } & {
            s: boolean;
        } & {
            w: boolean;
        } & {
            b: string;
        } & {
            c: string;
        } & {
            R: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            insiders: boolean;
        } & {
            w: boolean;
        } & {
            c: string;
        } & {
            R: string;
        } & {
            "repo-owner": string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            e: boolean;
        } & {
            r: boolean;
        } & {
            c: string;
        } & {
            p: string;
        } & {
            R: string;
        } & {
            "repo-owner": string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            "default-permissions": boolean;
        } & {
            s: boolean;
        } & {
            w: boolean;
        } & {
            b: string;
        } & {
            "devcontainer-path": string;
        } & {
            d: string;
        } & {
            "idle-timeout": string;
        } & {
            l: string;
        } & {
            m: string;
        } & {
            R: string;
        } & {
            "retention-period": string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            w: boolean;
        } & {
            q: string;
        } & {
            json: string;
        } & {
            L: string;
        } & {
            o: string;
        } & {
            R: string;
        } & {
            t: string;
        } & {
            u: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            f: boolean;
        } & {
            c: string;
        } & {
            R: string;
        } & {
            "repo-owner": string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            full: boolean;
        } & {
            c: string;
        } & {
            R: string;
        } & {
            "repo-owner": string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            config: boolean;
        } & {
            d: boolean;
        } & {
            c: string;
        } & {
            "debug-file": string;
        } & {
            profile: string;
        } & {
            R: string;
        } & {
            "repo-owner": string;
        } & {
            "server-port": string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            p: boolean;
        } & {
            w: boolean;
        } & {
            d: string;
        } & {
            f: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        argv: () => import("yargs").Argv<{
            a: string;
        } & {
            d: string;
        } & {
            f: string;
        } & {
            r: string;
        }>;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            public: boolean;
        } & {
            secret: boolean;
        } & {
            L: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            files: boolean;
        } & {
            r: boolean;
        } & {
            w: boolean;
        } & {
            f: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        argv: () => import("yargs").Argv<{
            R: string;
        }>;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            w: boolean;
        } & {
            a: string;
        } & {
            b: string;
        } & {
            F: string;
        } & {
            l: string;
        } & {
            m: string;
        } & {
            p: string;
        } & {
            recover: string;
        } & {
            T: string;
        } & {
            t: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            w: boolean;
        } & {
            app: string;
        } & {
            a: string;
        } & {
            A: string;
        } & {
            q: string;
        } & {
            json: string;
        } & {
            l: string;
        } & {
            L: string;
        } & {
            mention: string;
        } & {
            m: string;
        } & {
            S: string;
        } & {
            s: string;
        } & {
            t: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        argv: () => import("yargs").Argv<{
            q: string;
        } & {
            json: string;
        } & {
            t: string;
        }>;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        argv: () => import("yargs").Argv<{
            L: string;
        }>;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            d: boolean;
        } & {
            w: boolean;
        } & {
            app: string;
        } & {
            a: string;
        } & {
            A: string;
        } & {
            B: string;
        } & {
            H: string;
        } & {
            q: string;
        } & {
            json: string;
        } & {
            l: string;
        } & {
            L: string;
        } & {
            S: string;
        } & {
            s: string;
        } & {
            t: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            c: boolean;
        } & {
            q: string;
        } & {
            json: string;
        } & {
            t: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            undo: boolean;
        } & {
            format: string;
        } & {
            owner: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            drafts: boolean;
        } & {
            format: string;
        } & {
            "source-owner": string;
        } & {
            "target-owner": string;
        } & {
            title: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        argv: () => import("yargs").Argv<{
            format: string;
        } & {
            owner: string;
        }>;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        argv: () => import("yargs").Argv<{
            format: string;
        } & {
            id: string;
        }>;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            clear: boolean;
        } & {
            body: string;
        } & {
            date: string;
        } & {
            "field-id": string;
        } & {
            format: string;
        } & {
            id: string;
        } & {
            "iteration-id": string;
        } & {
            number: string;
        } & {
            "project-id": string;
        } & {
            "single-select-option-id": string;
        } & {
            text: string;
        } & {
            title: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            w: boolean;
        } & {
            format: string;
        } & {
            owner: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            d: boolean;
        } & {
            "generate-notes": boolean;
        } & {
            latest: boolean;
        } & {
            "notes-from-tag": boolean;
        } & {
            p: boolean;
        } & {
            "verify-tag": boolean;
        } & {
            "discussion-category": string;
        } & {
            n: string;
        } & {
            F: string;
        } & {
            "notes-start-tag": string;
        } & {
            target: string;
        } & {
            t: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            "exclude-drafts": boolean;
        } & {
            "exclude-pre-releases": boolean;
        } & {
            L: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            "add-readme": boolean;
        } & {
            c: boolean;
        } & {
            "disable-issues": boolean;
        } & {
            "disable-wiki": boolean;
        } & {
            "include-all-branches": boolean;
        } & {
            internal: boolean;
        } & {
            private: boolean;
        } & {
            public: boolean;
        } & {
            push: boolean;
        } & {
            d: string;
        } & {
            g: string;
        } & {
            h: string;
        } & {
            l: string;
        } & {
            r: string;
        } & {
            s: string;
        } & {
            t: string;
        } & {
            p: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => import("yargs").Argv<{
            archived: boolean;
        } & {
            fork: boolean;
        } & {
            "no-archived": boolean;
        } & {
            source: boolean;
        } & {
            q: string;
        } & {
            json: string;
        } & {
            l: string;
        } & {
            L: string;
        } & {
            t: string;
        } & {
            topic: string;
        } & {
            visibility: string;
        }>;
    })[];
} | {
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
    categories: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: any;
        argv: () => import("yargs").Argv<{}>;
    }[];
})[];
