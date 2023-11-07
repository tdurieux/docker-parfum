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
        booleans: string[];
        argv: () => Argv<{
            y: boolean;
        } & {
            q: boolean;
        } & {
            nogpgcheck: boolean;
        } & {
            setopt: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            y: boolean;
        } & {
            q: boolean;
        } & {
            nogpgcheck: boolean;
        } & {
            setopt: string;
        }>;
        categories?: undefined;
    })[];
};
export default _default;
