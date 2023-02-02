import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            e: boolean;
        } & {
            s: boolean;
        } & {
            t: boolean;
        } & {
            u: boolean;
        } & {
            v: boolean;
        } & {
            b: string;
        } & {
            n: string;
        } & {
            l: string;
        }>;
    }[];
};
export default _default;
