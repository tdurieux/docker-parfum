import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: any[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            help: boolean;
        }>;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
            h: string;
        }>;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
            t: boolean;
        } & {
            h: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
            help: boolean;
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
            R: string;
        }>;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
            L: string;
        }>;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
            format: string;
        } & {
            owner: string;
        }>;
        booleans?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
        strings: string[];
        argv: () => Argv<{
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
};
export default _default;
