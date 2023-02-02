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
            d: boolean;
        } & {
            u: boolean;
        } & {
            q: boolean;
        } & {
            t: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            suffix: string;
        } & {
            p: string;
        }>;
    }[];
};
export default _default;
