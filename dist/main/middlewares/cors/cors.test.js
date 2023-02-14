"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../config/app"));
describe("CORS Middleware", () => {
    it("Should enable CORS", async () => {
        app_1.default.get('/test_cors', (_req, res) => {
            res.send();
        });
        await (0, supertest_1.default)(app_1.default)
            .get('/test_cors')
            .expect("access-control-allow-origin", '*')
            .expect("access-control-allow-methods", '*')
            .expect("access-control-allow-headers", '*');
    });
});
//# sourceMappingURL=cors.test.js.map