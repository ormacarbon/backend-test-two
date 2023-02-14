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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("../../../domain/useCases/update-beer"), exports);
__exportStar(require("../../erros"), exports);
__exportStar(require("../../helpers/http-helpers"), exports);
__exportStar(require("../../protocols/controller"), exports);
__exportStar(require("../../protocols/http"), exports);
__exportStar(require("../../../domain/useCases/read-one"), exports);
__exportStar(require("../../protocols/beer-body-validator"), exports);
//# sourceMappingURL=update-beer-protocols.js.map