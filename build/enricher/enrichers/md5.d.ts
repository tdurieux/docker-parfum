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
            p: boolean;
        } & {
            q: boolean;
        } & {
            r: boolean;
        } & {
            t: boolean;
        } & {
            x: boolean;
        } & {
            s: string;
        }>;
    }[];
};
export default _default;
