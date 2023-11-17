import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        strings: string[];
        argv: () => Argv<{
            n: string;
        } & {
            c: string;
        }>;
    }[];
};
export default _default;
