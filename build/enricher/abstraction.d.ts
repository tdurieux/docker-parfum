import { nodeType } from "@tdurieux/dinghy";
export declare const abtractionRegex: {
    "ABS-SINGLE-SPACE": RegExp;
    "ABS-DOUBLE-SPACE": RegExp;
    "ABS-NEW-LINE": RegExp;
    "ABS-TAB": RegExp;
    "ABS-URL-PROTOCOL-HTTP": RegExp;
    "ABS-URL-PROTOCOL-HTTPS": RegExp;
    "ABS-URL-PROTOCOL-FTP": RegExp;
    "ABS-URL-PROTOCOL-GIT": RegExp;
    "ABS-PROBABLY-URL": RegExp;
    "ABS-PROBABLY-EMAIL": RegExp;
    "ABS-CONFIG-NO-DOCUMENT": RegExp;
    "ABS-MAYBE-PATH": RegExp[];
    "ABS-MAYBE-BUILD-DIR": RegExp;
    "ABS-VAR-CACHE-YUM": RegExp;
    "ABS-VAR-CACHE-APK": RegExp;
    "ABS-MAYBE-SRC-DIR": RegExp;
    "ABS-USR-SRC-DIR": RegExp;
    "ABS-PATH-DOT-CACHE": RegExp;
    "ABS-PATH-DOT-GEM": RegExp;
    "ABS-EXTENSION-ASC": RegExp;
    "ABS-EXTENSION-TAR": RegExp;
    "ABS-EXTENSION-ZIP": RegExp;
    "ABS-PATH-ROOT-DIR": RegExp;
    "ABS-URL-POOL": RegExp;
    "ABS-URL-HA-POOL": RegExp;
    "ABS-PATH-ABSOLUTE": RegExp;
    "ABS-PATH-RELATIVE": RegExp;
    "ABS-PATH-HOME": RegExp;
    "ABS-PATH-VAR": RegExp;
    "ABS-GLOB-STAR": RegExp;
    "ABS-APT-LISTS": RegExp;
    "ABS-TRUE": RegExp;
    "ABS-FALSE": RegExp;
};
export declare function abstract(node: nodeType.DockerOpsNodeType): nodeType.DockerOpsNodeType;