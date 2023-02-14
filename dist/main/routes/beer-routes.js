"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_router_adapter_1 = require("../adapter/express-router-adapter");
const add_beer_1 = require("../factories/add-beer");
const read_one_1 = require("../factories/read-one");
const update_beer_1 = require("../factories/update-beer");
const delete_beer_1 = require("../factories/delete-beer");
exports.default = (router) => {
    router.post("/beer/", (0, express_router_adapter_1.adapterRoute)((0, add_beer_1.makeAddBeerController)()));
    router.get("/beer/", (0, express_router_adapter_1.adapterRoute)((0, read_one_1.makeReadOneController)()));
    router.put("/beer/", (0, express_router_adapter_1.adapterRoute)((0, update_beer_1.makeUpdateBeerController)()));
    router.delete("/beer/", (0, express_router_adapter_1.adapterRoute)((0, delete_beer_1.makeDeleteBeerController)()));
};
//# sourceMappingURL=beer-routes.js.map