"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmpty = void 0;
function removeEmpty(client) {
    return Object.fromEntries(Object.entries(client).filter(([_, v]) => v != ""));
}
exports.removeEmpty = removeEmpty;
