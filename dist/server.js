"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
    }
    return res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
});
app.listen(3000, () => console.log("Server is running!"));
