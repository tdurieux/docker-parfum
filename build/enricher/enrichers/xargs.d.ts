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
            0: boolean;
        } & {
            o: boolean;
        } & {
            p: boolean;
        } & {
            r: boolean;
        } & {
            t: boolean;
        } & {
            x: boolean;
        } & {
            E: string;
        } & {
            I: string;
        } & {
            J: string;
        } & {
            L: string;
        } & {
            P: string;
        } & {
            R: string;
        } & {
            S: string;
        } & {
            n: string;
        }>;
    }[];
};
export default _default;
