import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    categories: string[];
    prefix: string;
    scenarios: {
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            "color-diagnostics": boolean;
        } & {
            "disable-clang-target": boolean;
        } & {
            "enable-builtin-module": boolean;
        } & {
            "gdwarf-types": boolean;
        } & {
            "gline-tables-only": boolean;
        } & {
            gnone: boolean;
        } & {
            g: boolean;
        } & {
            help: boolean;
        } & {
            "index-include-locals": boolean;
        } & {
            "link-objc-runtime": boolean;
        } & {
            "no-color-diagnostics": boolean;
        } & {
            "no-warnings-as-errors": boolean;
        } & {
            nostdimport: boolean;
        } & {
            Onone: boolean;
        } & {
            Osize: boolean;
        } & {
            Ounchecked: boolean;
        } & {
            O: boolean;
        } & {
            "pretty-print": boolean;
        } & {
            "print-target-info": boolean;
        } & {
            "Rcross-import": boolean;
        } & {
            "Rmodule-loading": boolean;
        } & {
            "Rpass-missed=<value>": boolean;
        } & {
            "Rpass=<value>": boolean;
        } & {
            "static-executable": boolean;
        } & {
            "static-stdlib": boolean;
        } & {
            "suppress-remarks": boolean;
        } & {
            "suppress-warnings": boolean;
        } & {
            "use-ld=<value>": boolean;
        } & {
            version: boolean;
        } & {
            v: boolean;
        } & {
            "warn-concurrency": boolean;
        } & {
            "warnings-as-errors": boolean;
        } & {
            "access-notes-path": string;
        } & {
            "allowable-client": string;
        } & {
            "assert-config": string;
        } & {
            "clang-build-session-file": string;
        } & {
            "clang-target": string;
        } & {
            "continue-building-after-errors": string;
        } & {
            "coverage-prefix-map": string;
        } & {
            "cxx-interoperability-mode=<value>": string;
        } & {
            "debug-info-format=<value>": string;
        } & {
            "debug-info-store-invocation": string;
        } & {
            "debug-prefix-map": string;
        } & {
            "diagnostic-style": string;
        } & {
            "disable-actor-data-race-checks": string;
        } & {
            "disable-autolinking-runtime-compatibility-concurrency": string;
        } & {
            "disable-autolinking-runtime-compatibility-dynamic-replacements": string;
        } & {
            "disable-autolinking-runtime-compatibility": string;
        } & {
            "disable-incremental-imports": string;
        } & {
            "disable-only-one-dependency-file": string;
        } & {
            "disallow-use-new-driver": string;
        } & {
            D: string;
        } & {
            "embed-tbd-for-module": string;
        } & {
            "emit-module-dependencies-path": string;
        } & {
            "emit-module-serialize-diagnostics-path": string;
        } & {
            "enable-actor-data-race-checks": string;
        } & {
            "enable-autolinking-runtime-compatibility-bytecode-layouts": string;
        } & {
            "enable-bare-slash-regex": string;
        } & {
            "enable-experimental-additive-arithmetic-derivation": string;
        } & {
            "enable-experimental-concise-pound-file": string;
        } & {
            "enable-experimental-feature": string;
        } & {
            "enable-experimental-forward-mode-differentiation": string;
        } & {
            "enable-incremental-imports": string;
        } & {
            "enable-library-evolution": string;
        } & {
            "enable-only-one-dependency-file": string;
        } & {
            "enable-upcoming-feature": string;
        } & {
            "enforce-exclusivity=<enforcement>": string;
        } & {
            "explain-module-dependency": string;
        } & {
            "export-as": string;
        } & {
            "external-plugin-path": string;
        } & {
            e: string;
        } & {
            "file-compilation-dir": string;
        } & {
            "file-prefix-map": string;
        } & {
            framework: string;
        } & {
            Fsystem: string;
        } & {
            F: string;
        } & {
            "index-ignore-clang-modules": string;
        } & {
            "index-store-path": string;
        } & {
            "index-unit-output-path": string;
        } & {
            I: string;
        } & {
            j: string;
        } & {
            libc: string;
        } & {
            "load-plugin-executable": string;
        } & {
            "load-plugin-library": string;
        } & {
            locale: string;
        } & {
            "localization-path": string;
        } & {
            L: string;
        } & {
            l: string;
        } & {
            "module-abi-name": string;
        } & {
            "module-alias": string;
        } & {
            "module-cache-path": string;
        } & {
            "module-link-name": string;
        } & {
            "module-name": string;
        } & {
            "num-threads": string;
        } & {
            "package-name": string;
        } & {
            "plugin-path": string;
        } & {
            "prefix-serialized-debugging-options": string;
        } & {
            "print-educational-notes": string;
        } & {
            "remove-runtime-asserts": string;
        } & {
            "Rindexing-system-module": string;
        } & {
            "Rskip-explicit-interface-build": string;
        } & {
            "runtime-compatibility-version": string;
        } & {
            "save-optimization-record-passes": string;
        } & {
            "save-optimization-record-path": string;
        } & {
            "save-optimization-record=<format>": string;
        } & {
            "save-optimization-record": string;
        } & {
            sdk: string;
        } & {
            "serialize-diagnostics-path": string;
        } & {
            "strict-concurrency=<value>": string;
        } & {
            "swift-isa-ptrauth-mode": string;
        } & {
            "swift-ptrauth-mode": string;
        } & {
            "swift-version": string;
        } & {
            "target-cpu": string;
        } & {
            "target-min-inlining-version": string;
        } & {
            "target-variant": string;
        } & {
            target: string;
        } & {
            "user-module-version": string;
        } & {
            "validate-clang-modules-once": string;
        } & {
            vfsoverlay: string;
        } & {
            "visualc-tools-root": string;
        } & {
            "visualc-tools-version": string;
        } & {
            "warn-implicit-overrides": string;
        } & {
            "warn-swift3-objc-inference-complete": string;
        } & {
            "warn-swift3-objc-inference-minimal": string;
        } & {
            "windows-sdk-root": string;
        } & {
            "windows-sdk-version": string;
        } & {
            "working-directory": string;
        } & {
            Xcc: string;
        } & {
            Xlinker: string;
        }>;
    }[];
};
export default _default;
