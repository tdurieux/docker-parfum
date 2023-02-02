import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        booleans: string[];
        argv: () => Argv<{
            incognito: boolean;
        } & {
            "user-data-dir": string;
        }>;
    }[];
};
export default _default;
