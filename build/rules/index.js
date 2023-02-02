"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_RULES = exports.PARFUM_RULES = exports.HADOLINT_RULES = exports.BINNACLE_RULES = void 0;
var binnacle_1 = require("./binnacle");
var hadolint_1 = require("./hadolint");
var parfum_1 = require("./parfum");
var binnacle_2 = require("./binnacle");
Object.defineProperty(exports, "BINNACLE_RULES", { enumerable: true, get: function () { return binnacle_2.rules; } });
var hadolint_2 = require("./hadolint");
Object.defineProperty(exports, "HADOLINT_RULES", { enumerable: true, get: function () { return hadolint_2.rules; } });
var parfum_2 = require("./parfum");
Object.defineProperty(exports, "PARFUM_RULES", { enumerable: true, get: function () { return parfum_2.rules; } });
exports.ALL_RULES = hadolint_1.rules.concat(binnacle_1.rules, parfum_1.rules);
//# sourceMappingURL=index.js.map