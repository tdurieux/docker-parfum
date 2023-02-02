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
        cmd: string;
        name: string;
        prefix: string;
        paths: string[];
        argv: () => Argv<{
            exclude: string;
        } & {
            "exclude-ignore": string;
        } & {
            "exclude-ignore-recursive": string;
        } & {
            "exclude-tag": string;
        } & {
            "exclude-tag-all": string;
        } & {
            "exclude-tag-under": string;
        } & {
            "record-size": string;
        } & {
            b: string;
        } & {
            H: string;
        } & {
            V: string;
        } & {
            I: string;
        } & {
            N: string;
        } & {
            "newer-mtime": string;
        } & {
            suffix: string;
        } & {
            transform: string;
        } & {
            xform: string;
        } & {
            strip: string;
        } & {
            "strip-components": string;
        } & {
            "xattrs-exclude": string;
        } & {
            "xattrs-include": string;
        } & {
            "add-file": string;
        } & {
            f: string;
        } & {
            C: string;
        } & {
            T: (string | number)[];
        }>;
    }[];
};
export default _default;
