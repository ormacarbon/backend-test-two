"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapterRoute = void 0;
const adapterRoute = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query
        };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
exports.adapterRoute = adapterRoute;
//# sourceMappingURL=express-router-adapter.js.map