"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULES = exports.apkAddUseNoCache = exports.ruleAptGetInstallThenRemoveAptLists = exports.ruleAptGetInstallUseNoRec = exports.ruleAptGetUpdatePrecedesInstall = exports.ruleMoreThanOneInstall = exports.ruleAptGetInstallUseY = exports.gpgUseHaPools = exports.gpgUseBatchFlag = exports.tarSomethingRmTheSomething = exports.yumInstallRmVarCacheYum = exports.yumInstallForceYes = exports.gpgVerifyAscRmAsc = exports.gemUpdateNoDocument = exports.sha256sumEchoOneSpaces = exports.gemUpdateSystemRmRootGem = exports.configureShouldUseBuildFlag = exports.mkdirUsrSrcThenRemove = exports.pipUseNoCacheDir = exports.wgetUseHttpsUrl = exports.curlUseHttpsUrl = exports.rmRecursiveAfterMktempD = exports.npmCacheCleanUseForce = exports.npmCacheCleanAfterInstall = exports.curlUseFlagF = void 0;
var dinghy_1 = require("@tdurieux/dinghy");
var dinghy_enricher_1 = __importDefault(require("dinghy-enricher"));
function postFixWith(node, toInsert) {
    return __awaiter(this, void 0, void 0, function () {
        var script, child, _i, _a, c, position, binary;
        return __generator(this, function (_b) {
            if (!toInsert) {
                console.error("[REPAIR] toInsert is null");
                return [2];
            }
            if (toInsert instanceof dinghy_1.nodeType.BashScript) {
                toInsert = toInsert.children[0];
            }
            (0, dinghy_enricher_1.default)(toInsert);
            script = node.getParent(dinghy_1.nodeType.BashIfThen)
                ? node.getParent(dinghy_1.nodeType.BashIfThen)
                : node.getParent(dinghy_1.nodeType.BashScript);
            child = script.children[0];
            for (_i = 0, _a = script.children; _i < _a.length; _i++) {
                c = _a[_i];
                if (c === node || c.hasChild(node)) {
                    child = c;
                    break;
                }
            }
            position = child.position.clone();
            toInsert.traverse(function (n) {
                n.setPosition(position);
            }, { includeSelf: true });
            if (child instanceof dinghy_1.nodeType.BashStatement && child.semicolon) {
                script.addChild(toInsert);
            }
            else {
                binary = new dinghy_1.nodeType.BashConditionBinary();
                binary.parent = child.parent;
                child.replace(binary);
                binary
                    .addChild(new dinghy_1.nodeType.BashConditionBinaryLhs()
                    .setPosition(child.position)
                    .addChild(child))
                    .addChild(new dinghy_1.nodeType.BashConditionBinaryOp()
                    .setPosition(position)
                    .addChild(new dinghy_1.nodeType.BashOp("10").setPosition(position)))
                    .addChild(new dinghy_1.nodeType.BashConditionBinaryRhs()
                    .setPosition(position)
                    .addChild(toInsert.setPosition(position)));
                (0, dinghy_enricher_1.default)(binary);
            }
            return [2];
        });
    });
}
exports.curlUseFlagF = {
    scope: "INTRA-DIRECTIVE",
    name: "curlUseFlagF",
    description: "Use the -f flag when using curl.",
    query: dinghy_1.nodeType.Q("SC-CURL"),
    consequent: {
        inNode: dinghy_1.nodeType.Q("SC-CURL-F-FAIL"),
    },
    source: "https://github.com/docker-library/python/pull/73/commits/033320b278e78732e5739f19bca5f8f29573b553",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node.addChild(new dinghy_1.nodeType.BashCommandArgs()
                .setPosition(node.children[0].position)
                .addChild(new dinghy_1.nodeType.BashWord().addChild(new dinghy_1.nodeType.BashLiteral("-f"))));
            return [2];
        });
    }); },
};
exports.npmCacheCleanAfterInstall = {
    scope: "INTRA-DIRECTIVE",
    name: "npmCacheCleanAfterInstall",
    description: "Run npm cache clean after npm install",
    query: dinghy_1.nodeType.Q("SC-NPM-INSTALL"),
    consequent: {
        afterNode: dinghy_1.nodeType.Q("SC-NPM-CACHE-CLEAN"),
    },
    source: "https://github.com/docker-library/ghost/pull/186/commits/c3bac502046ed5bea16fee67cc48ba993baeaea8",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = postFixWith;
                    _b = [violation];
                    return [4, (0, dinghy_1.parseShell)("npm cache clean --force;")];
                case 1:
                    _a.apply(void 0, _b.concat([_c.sent()]));
                    return [2];
            }
        });
    }); },
};
exports.npmCacheCleanUseForce = {
    scope: "INTRA-DIRECTIVE",
    name: "npmCacheCleanUseForce",
    description: "Use the --force flag when using npm cache clean.",
    query: dinghy_1.nodeType.Q("SC-NPM-CACHE-CLEAN"),
    consequent: {
        inNode: dinghy_1.nodeType.Q("SC-NPM-F-FORCE"),
    },
    source: "https://github.com/docker-library/ghost/pull/186/commits/c3bac502046ed5bea16fee67cc48ba993baeaea8",
    notes: "Had to split into two rules to describe both adding npm cache clean and using the --force flag",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node.addChild(new dinghy_1.nodeType.BashCommandArgs()
                .setPosition(node.children[2].position)
                .addChild(new dinghy_1.nodeType.BashWord().addChild(new dinghy_1.nodeType.BashLiteral("--force"))));
            return [2];
        });
    }); },
};
exports.rmRecursiveAfterMktempD = {
    scope: "INTRA-DIRECTIVE",
    name: "rmRecursiveAfterMktempD",
    description: "A rm -r should occur after a mktemp -d",
    query: dinghy_1.nodeType.Q("SC-MKTEMP", dinghy_1.nodeType.Q("SC-MKTEMP-F-DIRECTORY")),
    consequent: {
        afterNode: dinghy_1.nodeType.Q("SC-RM", dinghy_1.nodeType.Q("SC-RM-F-FORCE")),
    },
    source: "IMPLICIT --- you should remove temporary dirs in docker images",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node, _a, _b;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    node = violation;
                    _a = postFixWith;
                    _b = [node];
                    return [4, (0, dinghy_1.parseShell)("rm -rf " + ((_c = node.children.at(-1)) === null || _c === void 0 ? void 0 : _c.toString(true)))];
                case 1:
                    _a.apply(void 0, _b.concat([_d.sent()]));
                    return [2];
            }
        });
    }); },
};
exports.curlUseHttpsUrl = {
    scope: "INTRA-DIRECTIVE",
    name: "curlUseHttpsUrl",
    description: "Use https:// urls with curl",
    query: dinghy_1.nodeType.Q("SC-CURL", dinghy_1.nodeType.Q("SC-CURL-URL", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-URL-PROTOCOL-HTTP")))),
    consequent: {
        inNode: dinghy_1.nodeType.Q("ABS-URL-PROTOCOL-HTTPS"),
    },
    source: "https://github.com/docker-library/php/pull/293/commits/2f96a00aaa90ee1c503140724936ca7005273df5",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node.traverse(function (x) {
                if (x instanceof dinghy_1.nodeType.DockerOpsValueNode &&
                    x.value &&
                    x.value.includes("http:")) {
                    x.value = x.value.replace("http", "https");
                }
            });
            return [2];
        });
    }); },
};
exports.wgetUseHttpsUrl = {
    scope: "INTRA-DIRECTIVE",
    name: "wgetUseHttpsUrl",
    description: "Use https:// urls with wget",
    query: dinghy_1.nodeType.Q("SC-WGET", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("SC-WGET-URL", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-URL-PROTOCOL-HTTP"))))),
    consequent: {
        inNode: dinghy_1.nodeType.Q("ABS-URL-PROTOCOL-HTTPS"),
    },
    source: "https://github.com/docker-library/php/pull/293/commits/2f96a00aaa90ee1c503140724936ca7005273df5",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node.traverse(function (x) {
                if (x instanceof dinghy_1.nodeType.DockerOpsValueNode &&
                    x.value &&
                    x.value.includes("http:")) {
                    x.value = x.value.replace("http", "https");
                }
            });
            return [2];
        });
    }); },
};
exports.pipUseNoCacheDir = {
    scope: "INTRA-DIRECTIVE",
    name: "pipUseNoCacheDir",
    description: "Use --no-cache-dir flag with pip",
    query: dinghy_1.nodeType.Q("SC-PIP-INSTALL"),
    consequent: {
        inNode: dinghy_1.nodeType.Q("SC-PIP-F-NO-CACHE-DIR"),
    },
    source: "https://github.com/docker-library/python/pull/50/commits/7663560df7547e69d13b1b548675502f4e0917d1",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node.addChild(new dinghy_1.nodeType.BashCommandArgs()
                .setPosition(node.children[1].position)
                .addChild(new dinghy_1.nodeType.BashWord().addChild(new dinghy_1.nodeType.BashLiteral("--no-cache-dir"))));
            return [2];
        });
    }); },
};
exports.mkdirUsrSrcThenRemove = {
    scope: "INTRA-DIRECTIVE",
    name: "mkdirUsrSrcThenRemove",
    description: "After running mkdir /usr/src* use rm -rf /usr/src* to clean up.",
    query: dinghy_1.nodeType.Q("SC-MKDIR", dinghy_1.nodeType.Q("SC-MKDIR-PATH", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-USR-SRC-DIR")))),
    consequent: {
        afterNode: dinghy_1.nodeType.Q("SC-RM", dinghy_1.nodeType.Q("SC-RM-PATH", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-USR-SRC-DIR")))),
    },
    source: "https://github.com/docker-library/python/pull/20/commits/ce7da0b874784e6b69e3966b5d7ba995e873163e",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = postFixWith;
                    _b = [violation];
                    return [4, (0, dinghy_1.parseShell)("rm -rf " +
                            ((_c = violation
                                .find(dinghy_1.nodeType.Q("SC-MKDIR-PATH"))[0]
                                .getElement(dinghy_1.nodeType.BashLiteral)) === null || _c === void 0 ? void 0 : _c.toString(true)))];
                case 1:
                    _a.apply(void 0, _b.concat([_d.sent()]));
                    return [2];
            }
        });
    }); },
};
exports.configureShouldUseBuildFlag = {
    scope: "INTRA-DIRECTIVE",
    name: "configureShouldUseBuildFlag",
    description: "When using ./configure in a Dockerfile pass the --build flag.",
    query: dinghy_1.nodeType.Q("SC-CONFIGURE"),
    consequent: {
        inNode: dinghy_1.nodeType.Q("SC-CONFIGURE-BUILD"),
    },
    source: "https://github.com/docker-library/ruby/pull/127/commits/be55938d970a392e7d41f17131a091b0a9f4bebc",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node.addChild(new dinghy_1.nodeType.BashCommandArgs()
                .setPosition(node.children[0].position.clone())
                .addChild(new dinghy_1.nodeType.BashWord().addChild(new dinghy_1.nodeType.BashLiteral('--build="$(dpkg-architecture --query DEB_BUILD_GNU_TYPE)"'))));
            return [2];
        });
    }); },
};
exports.gemUpdateSystemRmRootGem = {
    scope: "INTRA-DIRECTIVE",
    name: "gemUpdateSystemRmRootGem",
    description: "After running gem update --system remove the /root/.gem directory.",
    query: dinghy_1.nodeType.Q("SC-GEM-UPDATE"),
    consequent: {
        afterNode: dinghy_1.nodeType.Q("SC-RM", dinghy_1.nodeType.Q("SC-RM-PATH", dinghy_1.nodeType.Q("ABS-PATH-ABSOLUTE"), dinghy_1.nodeType.Q("ABS-PATH-DOT-GEM"), dinghy_1.nodeType.Q("ABS-PATH-ROOT-DIR"))),
    },
    source: "https://github.com/docker-library/ruby/pull/185/commits/c9a4472a019d18aba1fdab6a63b96474b40ca191",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = postFixWith;
                    _b = [violation];
                    return [4, (0, dinghy_1.parseShell)("rm -rf /root/.gem;")];
                case 1:
                    _a.apply(void 0, _b.concat([_c.sent()]));
                    return [2];
            }
        });
    }); },
};
exports.sha256sumEchoOneSpaces = {
    scope: "INTRA-DIRECTIVE",
    name: "sha256sumEchoOneSpaces",
    description: "sha256sum takes an input on stdin with one space.",
    query: dinghy_1.nodeType.Q(dinghy_1.nodeType.BashConditionBinary, dinghy_1.nodeType.Q(dinghy_1.nodeType.BashConditionBinaryLhs, dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("SC-ECHO", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-DOUBLE-SPACE"))))), dinghy_1.nodeType.Q(dinghy_1.nodeType.BashConditionBinaryRhs, dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("SC-SHA-256-SUM", dinghy_1.nodeType.Q("SC-SHA-256-SUM-F-CHECK"))))),
    consequent: {
        inNode: dinghy_1.nodeType.Q("SC-ECHO", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-SINGLE-SPACE"))),
    },
    source: "https://github.com/docker-library/memcached/pull/6/commits/a8c4206768821aa47579c6413be85be914875caa",
    notes: "sha1sum is old --- transliterated to use more modern sha256sum which most images are using",
    repair: function (violation) {
        return __awaiter(this, void 0, void 0, function () {
            var node, echoWithDoubleSpace;
            return __generator(this, function (_a) {
                node = violation;
                echoWithDoubleSpace = node.find(dinghy_1.nodeType.Q("SC-ECHO", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-DOUBLE-SPACE"))));
                if (echoWithDoubleSpace) {
                    echoWithDoubleSpace.forEach(function (n) {
                        return n
                            .find(dinghy_1.nodeType.Q("ABS-DOUBLE-SPACE"))
                            .filter(function (n) { return n instanceof dinghy_1.nodeType.DockerOpsValueNode; })
                            .forEach(function (doubleSpace) {
                            doubleSpace.value = doubleSpace.value.replace(/  /g, " ");
                        });
                    });
                }
                return [2];
            });
        });
    },
};
exports.gemUpdateNoDocument = {
    scope: "INTER-DIRECTIVE",
    name: "gemUpdateNoDocument",
    description: "If you run gem update you should have previously added the --no-document flag to the .gemrc config.",
    query: dinghy_1.nodeType.Q("SC-GEM-UPDATE"),
    consequent: {
        beforeNode: dinghy_1.nodeType.Q("SC-ECHO", dinghy_1.nodeType.Q("SC-ECHO-ITEM", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-CONFIG-NO-DOCUMENT")))),
    },
    source: "https://github.com/docker-library/ruby/pull/49/files",
    notes: "Either gem update or gem install leads us to wanting the --no-document/--no-rdoc flag to be set.",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node, dFile, dRun, setup;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    node = violation;
                    dFile = node.getParent(dinghy_1.nodeType.DockerFile);
                    dRun = node.getParent(dinghy_1.nodeType.DockerRun);
                    if (dFile == null || dRun == null)
                        return [2];
                    return [4, (0, dinghy_1.parseDocker)("RUN mkdir -p /usr/local/etc \\\n  && { \\\n    echo 'install: --no-document'; \\\n    echo 'update: --no-document'; \\\n  } >> /usr/local/etc/gemrc;\n")];
                case 1:
                    setup = (_a.sent()).getElement(dinghy_1.nodeType.DockerRun);
                    if (setup) {
                        setup.position.lineStart = dRun.position.lineStart - 1;
                        dFile.addChild(setup);
                    }
                    return [2];
            }
        });
    }); },
};
exports.gpgVerifyAscRmAsc = {
    scope: "INTRA-DIRECTIVE",
    name: "gpgVerifyAscRmAsc",
    description: "If you run gpg --verify <X>.asc you should remove the <x>.asc file.",
    query: dinghy_1.nodeType.Q("SC-GPG", dinghy_1.nodeType.Q("SC-GPG-VERIFY", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-EXTENSION-ASC")))),
    consequent: {
        afterNode: dinghy_1.nodeType.Q("SC-RM", dinghy_1.nodeType.Q("SC-RM-PATH")),
    },
    source: "https://github.com/docker-library/php/pull/196/commits/8943e1e6a930768994fbc29f4df89d0a3fd65e12",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = postFixWith;
                    _b = [violation];
                    return [4, (0, dinghy_1.parseShell)("rm " + violation.find(dinghy_1.nodeType.Q("ABS-EXTENSION-ASC"))[0].toString())];
                case 1:
                    _a.apply(void 0, _b.concat([_c.sent()]));
                    return [2];
            }
        });
    }); },
};
exports.yumInstallForceYes = {
    scope: "INTRA-DIRECTIVE",
    name: "yumInstallForceYes",
    description: "Use the -y flag with yum install.",
    query: dinghy_1.nodeType.Q("SC-YUM-INSTALL"),
    consequent: {
        inNode: dinghy_1.nodeType.Q("SC-YUM-F-ASSUMEYES"),
    },
    source: "IMPLICIT -- based on apt-get install -y rule",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node.addChild(new dinghy_1.nodeType.BashCommandArgs()
                .setPosition(node.children[1].position)
                .addChild(new dinghy_1.nodeType.BashWord().addChild(new dinghy_1.nodeType.BashLiteral("-y"))));
            return [2];
        });
    }); },
};
exports.yumInstallRmVarCacheYum = {
    scope: "INTRA-DIRECTIVE",
    name: "yumInstallRmVarCacheYum",
    description: "If you run yum install <...> you should remove the /var/cache/yum directory.",
    query: dinghy_1.nodeType.Q("SC-YUM-INSTALL"),
    consequent: {
        afterNode: dinghy_1.nodeType.Q("SC-RM", dinghy_1.nodeType.Q("SC-RM-F-RECURSIVE"), dinghy_1.nodeType.Q("SC-RM-PATH", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-VAR-CACHE-YUM")))),
    },
    source: "https://github.com/docker-library/ruby/pull/7/commits/950a673e59df846608f624ee55321d36ba1f89ba",
    notes: "The source here is for apt-get. This rule is the natural translation to yum.",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = postFixWith;
                    _b = [violation];
                    return [4, (0, dinghy_1.parseShell)("rm -rf /var/cache/yum")];
                case 1:
                    _a.apply(void 0, _b.concat([_c.sent()]));
                    return [2];
            }
        });
    }); },
};
exports.tarSomethingRmTheSomething = {
    scope: "INTRA-DIRECTIVE",
    name: "tarSomethingRmTheSomething",
    description: "If you run tar <X>.tar you should remove the <x>.tar file.",
    query: dinghy_1.nodeType.Q("SC-TAR", dinghy_1.nodeType.Q("SC-TAR-FILE", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-EXTENSION-TAR")))),
    consequent: {
        afterNode: dinghy_1.nodeType.Q("SC-RM", dinghy_1.nodeType.Q("SC-RM-PATH", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-EXTENSION-TAR")))),
    },
    source: "IMPLICIT --- no reason to keep around duplicates (the compressed version and the uncompressed version)",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var file, _a, _b;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    file = (_c = violation.find(dinghy_1.nodeType.Q("ABS-EXTENSION-TAR"))[0]) === null || _c === void 0 ? void 0 : _c.toString();
                    if (file.startsWith("-") && file.includes("=")) {
                        file = file.split("=")[1];
                    }
                    else if (file.startsWith("-f")) {
                        file = file.substring(2);
                    }
                    _a = postFixWith;
                    _b = [violation];
                    return [4, (0, dinghy_1.parseShell)("rm " + file)];
                case 1:
                    _a.apply(void 0, _b.concat([_d.sent()]));
                    return [2];
            }
        });
    }); },
};
exports.gpgUseBatchFlag = {
    scope: "INTRA-DIRECTIVE",
    name: "gpgUseBatchFlag",
    description: "Use the --batch flag when using gpg in a docker image.",
    query: dinghy_1.nodeType.Q("SC-GPG"),
    consequent: {
        inNode: dinghy_1.nodeType.Q("SC-GPG-F-BATCH"),
    },
    source: "https://github.com/docker-library/php/pull/747/commits/b99209cc078ebb7bf4614e870c2d69e0b3bed399",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node.addChild(new dinghy_1.nodeType.BashCommandArgs()
                .setPosition(node.children[0].position)
                .addChild(new dinghy_1.nodeType.BashWord().addChild(new dinghy_1.nodeType.BashLiteral("--batch"))));
            return [2];
        });
    }); },
};
exports.gpgUseHaPools = {
    scope: "INTRA-DIRECTIVE",
    name: "gpgUseHaPools",
    description: "Use ha.pool.* instead of pool.* with gpg.",
    query: dinghy_1.nodeType.Q("SC-GPG", dinghy_1.nodeType.Q("SC-GPG-KEYSERVER", dinghy_1.nodeType.Q("ALL", dinghy_1.nodeType.Q("ABS-URL-POOL")))),
    consequent: {
        inNode: dinghy_1.nodeType.Q("ABS-URL-HA-POOL"),
    },
    source: "https://github.com/docker-library/httpd/pull/5/commits/63cd0ad57a12c76ff70d0f501f6c2f1580fa40f5",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node
                .getElements(dinghy_1.nodeType.BashLiteral)
                .filter(function (e) { return e.value.includes("pool."); })
                .forEach(function (e) { return (e.value = e.value.replace("pool.", "ha.pool.")); });
            return [2];
        });
    }); },
};
exports.ruleAptGetInstallUseY = {
    scope: "INTRA-DIRECTIVE",
    name: "ruleAptGetInstallUseY",
    description: "Must use the -y flag to avoid apt-get install requesting user interaction.",
    query: dinghy_1.nodeType.Q("SC-APT-INSTALL"),
    consequent: {
        inNode: dinghy_1.nodeType.Q("SC-APT-F-YES"),
    },
    source: "IMPLICIT --- need to use non-interactive mode during image build except for very rare exceptions.",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node.addChild(new dinghy_1.nodeType.BashCommandArgs()
                .setPosition(node.children[1].position)
                .addChild(new dinghy_1.nodeType.BashWord().addChild(new dinghy_1.nodeType.BashLiteral("-y"))));
            return [2];
        });
    }); },
};
exports.ruleMoreThanOneInstall = {
    scope: "INTER-DIRECTIVE",
    name: "ruleMoreThanOneInstall",
    description: "all apt-get install should group into one.",
    source: "IMPLICIT --- slow down the build",
    query: dinghy_1.nodeType.Q("ANY", dinghy_1.nodeType.Q("SC-APT-INSTALL"), dinghy_1.nodeType.Q("SC-APT-INSTALL")),
    consequent: {},
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("Not implemented");
        });
    }); },
};
exports.ruleAptGetUpdatePrecedesInstall = {
    scope: "INTRA-DIRECTIVE",
    name: "ruleAptGetUpdatePrecedesInstall",
    description: "apt-get update && apt-get install should happen in a single layer.",
    query: dinghy_1.nodeType.Q("SC-APT-INSTALL"),
    consequent: {
        beforeNode: dinghy_1.nodeType.Q("SC-APT-UPDATE"),
    },
    source: "IMPLICIT --- one of Hadolint's recommendations and a docker best practice.",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var root, installs, updates, install, update, script, child, binary;
        return __generator(this, function (_a) {
            root = violation.getParent(dinghy_1.nodeType.DockerFile);
            installs = root.find(dinghy_1.nodeType.Q("SC-APT-INSTALL"));
            if (installs.length !== 1) {
                return [2];
            }
            updates = root.find(dinghy_1.nodeType.Q("SC-APT-UPDATE"));
            if (updates.length !== 1) {
                return [2];
            }
            install = installs[0];
            update = updates[0];
            if (update.parent instanceof dinghy_1.nodeType.BashScript) {
                update.getParent(dinghy_1.nodeType.DockerRun).remove();
                update.setPosition(null);
                script = install.getParent(dinghy_1.nodeType.BashScript);
                child = script.children[0];
                binary = new dinghy_1.nodeType.BashConditionBinary()
                    .addChild(new dinghy_1.nodeType.BashConditionBinaryOp().addChild(new dinghy_1.nodeType.BashOp("10")))
                    .addChild(new dinghy_1.nodeType.BashConditionBinaryRhs().addChild(child.clone()))
                    .addChild(new dinghy_1.nodeType.BashConditionBinaryLhs().addChild(update));
                child.replace(binary);
            }
            return [2];
        });
    }); },
};
exports.ruleAptGetInstallUseNoRec = {
    name: "ruleAptGetInstallUseNoRec",
    scope: "INTRA-DIRECTIVE",
    description: "Use the --no-install-recommends flag to save layer space and avoid hidden dependencies.",
    query: dinghy_1.nodeType.Q("SC-APT-INSTALL"),
    consequent: {
        inNode: dinghy_1.nodeType.Q("SC-APT-F-NO-INSTALL-RECOMMENDS"),
    },
    source: "https://github.com/docker-library/openjdk/pull/193/commits/1d6fa42735002d61625d18378f1ca2df39cb26a0",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node.addChild(new dinghy_1.nodeType.BashCommandArgs()
                .setPosition(node.children[1].position)
                .addChild(new dinghy_1.nodeType.BashWord().addChild(new dinghy_1.nodeType.BashLiteral("--no-install-recommends"))));
            return [2];
        });
    }); },
};
exports.ruleAptGetInstallThenRemoveAptLists = {
    scope: "INTRA-DIRECTIVE",
    name: "ruleAptGetInstallThenRemoveAptLists",
    description: "rm -rf /var/lib/apt/lists/* after apt-get install to save layer space.",
    query: dinghy_1.nodeType.Q("SC-APT-INSTALL"),
    consequent: {
        afterNode: dinghy_1.nodeType.Q("SC-RM", dinghy_1.nodeType.Q("SC-RM-PATH", dinghy_1.nodeType.Q("ABS-GLOB-STAR"), dinghy_1.nodeType.Q("ABS-APT-LISTS"), dinghy_1.nodeType.Q("ABS-PATH-VAR"))),
    },
    source: "https://github.com/docker-library/ruby/pull/7/commits/950a673e59df846608f624ee55321d36ba1f89ba",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = postFixWith;
                    _b = [violation];
                    return [4, (0, dinghy_1.parseShell)("rm -rf /var/lib/apt/lists/*;")];
                case 1:
                    _a.apply(void 0, _b.concat([_c.sent()]));
                    return [2];
            }
        });
    }); },
};
exports.apkAddUseNoCache = {
    scope: "INTRA-DIRECTIVE",
    name: "apkAddUseNoCache",
    description: "Use the --no-cache flag when using apk add.",
    query: dinghy_1.nodeType.Q("SC-APK-ADD"),
    consequent: {
        inNode: dinghy_1.nodeType.Q("SC-APK-F-NO-CACHE"),
    },
    source: "https://github.com/docker-library/php/pull/228/commits/85d48c88b3e3dae303118275202327f14a8106f4",
    repair: function (violation) { return __awaiter(void 0, void 0, void 0, function () {
        var node;
        return __generator(this, function (_a) {
            node = violation;
            node.addChild(new dinghy_1.nodeType.BashCommandArgs()
                .setPosition(node.children[1].position)
                .addChild(new dinghy_1.nodeType.BashWord().addChild(new dinghy_1.nodeType.BashLiteral("--no-cache"))));
            return [2];
        });
    }); },
};
exports.RULES = [
    exports.curlUseFlagF,
    exports.npmCacheCleanAfterInstall,
    exports.npmCacheCleanUseForce,
    exports.rmRecursiveAfterMktempD,
    exports.curlUseHttpsUrl,
    exports.wgetUseHttpsUrl,
    exports.pipUseNoCacheDir,
    exports.mkdirUsrSrcThenRemove,
    exports.configureShouldUseBuildFlag,
    exports.gemUpdateSystemRmRootGem,
    exports.sha256sumEchoOneSpaces,
    exports.gemUpdateNoDocument,
    exports.gpgVerifyAscRmAsc,
    exports.yumInstallForceYes,
    exports.yumInstallRmVarCacheYum,
    exports.tarSomethingRmTheSomething,
    exports.gpgUseBatchFlag,
    exports.gpgUseHaPools,
    exports.ruleAptGetInstallUseY,
    exports.ruleAptGetInstallUseNoRec,
    exports.ruleAptGetUpdatePrecedesInstall,
    exports.ruleAptGetInstallThenRemoveAptLists,
    exports.apkAddUseNoCache,
];
//# sourceMappingURL=rules.js.map