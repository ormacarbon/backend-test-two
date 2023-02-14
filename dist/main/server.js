"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./config/app"));
const env_1 = __importDefault(require("./config/env"));
const first_seed_1 = require("../utils/first-seed");
app_1.default.listen(env_1.default.port, async () => {
    await (0, first_seed_1.firstSeed)();
    console.log("Server is Running!");
});
//# sourceMappingURL=server.js.map