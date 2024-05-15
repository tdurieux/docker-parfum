#!/usr/bin/env node
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
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var commander_1 = require("commander");
var rule_matcher_1 = require("../rule-matcher");
var Diff = __importStar(require("diff"));
var rules_1 = require("../rules");
var dinghy_1 = require("@tdurieux/dinghy");
var promises_1 = require("fs/promises");
var program = new commander_1.Command();
program
    .command("rules")
    .description("List the supported rules")
    .action(function () {
    var index = 0;
    for (var _i = 0, ALL_RULES_1 = rules_1.ALL_RULES; _i < ALL_RULES_1.length; _i++) {
        var rule = ALL_RULES_1[_i];
        console.log("".concat(rule.name));
    }
});
program
    .command("repair")
    .description("Repair the Dockerfile smells")
    .argument("[file]", "The filepath to the Dockerfile")
    .option("--stdin", "Read the Dockerfile from stdin", false)
    .option("-o, --output <output>", "the output destination of the repair")
    .action(function (file, options) {
    return __awaiter(this, void 0, void 0, function () {
        var parser, dockerfile, matcher, smells, _i, smells_1, smell, error_1, repairedOutput, diff;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!options.stdin && !file) {
                        console.error("Please provide a Dockerfile file");
                        process.exit(1);
                    }
                    if (options.stdin && !file) {
                        file = stdinToString();
                    }
                    parser = new dinghy_1.DockerParser(new dinghy_1.File(file));
                    dockerfile = parser.parse();
                    matcher = new rule_matcher_1.Matcher(dockerfile);
                    smells = matcher.matchAll();
                    if (smells.length == 0) {
                        console.log("Well done, no smells found was found in ".concat(file, "!"));
                    }
                    else {
                        console.log("Found ".concat(smells.length, " smells in ").concat(file, "."));
                    }
                    _i = 0, smells_1 = smells;
                    _a.label = 1;
                case 1:
                    if (!(_i < smells_1.length)) return [3, 6];
                    smell = smells_1[_i];
                    console.log(smell.toString());
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4, smell.repair()];
                case 3:
                    _a.sent();
                    return [3, 5];
                case 4:
                    error_1 = _a.sent();
                    return [3, 5];
                case 5:
                    _i++;
                    return [3, 1];
                case 6:
                    repairedOutput = matcher.node.toString(true);
                    diff = Diff.createTwoFilesPatch(file, file, parser.file.content, repairedOutput);
                    if (!options.output) return [3, 8];
                    return [4, (0, promises_1.writeFile)(options.output, repairedOutput, { encoding: "utf-8" })];
                case 7:
                    _a.sent();
                    console.log("The repaired Dockerfile was written in ".concat(options.output));
                    _a.label = 8;
                case 8:
                    console.log("The changes:\n");
                    console.log(diff);
                    return [2];
            }
        });
    });
});
function stdinToString() {
    var BUFSIZE = 256;
    var buf = Buffer.alloc(BUFSIZE);
    var bytesRead;
    var stdin = "";
    do {
        bytesRead = 0;
        try {
            bytesRead = (0, fs_1.readSync)(process.stdin.fd, buf, 0, BUFSIZE, null);
        }
        catch (e) {
            if (e.code === "EAGAIN") {
                throw "ERROR: interactive stdin input not supported.";
            }
            else if (e.code === "EOF") {
                break;
            }
            throw e;
        }
        if (bytesRead === 0) {
            break;
        }
        stdin += buf.toString(undefined, 0, bytesRead);
    } while (bytesRead > 0);
    return stdin;
}
program
    .command("analyze")
    .description("Analyze a Dockerfile file for smells")
    .option("--stdin", "Read the Dockerfile from stdin", false)
    .argument("[file]", "The filepath to the Dockerfile")
    .action(function (file, options) {
    if (!options.stdin && !file) {
        console.error("Please provide a Dockerfile file");
        process.exit(1);
    }
    if (options.stdin && !file) {
        file = stdinToString();
    }
    console.log("Analyzing ".concat(file));
    var dockerfile = (0, dinghy_1.parseDocker)(file);
    var matcher = new rule_matcher_1.Matcher(dockerfile);
    var smells = matcher.matchAll();
    if (smells.length == 0) {
        console.log("Well done, no smells found was found in ".concat(file, "!"));
    }
    else {
        console.log("Found ".concat(smells.length, " smells in ").concat(file, "."));
    }
    smells.forEach(function (e) { return console.log(e.toString()); });
});
program.parse();
//# sourceMappingURL=index.js.map