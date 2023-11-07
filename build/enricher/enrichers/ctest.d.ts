import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        paths: any[];
        booleans: any[];
        counts: any[];
        argv: () => Argv<{}>;
    }[];
};
export default _default;
