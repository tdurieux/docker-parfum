import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        strings: string[];
        argv: () => Argv<{
            j: string;
        }>;
    }[];
};
export default _default;
