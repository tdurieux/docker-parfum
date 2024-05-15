"use strict";
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
var dinghy_2 = require("@tdurieux/dinghy");
Object.defineProperty(exports, "enricher", { enumerable: true, get: function () { return dinghy_2.enricher; } });
function parseAndMatch(dockerfile) {
    var ast = (0, dinghy_1.parseDocker)(new dinghy_1.File(null, dockerfile));
    return new rule_matcher_1.Matcher(ast).matchAll();
}
exports.parseAndMatch = parseAndMatch;
//# sourceMappingURL=index.js.map