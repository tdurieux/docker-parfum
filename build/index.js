"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndMatch = exports.enricher = exports.Matcher = exports.Violation = exports.HADOLINT_RULES = exports.BINNACLE_RULES = exports.PARFUM_RULES = void 0;
var dinghy_1 = require("@tdurieux/dinghy");
var rule_matcher_1 = require("./rule-matcher");
var rules_1 = require("./rules");
Object.defineProperty(exports, "PARFUM_RULES", { enumerable: true, get: function () { return rules_1.PARFUM_RULES; } });
Object.defineProperty(exports, "BINNACLE_RULES", { enumerable: true, get: function () { return rules_1.BINNACLE_RULES; } });
Object.defineProperty(exports, "HADOLINT_RULES", { enumerable: true, get: function () { return rules_1.HADOLINT_RULES; } });
var rule_matcher_2 = require("./rule-matcher");
Object.defineProperty(exports, "Violation", { enumerable: true, get: function () { return rule_matcher_2.Violation; } });
Object.defineProperty(exports, "Matcher", { enumerable: true, get: function () { return rule_matcher_2.Matcher; } });
exports.enricher = __importStar(require("./enricher"));
function parseAndMatch(dockerfile) {
    var ast = (0, dinghy_1.parseDocker)(new dinghy_1.File(null, dockerfile));
    return new rule_matcher_1.Matcher(ast).matchAll();
}
exports.parseAndMatch = parseAndMatch;
//# sourceMappingURL=index.js.map