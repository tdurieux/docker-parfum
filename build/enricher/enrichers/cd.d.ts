import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: {
        postProcess: {
            tagLastElement: {
                source: string;
                tag: string;
            };
        }[];
        replaceEmptyArgsWith: string[];
        cmd: string;
        name: string;
        prefix: string;
        argv: () => Argv<{}>;
    }[];
};
export default _default;
