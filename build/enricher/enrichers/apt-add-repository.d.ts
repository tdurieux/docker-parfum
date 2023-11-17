import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            h: boolean;
        } & {
            m: boolean;
        } & {
            r: boolean;
        } & {
            s: boolean;
        } & {
            y: boolean;
        } & {
            u: boolean;
        } & {
            k: string;
        }>;
    }[];
};
export default _default;
