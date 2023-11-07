import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        postProcess: {
            tagLastElement: {
                source: string;
                tag: string;
            };
        }[];
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            p: boolean;
        } & {
            v: boolean;
        } & {
            Z: boolean;
        } & {
            help: boolean;
        } & {
            version: boolean;
        } & {
            m: string;
        } & {
            context: string;
        }>;
    }[];
};
export default _default;
