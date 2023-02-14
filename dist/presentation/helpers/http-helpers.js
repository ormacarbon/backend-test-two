"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = exports.created = exports.noContent = exports.serverError = exports.notFound = exports.badRequest = void 0;
const server_error_1 = require("../erros/server-error");
const erros_1 = require("../erros");
const badRequest = (error) => {
    return {
        statusCode: 400,
        body: error
    };
};
exports.badRequest = badRequest;
const notFound = () => {
    return {
        statusCode: 404,
        body: new erros_1.NotFoundError()
    };
};
exports.notFound = notFound;
const serverError = () => {
    return {
        statusCode: 500,
        body: new server_error_1.ServerError()
    };
};
exports.serverError = serverError;
const noContent = () => {
    return {
        statusCode: 204,
        body: true
    };
};
exports.noContent = noContent;
const created = (data) => {
    return {
        statusCode: 201,
        body: data
    };
};
exports.created = created;
const ok = (data) => {
    return {
        statusCode: 200,
        body: data
    };
};
exports.ok = ok;
//# sourceMappingURL=http-helpers.js.map