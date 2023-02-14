"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoHelper = void 0;
const env_1 = __importDefault(require("../../../../main/config/env"));
const mongodb_1 = require("mongodb");
exports.MongoHelper = {
    client: null,
    async connect() {
        this.client = await mongodb_1.MongoClient.connect(env_1.default.mongo_url);
    },
    async disconnect() {
        await this.client.close();
    },
    async getCollection(name) {
        if (this.client === null) {
            await this.connect();
        }
        return this.client.db().collection(name);
    }
};
//# sourceMappingURL=mongo-helper.js.map