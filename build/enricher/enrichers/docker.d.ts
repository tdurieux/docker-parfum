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
            v: boolean;
        } & {
            D: boolean;
        } & {
            config: string;
        } & {
            c: string;
        }>;
    }[];
};
export default _default;
