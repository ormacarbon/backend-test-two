"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../config/app"));
describe("Content Type Middleware", () => {
    it("Should return default content type as json", async () => {
        app_1.default.get('/test_content_type', (_req, res) => {
            res.send("");
        });
        await (0, supertest_1.default)(app_1.default)
            .get('/test_content_type')
            .expect("content-type", /json/);
    });
    it("Should return xml content type when forced", async () => {
        app_1.default.get('/test_content_type_xml', (_req, res) => {
            res.type("xml");
            res.send("");
        });
        await (0, supertest_1.default)(app_1.default)
            .get('/test_content_type_xml')
            .expect("content-type", /xml/);
    });
});
//# sourceMappingURL=content-types.test.js.map