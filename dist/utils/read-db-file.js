"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDbFile = void 0;
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const readDbFile = async () => {
    try {
        const file = path_1.default.resolve("db.json");
        const data = await (0, promises_1.readFile)(file, { encoding: "utf-8" });
        return JSON.parse(data);
    }
    catch (error) {
        console.error(error);
    }
};
exports.readDbFile = readDbFile;
//# sourceMappingURL=read-db-file.js.map