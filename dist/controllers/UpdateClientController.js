"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientController = void 0;
const UpdateClientService_1 = require("../services/UpdateClientService");
class UpdateClientController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.query;
            const { abv, address, category, city, lat, long, country, description, ibu, name, state, website, } = req.body;
            const updateClientService = yield new UpdateClientService_1.UpdateClientService();
            const client = yield updateClientService.execute({
                id,
                abv,
                address,
                category,
                city,
                lat,
                long,
                country,
                description,
                ibu,
                name,
                state,
                website,
            });
            res.json(client);
        });
    }
}
exports.UpdateClientController = UpdateClientController;
