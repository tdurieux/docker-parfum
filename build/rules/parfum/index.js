"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = exports.yarnCacheCleanAfterInstall = exports.moreThanOneInstall = exports.curlUseFlagL = void 0;
var curlUseFlagL_1 = __importDefault(require("./curlUseFlagL"));
var moreThanOneInstall_1 = __importDefault(require("./moreThanOneInstall"));
var yarnCacheCleanAfterInstall_1 = __importDefault(require("./yarnCacheCleanAfterInstall"));
var curlUseFlagL_2 = require("./curlUseFlagL");
Object.defineProperty(exports, "curlUseFlagL", { enumerable: true, get: function () { return __importDefault(curlUseFlagL_2).default; } });
var moreThanOneInstall_2 = require("./moreThanOneInstall");
Object.defineProperty(exports, "moreThanOneInstall", { enumerable: true, get: function () { return __importDefault(moreThanOneInstall_2).default; } });
var yarnCacheCleanAfterInstall_2 = require("./yarnCacheCleanAfterInstall");
Object.defineProperty(exports, "yarnCacheCleanAfterInstall", { enumerable: true, get: function () { return __importDefault(yarnCacheCleanAfterInstall_2).default; } });
exports.rules = [
    curlUseFlagL_1.default,
    moreThanOneInstall_1.default,
    yarnCacheCleanAfterInstall_1.default,
];
//# sourceMappingURL=index.js.map