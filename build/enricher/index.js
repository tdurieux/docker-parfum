"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abstract = exports.enrich = exports.supportedCommands = void 0;
var abstraction_1 = require("./abstraction");
var enricher_1 = require("./enricher");
var enrichers_1 = require("./enrichers");
Object.defineProperty(exports, "supportedCommands", { enumerable: true, get: function () { return enrichers_1.enrichers; } });
function enrich(root) {
    return (0, enricher_1.enrich)(root);
}
exports.enrich = enrich;
function abstract(root) {
    return (0, abstraction_1.abstract)(root);
}
exports.abstract = abstract;
exports.default = (function (node) {
    return abstract(enrich(node));
});
//# sourceMappingURL=index.js.map