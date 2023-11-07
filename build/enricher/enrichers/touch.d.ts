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
        argv: () => Argv<{
            a: boolean;
        } & {
            c: boolean;
        } & {
            h: boolean;
        } & {
            m: boolean;
        } & {
            A: string;
        } & {
            d: string;
        } & {
            t: string;
        } & {
            r: string;
        }>;
    }[];
};
export default _default;
