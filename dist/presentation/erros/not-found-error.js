"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
class NotFoundError extends Error {
    constructor() {
        super("Not Found!");
        this.name = "NotFoundError";
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=not-found-error.js.map