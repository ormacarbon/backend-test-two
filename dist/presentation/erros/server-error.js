"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError extends Error {
    constructor() {
        super(`Internal Server Error`);
        this.name = "ServerError";
    }
}
exports.ServerError = ServerError;
//# sourceMappingURL=server-error.js.map