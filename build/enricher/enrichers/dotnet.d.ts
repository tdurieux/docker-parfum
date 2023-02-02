import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: {
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            help: boolean;
        } & {
            version: boolean;
        }>;
    }[];
};
export default _default;
