import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: ({
        captureAfterThirdNonOption: string;
        postProcess: {
            subCommand: string;
        }[];
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            d: boolean;
        } & {
            i: boolean;
        } & {
            privileged: boolean;
        } & {
            t: boolean;
        } & {
            "detach-keys": string;
        } & {
            e: string;
        } & {
            "env-file": string;
        } & {
            u: string;
        } & {
            w: string;
        }>;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            a: boolean;
        } & {
            l: boolean;
        } & {
            "no-trunc": boolean;
        } & {
            q: boolean;
        } & {
            s: boolean;
        } & {
            f: string;
        } & {
            format: string;
        } & {
            n: string;
        }>;
        captureAfterThirdNonOption?: undefined;
        postProcess?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            load: boolean;
        } & {
            "no-cache": boolean;
        } & {
            pull: boolean;
        } & {
            push: boolean;
        } & {
            q: boolean;
        } & {
            "add-host": string;
        } & {
            allow: string;
        } & {
            attest: string;
        } & {
            "build-arg": string;
        } & {
            "build-context": string;
        } & {
            builder: string;
        } & {
            "cache-from": string;
        } & {
            "cache-to": string;
        } & {
            "cgroup-parent": string;
        } & {
            f: string;
        } & {
            iidfile: string;
        } & {
            label: string;
        } & {
            "metadata-file": string;
        } & {
            network: string;
        } & {
            "no-cache-filter": string;
        } & {
            o: string;
        } & {
            platform: string;
        } & {
            progress: string;
        } & {
            provenance: string;
        } & {
            sbom: string;
        } & {
            secret: string;
        } & {
            "shm-size": string;
        } & {
            ssh: string;
        } & {
            t: string;
        } & {
            target: string;
        } & {
            ulimit: string;
        }>;
        captureAfterThirdNonOption?: undefined;
        postProcess?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            a: boolean;
        } & {
            "disable-content-trust": boolean;
        } & {
            q: boolean;
        } & {
            platform: string;
        }>;
        captureAfterThirdNonOption?: undefined;
        postProcess?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            a: boolean;
        } & {
            "disable-content-trust": boolean;
        } & {
            q: boolean;
        }>;
        captureAfterThirdNonOption?: undefined;
        postProcess?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            a: boolean;
        } & {
            digests: boolean;
        } & {
            "no-trunc": boolean;
        } & {
            q: boolean;
        } & {
            f: string;
        } & {
            format: string;
        }>;
        captureAfterThirdNonOption?: undefined;
        postProcess?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            h: boolean;
        } & {
            "password-stdin": boolean;
        } & {
            p: string;
        } & {
            u: string;
        }>;
        captureAfterThirdNonOption?: undefined;
        postProcess?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            h: boolean;
        } & {
            "client-id": string;
        } & {
            "client-secret": string;
        } & {
            "cloud-name": string;
        } & {
            "tenant-id": string;
        }>;
        captureAfterThirdNonOption?: undefined;
        postProcess?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            h: boolean;
        }>;
        captureAfterThirdNonOption?: undefined;
        postProcess?: undefined;
        strings?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            "no-trunc": boolean;
        } & {
            f: string;
        } & {
            format: string;
        } & {
            limit: string;
        }>;
        captureAfterThirdNonOption?: undefined;
        postProcess?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        strings: string[];
        argv: () => Argv<{
            h: boolean;
        } & {
            f: string;
        } & {
            kubeconfig: string;
        }>;
        captureAfterThirdNonOption?: undefined;
        postProcess?: undefined;
    } | {
        cmd: string;
        name: string;
        prefix: string;
        strings: string[];
        argv: () => Argv<{
            f: string;
        }>;
        captureAfterThirdNonOption?: undefined;
        postProcess?: undefined;
        booleans?: undefined;
    })[];
};
export default _default;
