import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "with-ssl": boolean;
        } & {
            build: string;
        } & {
            prefix: string;
        }>;
    }[];
};
export default _default;
