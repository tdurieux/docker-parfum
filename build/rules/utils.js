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
exports.postFixWith = void 0;
var dinghy_1 = require("@tdurieux/dinghy");
var enricher_1 = __importDefault(require("../enricher"));
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
            (0, enricher_1.default)(toInsert);
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
                (0, enricher_1.default)(binary);
            }
            return [2];
        });
    });
}
exports.postFixWith = postFixWith;
//# sourceMappingURL=utils.js.map