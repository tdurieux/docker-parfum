import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            help: boolean;
        } & {
            version: boolean;
        }>;
    } | {
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
        categories?: undefined;
    })[];
};
export default _default;
