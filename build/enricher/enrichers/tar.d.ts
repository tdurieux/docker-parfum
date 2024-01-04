import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        fixupBadFlag: boolean;
        mustHave: string[];
        postProcess: {
            tagLastElement: {
                source: string;
                tag: string;
            };
        }[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        strings: string[];
        argv: () => Argv<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<{
            x: boolean;
        } & {
            z: boolean;
        } & {
            c: boolean;
        } & {
            A: boolean;
        }, "A"> & {
            A: boolean;
        } & {
            t: boolean;
        } & {
            d: boolean;
        }, "d"> & {
            d: boolean;
        } & {
            "test-label": boolean;
        } & {
            get: boolean;
        } & {
            delete: boolean;
        } & {
            acls: boolean;
        } & {
            "no-acls": boolean;
        } & {
            "no-selinux": boolean;
        } & {
            "no-xattrs": boolean;
        } & {
            selinux: boolean;
        } & {
            xattrs: boolean;
        } & {
            u: boolean;
        } & {
            v: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            k: boolean;
        } & {
            "keep-directory-symlink": boolean;
        } & {
            "keep-newer-files": boolean;
        } & {
            "no-overwrite-dir": boolean;
        } & {
            overwrite: boolean;
        } & {
            "overwrite-dir": boolean;
        } & {
            "recursive-unlink": boolean;
        } & {
            "remove-files": boolean;
        } & {
            "skip-old-files": boolean;
        } & {
            G: boolean;
        } & {
            n: boolean;
        } & {
            "no-seek": boolean;
        } & {
            "no-check-device": boolean;
        } & {
            "check-device": boolean;
        } & {
            W: boolean;
        } & {
            U: boolean;
        } & {
            S: boolean;
        } & {
            s: boolean;
        }, "s"> & {
            s: boolean;
        } & {
            p: boolean;
        }, "p"> & {
            p: boolean;
        } & {
            "numeric-owner": boolean;
        } & {
            "no-same-owner": boolean;
        } & {
            "no-same-permissions": boolean;
        } & {
            "no-delay-directory-restore": boolean;
        } & {
            m: boolean;
        } & {
            "clamp-mtime": boolean;
        } & {
            "delay-directory-restore": boolean;
        } & {
            r: boolean;
        }, "t"> & {
            t: boolean;
        } & {
            j: boolean;
        } & {
            J: boolean;
        } & {
            a: boolean;
        } & {
            lzip: boolean;
        } & {
            lzma: boolean;
        } & {
            lzop: boolean;
        } & {
            "ignore-command-error": boolean;
        } & {
            "no-ignore-command-error": boolean;
        } & {
            O: boolean;
        } & {
            "force-local": boolean;
        } & {
            M: boolean;
        } & {
            "no-auto-compress": boolean;
        }, "z"> & {
            z: boolean;
        } & {
            Z: boolean;
        } & {
            h: boolean;
        } & {
            "hard-dereference": boolean;
        } & {
            P: boolean;
        } & {
            "one-file-system": boolean;
        } & {
            l: boolean;
        } & {
            "full-time": boolean;
        } & {
            posix: boolean;
        } & {
            "old-archive": boolean;
        } & {
            portability: boolean;
        } & {
            B: boolean;
        } & {
            i: boolean;
        } & {
            unquote: boolean;
        } & {
            null: boolean;
        } & {
            recursion: boolean;
        } & {
            "no-recursion": boolean;
        } & {
            "no-verbatim-files-from": boolean;
        } & {
            "no-null": boolean;
        } & {
            "exclude-vcs": boolean;
        } & {
            "exclude-vcs-ignores": boolean;
        } & {
            "exclude-backups": boolean;
        } & {
            "exclude-caches": boolean;
        } & {
            "exclude-caches-all": boolean;
        } & {
            "exclude-caches-under": boolean;
        } & {
            exclude: string;
        } & {
            "exclude-ignore": string;
        } & {
            "exclude-ignore-recursive": string;
        } & {
            "exclude-tag": string;
        } & {
            "exclude-tag-all": string;
        } & {
            "exclude-tag-under": string;
        } & {
            "record-size": string;
        } & {
            b: string;
        } & {
            H: string;
        } & {
            V: string;
        } & {
            I: string;
        } & {
            N: string;
        } & {
            "newer-mtime": string;
        } & {
            suffix: string;
        } & {
            transform: string;
        } & {
            xform: string;
        } & {
            strip: string;
        } & {
            "strip-components": string;
        } & {
            "xattrs-exclude": string;
        } & {
            "xattrs-include": string;
        } & {
            "add-file": string;
        } & {
            f: string;
        } & {
            C: string;
        } & {
            T: (string | number)[];
        }>;
    } | {
        postProcess: {
            tagLastElement: {
                source: string;
                tag: string;
            };
        }[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        strings: string[];
        argv: () => Argv<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<{
            x: boolean;
        } & {
            z: boolean;
        } & {
            c: boolean;
        } & {
            A: boolean;
        }, "A"> & {
            A: boolean;
        } & {
            t: boolean;
        } & {
            d: boolean;
        }, "d"> & {
            d: boolean;
        } & {
            "test-label": boolean;
        } & {
            get: boolean;
        } & {
            delete: boolean;
        } & {
            acls: boolean;
        } & {
            "no-acls": boolean;
        } & {
            "no-selinux": boolean;
        } & {
            "no-xattrs": boolean;
        } & {
            selinux: boolean;
        } & {
            xattrs: boolean;
        } & {
            u: boolean;
        } & {
            v: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            k: boolean;
        } & {
            "keep-directory-symlink": boolean;
        } & {
            "keep-newer-files": boolean;
        } & {
            "no-overwrite-dir": boolean;
        } & {
            overwrite: boolean;
        } & {
            "overwrite-dir": boolean;
        } & {
            "recursive-unlink": boolean;
        } & {
            "remove-files": boolean;
        } & {
            "skip-old-files": boolean;
        } & {
            G: boolean;
        } & {
            n: boolean;
        } & {
            "no-seek": boolean;
        } & {
            "no-check-device": boolean;
        } & {
            "check-device": boolean;
        } & {
            W: boolean;
        } & {
            U: boolean;
        } & {
            S: boolean;
        } & {
            s: boolean;
        }, "s"> & {
            s: boolean;
        } & {
            p: boolean;
        }, "p"> & {
            p: boolean;
        } & {
            "numeric-owner": boolean;
        } & {
            "no-same-owner": boolean;
        } & {
            "no-same-permissions": boolean;
        } & {
            "no-delay-directory-restore": boolean;
        } & {
            m: boolean;
        } & {
            "clamp-mtime": boolean;
        } & {
            "delay-directory-restore": boolean;
        } & {
            r: boolean;
        }, "t"> & {
            t: boolean;
        } & {
            j: boolean;
        } & {
            J: boolean;
        } & {
            a: boolean;
        } & {
            lzip: boolean;
        } & {
            lzma: boolean;
        } & {
            lzop: boolean;
        } & {
            "ignore-command-error": boolean;
        } & {
            "no-ignore-command-error": boolean;
        } & {
            O: boolean;
        } & {
            "force-local": boolean;
        } & {
            M: boolean;
        } & {
            "no-auto-compress": boolean;
        }, "z"> & {
            z: boolean;
        } & {
            Z: boolean;
        } & {
            h: boolean;
        } & {
            "hard-dereference": boolean;
        } & {
            P: boolean;
        } & {
            "one-file-system": boolean;
        } & {
            l: boolean;
        } & {
            "full-time": boolean;
        } & {
            posix: boolean;
        } & {
            "old-archive": boolean;
        } & {
            portability: boolean;
        } & {
            B: boolean;
        } & {
            i: boolean;
        } & {
            unquote: boolean;
        } & {
            null: boolean;
        } & {
            recursion: boolean;
        } & {
            "no-recursion": boolean;
        } & {
            "no-verbatim-files-from": boolean;
        } & {
            "no-null": boolean;
        } & {
            "exclude-vcs": boolean;
        } & {
            "exclude-vcs-ignores": boolean;
        } & {
            "exclude-backups": boolean;
        } & {
            "exclude-caches": boolean;
        } & {
            "exclude-caches-all": boolean;
        } & {
            "exclude-caches-under": boolean;
        } & {
            exclude: string;
        } & {
            "exclude-ignore": string;
        } & {
            "exclude-ignore-recursive": string;
        } & {
            "exclude-tag": string;
        } & {
            "exclude-tag-all": string;
        } & {
            "exclude-tag-under": string;
        } & {
            "record-size": string;
        } & {
            b: string;
        } & {
            H: string;
        } & {
            V: string;
        } & {
            I: string;
        } & {
            N: string;
        } & {
            "newer-mtime": string;
        } & {
            suffix: string;
        } & {
            transform: string;
        } & {
            xform: string;
        } & {
            strip: string;
        } & {
            "strip-components": string;
        } & {
            "xattrs-exclude": string;
        } & {
            "xattrs-include": string;
        } & {
            "add-file": string;
        } & {
            f: string;
        } & {
            C: string;
        } & {
            T: (string | number)[];
        }>;
        fixupBadFlag?: undefined;
        mustHave?: undefined;
    })[];
};
export default _default;
