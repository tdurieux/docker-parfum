import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: ({
        mustHave: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<import("yargs").Omit<{
            "?": boolean;
        } & {
            version: boolean;
        } & {
            quiet: boolean;
        } & {
            v: boolean;
        } & {
            vv: boolean;
        } & {
            q: boolean;
        } & {
            V: boolean;
        } & {
            i: boolean;
        } & {
            U: boolean;
        } & {
            F: boolean;
        } & {
            e: boolean;
        } & {
            querytags: boolean;
        } & {
            setperms: boolean;
        } & {
            a: boolean;
        } & {
            changelog: boolean;
        } & {
            conflicts: boolean;
        } & {
            dump: boolean;
        } & {
            last: boolean;
        } & {
            filesbypkg: boolean;
        } & {
            obsoletes: boolean;
        } & {
            provides: boolean;
        } & {
            scripts: boolean;
        } & {
            c: boolean;
        } & {
            l: boolean;
        }, "i"> & {
            i: boolean;
        } & {
            d: boolean;
        } & {
            R: boolean;
        } & {
            s: boolean;
        } & {
            triggers: boolean;
        } & {
            rcfile: string;
        } & {
            pipe: string;
        } & {
            D: string;
        } & {
            undefine: string;
        } & {
            E: string;
        } & {
            g: string;
        } & {
            hdrid: string;
        } & {
            pkgid: string;
        } & {
            tid: string;
        } & {
            querybynumber: string;
        } & {
            triggeredby: string;
        } & {
            whatprovides: string;
        } & {
            whatrequires: string;
        } & {
            qf: string;
        } & {
            dbpath: string;
        } & {
            root: string;
        } & {
            f: string;
        } & {
            p: string;
        }>;
    } | {
        mustHave: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<{
            "?": boolean;
        } & {
            version: boolean;
        } & {
            quiet: boolean;
        } & {
            v: boolean;
        } & {
            vv: boolean;
        } & {
            q: boolean;
        } & {
            V: boolean;
        } & {
            i: boolean;
        } & {
            U: boolean;
        } & {
            F: boolean;
        } & {
            e: boolean;
        } & {
            querytags: boolean;
        } & {
            setperms: boolean;
        } & {
            a: boolean;
        } & {
            nodeps: boolean;
        } & {
            nofiles: boolean;
        } & {
            noscripts: boolean;
        } & {
            nodigest: boolean;
        } & {
            nosignature: boolean;
        } & {
            nolinkto: boolean;
        } & {
            nofiledigest: boolean;
        } & {
            nosize: boolean;
        } & {
            nouser: boolean;
        } & {
            nogroup: boolean;
        } & {
            nomtime: boolean;
        } & {
            nomode: boolean;
        } & {
            nordev: boolean;
        } & {
            nocaps: boolean;
        } & {
            rcfile: string;
        } & {
            pipe: string;
        } & {
            D: string;
        } & {
            undefine: string;
        } & {
            E: string;
        } & {
            g: string;
        } & {
            hdrid: string;
        } & {
            pkgid: string;
        } & {
            tid: string;
        } & {
            querybynumber: string;
        } & {
            triggeredby: string;
        } & {
            whatprovides: string;
        } & {
            whatrequires: string;
        } & {
            dbpath: string;
        } & {
            root: string;
        } & {
            f: string;
        } & {
            p: string;
        }>;
    } | {
        mustHave: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<{
            "?": boolean;
        } & {
            version: boolean;
        } & {
            quiet: boolean;
        } & {
            v: boolean;
        } & {
            vv: boolean;
        } & {
            q: boolean;
        } & {
            V: boolean;
        } & {
            i: boolean;
        } & {
            U: boolean;
        } & {
            F: boolean;
        } & {
            e: boolean;
        } & {
            querytags: boolean;
        } & {
            setperms: boolean;
        } & {
            excludedocs: boolean;
        } & {
            force: boolean;
        } & {
            allfiles: boolean;
        } & {
            badreloc: boolean;
        } & {
            ignoresize: boolean;
        } & {
            ignorearch: boolean;
        } & {
            ignoreos: boolean;
        } & {
            includedocs: boolean;
        } & {
            justdb: boolean;
        } & {
            nocollections: boolean;
        } & {
            nodeps: boolean;
        } & {
            nodigest: boolean;
        } & {
            nosignature: boolean;
        } & {
            noplugins: boolean;
        } & {
            noorder: boolean;
        } & {
            noscripts: boolean;
        } & {
            notriggers: boolean;
        } & {
            oldpackage: boolean;
        } & {
            percent: boolean;
        } & {
            replacefiles: boolean;
        } & {
            replacepkgs: boolean;
        } & {
            test: boolean;
        } & {
            h: boolean;
        } & {
            rcfile: string;
        } & {
            pipe: string;
        } & {
            D: string;
        } & {
            undefine: string;
        } & {
            E: string;
        } & {
            prefix: string;
        } & {
            relocate: string;
        } & {
            dbpath: string;
        } & {
            root: string;
        } & {
            excludepath: string;
        }>;
    } | {
        mustHave: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<{
            "?": boolean;
        } & {
            version: boolean;
        } & {
            quiet: boolean;
        } & {
            v: boolean;
        } & {
            vv: boolean;
        } & {
            q: boolean;
        } & {
            V: boolean;
        } & {
            i: boolean;
        } & {
            U: boolean;
        } & {
            F: boolean;
        } & {
            e: boolean;
        } & {
            querytags: boolean;
        } & {
            setperms: boolean;
        } & {
            allmatches: boolean;
        } & {
            justdb: boolean;
        } & {
            nodeps: boolean;
        } & {
            noscripts: boolean;
        } & {
            notriggers: boolean;
        } & {
            test: boolean;
        } & {
            rcfile: string;
        } & {
            pipe: string;
        } & {
            D: string;
        } & {
            undefine: string;
        } & {
            E: string;
        } & {
            dbpath: string;
        } & {
            root: string;
        }>;
    })[];
};
export default _default;
