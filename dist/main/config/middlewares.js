"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("../middlewares");
const content_types_1 = require("../middlewares/content-types/content-types");
exports.default = (app) => {
    app.use(middlewares_1.bodyParser);
    app.use(middlewares_1.cors);
    app.use(content_types_1.contentType);
};
//# sourceMappingURL=middlewares.js.map