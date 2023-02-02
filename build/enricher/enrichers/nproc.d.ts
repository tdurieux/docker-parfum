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
            all: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            ignore: string;
        }>;
    }[];
};
export default _default;
