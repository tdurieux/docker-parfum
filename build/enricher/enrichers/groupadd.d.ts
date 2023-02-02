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
            f: boolean;
        } & {
            h: boolean;
        } & {
            o: boolean;
        } & {
            r: boolean;
        } & {
            g: string;
        } & {
            R: string;
        } & {
            k: (string | number)[];
        }>;
    }[];
};
export default _default;
