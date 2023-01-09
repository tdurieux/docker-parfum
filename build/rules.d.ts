import { nodeType } from "@tdurieux/dinghy";
export interface Rule {
    scope: "INTRA-DIRECTIVE" | "INTER-DIRECTIVE";
    name: string;
    description: string;
    notes?: string;
    source: string;
    query: nodeType.QueryI;
    consequent: {
        inNode?: nodeType.QueryI;
        beforeNode?: nodeType.QueryI;
        afterNode?: nodeType.QueryI;
    };
    repair: (node: nodeType.DockerOpsNodeType) => Promise<void>;
}
export declare const curlUseFlagF: Rule;
export declare const curlUseFlagL: Rule;
export declare const yarnCacheCleanAfterInstall: Rule;
export declare const npmCacheCleanAfterInstall: Rule;
export declare const npmCacheCleanUseForce: Rule;
export declare const rmRecursiveAfterMktempD: Rule;
export declare const curlUseHttpsUrl: Rule;
export declare const wgetUseHttpsUrl: Rule;
export declare const pipUseNoCacheDir: Rule;
export declare const mkdirUsrSrcThenRemove: Rule;
export declare const configureShouldUseBuildFlag: Rule;
export declare const gemUpdateSystemRmRootGem: Rule;
export declare const sha256sumEchoOneSpaces: Rule;
export declare const gemUpdateNoDocument: Rule;
export declare const gpgVerifyAscRmAsc: Rule;
export declare const yumInstallForceYes: Rule;
export declare const yumInstallRmVarCacheYum: Rule;
export declare const tarSomethingRmTheSomething: Rule;
export declare const gpgUseBatchFlag: Rule;
export declare const gpgUseHaPools: Rule;
export declare const aptGetInstallUseY: Rule;
export declare const moreThanOneInstall: Rule;
export declare const aptGetUpdatePrecedesInstall: Rule;
export declare const aptGetInstallUseNoRec: Rule;
export declare const aptGetInstallThenRemoveAptLists: Rule;
export declare const apkAddUseNoCache: Rule;
export declare const BINNACLE_RULES: Rule[];
export declare const RULES: Rule[];
