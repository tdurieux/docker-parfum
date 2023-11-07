import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        cmd: string;
        name: string;
        categories: string[];
        prefix: string;
        paths: any[];
        booleans: any[];
        counts: any[];
        argv: () => Argv<{}>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        paths: any[];
        booleans: any[];
        counts: any[];
        argv: () => Argv<{}>;
        categories?: undefined;
    })[];
};
export default _default;
