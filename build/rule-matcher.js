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
exports.Matcher = exports.Violation = void 0;
var dinghy_enricher_1 = __importDefault(require("dinghy-enricher"));
var dinghy_1 = require("@tdurieux/dinghy");
var rules_1 = require("./rules");
var Violation = (function () {
    function Violation(rule, node) {
        this.rule = rule;
        this.node = node;
    }
    Violation.prototype.repair = function (opt) {
        var _a;
        if (opt === void 0) { opt = { clone: false }; }
        return __awaiter(this, void 0, void 0, function () {
            var node_1, parent;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isStillValid()) return [3, 2];
                        node_1 = this.node;
                        if (opt.clone) {
                            parent = (_a = this.node.getParent(dinghy_1.nodeType.DockerFile)) === null || _a === void 0 ? void 0 : _a.clone();
                            if (parent == null)
                                throw new Error("not in a nodeType.DockerFile");
                            parent.traverse(function (n) {
                                if (node_1.position.equals(n.position) &&
                                    _this.node.toString() == n.toString()) {
                                    node_1 = n;
                                }
                            });
                        }
                        return [4, this.rule.repair(node_1)];
                    case 1:
                        _b.sent();
                        return [2, node_1];
                    case 2: return [2, this.node];
                }
            });
        });
    };
    Violation.prototype.isStillValid = function () {
        var newViolations = new Matcher(this.node, { toEnrich: false }).match(this.rule);
        return newViolations.length > 0;
    };
    Violation.prototype.toString = function () {
        return "[VIOLATION] -> ".concat(this.rule.description, "\n                           ").concat(this.node
            .toString(true)
            .replace(/\n */g, " "), " at ").concat(this.node.position);
    };
    return Violation;
}());
exports.Violation = Violation;
var Matcher = (function () {
    function Matcher(root, _a) {
        var _b = _a === void 0 ? { toEnrich: true } : _a, toEnrich = _b.toEnrich;
        this._root = toEnrich ? (0, dinghy_enricher_1.default)(root) : root;
    }
    Object.defineProperty(Matcher.prototype, "node", {
        get: function () {
            return this._root;
        },
        enumerable: false,
        configurable: true
    });
    Matcher.prototype.match = function (rule) {
        var violations = [];
        var candidates = this._root.find(rule.query);
        var _loop_1 = function (candidate) {
            if (!rule.consequent.inNode &&
                !rule.consequent.beforeNode &&
                !rule.consequent.afterNode) {
                violations.push(new Violation(rule, candidate));
                return "continue";
            }
            if (rule.consequent.inNode &&
                candidate.find(rule.consequent.inNode).length > 0) {
                return "continue";
            }
            if (rule.consequent.beforeNode !== undefined) {
                var query_1 = rule.consequent.beforeNode;
                var nodeToCheck = getPreviousAndNextParentNodes(candidate, true, rule.scope === "INTRA-DIRECTIVE");
                if (nodeToCheck.some(function (c) { return c.find(query_1).length != 0; })) {
                    return "continue";
                }
            }
            if (rule.consequent.afterNode !== undefined) {
                var query_2 = rule.consequent.afterNode;
                var nodeToCheck = getPreviousAndNextParentNodes(candidate, false, rule.scope === "INTRA-DIRECTIVE");
                if (nodeToCheck.some(function (c) { return c.find(query_2).length != 0; })) {
                    return "continue";
                }
            }
            violations.push(new Violation(rule, candidate));
        };
        for (var _i = 0, candidates_1 = candidates; _i < candidates_1.length; _i++) {
            var candidate = candidates_1[_i];
            _loop_1(candidate);
        }
        var toRemove = new Set();
        firstLoop: for (var i = 0; i < violations.length; i++) {
            var v = violations[i];
            for (var j = i + 1; j < violations.length; j++) {
                var v2 = violations[j];
                if (v.rule.name != v2.rule.name)
                    continue;
                if ((v.node.position.lineEnd == v2.node.position.lineEnd &&
                    v.node.position.columnEnd == v2.node.position.columnEnd) ||
                    v == v2) {
                    toRemove.add(v);
                    continue firstLoop;
                }
            }
        }
        return violations.filter(function (e) { return !toRemove.has(e); });
    };
    Matcher.prototype.matchAll = function () {
        var output = [];
        for (var _i = 0, RULES_1 = rules_1.RULES; _i < RULES_1.length; _i++) {
            var rule = RULES_1[_i];
            this.match(rule).forEach(function (e) { return output.push(e); });
        }
        return output;
    };
    return Matcher;
}());
exports.Matcher = Matcher;
function getPreviousAndNextParentNodes(node, beforeNode, inScript) {
    var STOPPER = inScript ? "BASH-SCRIPT" : "DOCKER-FILE";
    var candidates = [];
    var current = node.parent;
    var previous = node;
    var _loop_2 = function () {
        if (current.children.length > 1) {
            var parentIndex_1 = current.children.indexOf(previous);
            current.children
                .filter(function (_, i) { return (beforeNode ? i < parentIndex_1 : i > parentIndex_1); })
                .forEach(function (node) { return candidates.push(node); });
        }
        if (current.type == STOPPER)
            return "break";
        previous = current;
        current = current.parent;
    };
    while (current != null) {
        var state_1 = _loop_2();
        if (state_1 === "break")
            break;
    }
    return candidates;
}
//# sourceMappingURL=rule-matcher.js.map