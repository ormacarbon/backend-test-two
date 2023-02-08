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
exports.GetFilteredClientsController = void 0;
const GetFilteredClientsService_1 = require("../services/GetFilteredClientsService");
class GetFilteredClientsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abv, address, category, city, country, description, ibu, name, state, website, } = req.query;
            const getFilteredClientsService = yield new GetFilteredClientsService_1.GetFilteredClientsService();
            const clients = yield getFilteredClientsService.execute({
                abv,
                address,
                category,
                city,
                country,
                description,
                ibu,
                name,
                state,
                website,
            });
            res.json(clients);
        });
    }
}
exports.GetFilteredClientsController = GetFilteredClientsController;
