import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<{
            verbose: boolean;
        } & {
            help: boolean;
        } & {
            D: boolean;
        } & {
            P: boolean;
        } & {
            O: boolean;
        } & {
            E: boolean;
        } & {
            T: boolean;
        } & {
            N: boolean;
        } & {
            audit: boolean;
        } & {
            mutex: string;
        } & {
            "cache-folder": string;
        }>;
        captureAfterThirdNonOption?: undefined;
        captureAfterSecondNonOption?: undefined;
        rejectIfIs?: undefined;
        rejectIf?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<import("yargs").Omit<{
            verbose: boolean;
        } & {
            help: boolean;
        }, "verbose"> & {
            verbose: boolean;
        } & {
            json: boolean;
        } & {
            mutex: string;
        } & {
            "cache-folder": string;
        }>;
        captureAfterThirdNonOption?: undefined;
        captureAfterSecondNonOption?: undefined;
        rejectIfIs?: undefined;
        rejectIf?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<{
            verbose: boolean;
        } & {
            help: boolean;
        } & {
            I: boolean;
        } & {
            F: boolean;
        } & {
            mutex: string;
        } & {
            "cache-folder": string;
        }>;
        captureAfterThirdNonOption?: undefined;
        captureAfterSecondNonOption?: undefined;
        rejectIfIs?: undefined;
        rejectIf?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            verbose: boolean;
        } & {
            help: boolean;
        } & {
            mutex: string;
        } & {
            "cache-folder": string;
        }>;
        counts?: undefined;
        captureAfterThirdNonOption?: undefined;
        captureAfterSecondNonOption?: undefined;
        rejectIfIs?: undefined;
        rejectIf?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<{
            verbose: boolean;
        } & {
            help: boolean;
        } & {
            mutex: string;
        } & {
            pattern: string;
        } & {
            "cache-folder": string;
        }>;
        captureAfterThirdNonOption?: undefined;
        captureAfterSecondNonOption?: undefined;
        rejectIfIs?: undefined;
        rejectIf?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<{
            verbose: boolean;
        } & {
            help: boolean;
        } & {
            "check-files": boolean;
        } & {
            flat: boolean;
        } & {
            force: boolean;
        } & {
            har: boolean;
        } & {
            "ignore-scripts": boolean;
        } & {
            "no-lockfile": boolean;
        } & {
            "pure-lockfile": boolean;
        } & {
            focus: boolean;
        } & {
            "frozen-lockfile": boolean;
        } & {
            silent: boolean;
        } & {
            "ignore-engines": boolean;
        } & {
            "ignore-optional": boolean;
        } & {
            offline: boolean;
        } & {
            "non-interactive": boolean;
        } & {
            "update-checksums": boolean;
        } & {
            audit: boolean;
        } & {
            "no-bin-links": boolean;
        } & {
            "link-duplicates": boolean;
        } & {
            mutex: string;
        } & {
            prod: string;
        } & {
            "cache-folder": string;
        } & {
            "modules-folder": string;
        }>;
        captureAfterThirdNonOption?: undefined;
        captureAfterSecondNonOption?: undefined;
        rejectIfIs?: undefined;
        rejectIf?: undefined;
    } | {
        captureAfterThirdNonOption: string;
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            verbose: boolean;
        } & {
            help: boolean;
        } & {
            mutex: string;
        } & {
            "cache-folder": string;
        }>;
        counts?: undefined;
        captureAfterSecondNonOption?: undefined;
        rejectIfIs?: undefined;
        rejectIf?: undefined;
    } | {
        captureAfterSecondNonOption: string;
        rejectIfIs: {
            name: string;
            values: string[];
        };
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            verbose: boolean;
        } & {
            help: boolean;
        } & {
            mutex: string;
        } & {
            "cache-folder": string;
        }>;
        counts?: undefined;
        captureAfterThirdNonOption?: undefined;
        rejectIf?: undefined;
    } | {
        rejectIf: string[];
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        counts: any[];
        argv: () => Argv<{
            verbose: boolean;
        } & {
            help: boolean;
        } & {
            "check-files": boolean;
        } & {
            flat: boolean;
        } & {
            force: boolean;
        } & {
            har: boolean;
        } & {
            "ignore-scripts": boolean;
        } & {
            "no-lockfile": boolean;
        } & {
            "pure-lockfile": boolean;
        } & {
            focus: boolean;
        } & {
            "frozen-lockfile": boolean;
        } & {
            silent: boolean;
        } & {
            "ignore-engines": boolean;
        } & {
            "ignore-optional": boolean;
        } & {
            offline: boolean;
        } & {
            "non-interactive": boolean;
        } & {
            "update-checksums": boolean;
        } & {
            audit: boolean;
        } & {
            "no-bin-links": boolean;
        } & {
            "link-duplicates": boolean;
        } & {
            mutex: string;
        } & {
            prod: string;
        } & {
            "cache-folder": string;
        } & {
            "modules-folder": string;
        }>;
        captureAfterThirdNonOption?: undefined;
        captureAfterSecondNonOption?: undefined;
        rejectIfIs?: undefined;
    })[];
};
export default _default;
