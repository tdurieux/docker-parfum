import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        fixBadLongNames: string[];
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<import("yargs").Omit<{
            i: boolean;
        } & {
            a: boolean;
        } & {
            n: boolean;
        } & {
            race: boolean;
        } & {
            msan: boolean;
        } & {
            v: boolean;
        } & {
            work: boolean;
        } & {
            x: boolean;
        } & {
            linkshared: boolean;
        } & {
            c: boolean;
        } & {
            d: boolean;
        } & {
            f: boolean;
        } & {
            t: boolean;
        } & {
            u: boolean;
        }, "v"> & {
            v: boolean;
        } & {
            fix: boolean;
        } & {
            insecure: boolean;
        } & {
            asmflags: string;
        } & {
            buildmode: string;
        } & {
            compiler: string;
        } & {
            gccgoflags: string;
        } & {
            gcflags: string;
        } & {
            installsuffix: string;
        } & {
            ldflags: string;
        } & {
            mod: string;
        } & {
            pkgdir: string;
        } & {
            tags: string;
        } & {
            toolexec: string;
        } & {
            exec: string;
        } & {
            o: string;
        }>;
        captureAllAfter?: undefined;
    } | {
        fixBadLongNames: string[];
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            all: boolean;
        }>;
        categories?: undefined;
        paths?: undefined;
        counts?: undefined;
        captureAllAfter?: undefined;
    } | {
        fixBadLongNames: string[];
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            n: boolean;
        } & {
            x: boolean;
        }>;
        categories?: undefined;
        paths?: undefined;
        counts?: undefined;
        captureAllAfter?: undefined;
    } | {
        fixBadLongNames: string[];
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        prefix: string;
        argv: () => Argv<{}>;
        categories?: undefined;
        paths?: undefined;
        booleans?: undefined;
        counts?: undefined;
        captureAllAfter?: undefined;
    } | {
        fixBadLongNames: string[];
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            i: boolean;
        } & {
            a: boolean;
        } & {
            n: boolean;
        } & {
            race: boolean;
        } & {
            msan: boolean;
        } & {
            v: boolean;
        } & {
            work: boolean;
        } & {
            x: boolean;
        } & {
            linkshared: boolean;
        } & {
            c: boolean;
        } & {
            asmflags: string;
        } & {
            buildmode: string;
        } & {
            compiler: string;
        } & {
            gccgoflags: string;
        } & {
            gcflags: string;
        } & {
            installsuffix: string;
        } & {
            ldflags: string;
        } & {
            mod: string;
        } & {
            pkgdir: string;
        } & {
            tags: string;
        } & {
            toolexec: string;
        } & {
            exec: string;
        } & {
            o: string;
        }>;
        counts?: undefined;
        captureAllAfter?: undefined;
    } | {
        captureAllAfter: {
            match: string[];
            name: string;
        };
        fixBadLongNames: string[];
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            i: boolean;
        } & {
            a: boolean;
        } & {
            n: boolean;
        } & {
            race: boolean;
        } & {
            msan: boolean;
        } & {
            v: boolean;
        } & {
            work: boolean;
        } & {
            x: boolean;
        } & {
            linkshared: boolean;
        } & {
            c: boolean;
        } & {
            asmflags: string;
        } & {
            buildmode: string;
        } & {
            compiler: string;
        } & {
            gccgoflags: string;
        } & {
            gcflags: string;
        } & {
            installsuffix: string;
        } & {
            ldflags: string;
        } & {
            mod: string;
        } & {
            pkgdir: string;
        } & {
            tags: string;
        } & {
            toolexec: string;
        } & {
            exec: string;
        } & {
            o: string;
        }>;
        counts?: undefined;
    } | {
        fixBadLongNames: string[];
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            cache: boolean;
        }>;
        categories?: undefined;
        paths?: undefined;
        counts?: undefined;
        captureAllAfter?: undefined;
    } | {
        fixBadLongNames: string[];
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            json: boolean;
        }>;
        paths?: undefined;
        counts?: undefined;
        captureAllAfter?: undefined;
    })[];
};
export default _default;
