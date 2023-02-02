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
            n: boolean;
        } & {
            e: boolean;
        } & {
            E: boolean;
        } & {
            version: boolean;
        } & {
            help: boolean;
        }>;
    }[];
};
export default _default;
