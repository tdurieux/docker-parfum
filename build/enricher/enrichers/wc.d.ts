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
            c: boolean;
        } & {
            l: boolean;
        } & {
            m: boolean;
        } & {
            w: boolean;
        }>;
    }[];
};
export default _default;
