import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: {
        fixupNonSpacedArgs: boolean;
        cmd: string;
        name: string;
        prefix: string;
        argv: () => Argv<{
            j: string;
        }>;
    }[];
};
export default _default;
