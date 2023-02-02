import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: {
        captureAllAfter: {
            match: string[];
            name: string;
        };
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        argv: () => Argv<{
            f: string;
        } & {
            F: string;
        } & {
            c: string;
        } & {
            z: string;
        } & {
            d: (string | number)[];
        }>;
    }[];
};
export default _default;
