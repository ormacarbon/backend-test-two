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
exports.CreateClientController = void 0;
const CreateClientService_1 = require("../services/CreateClientService");
class CreateClientController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abv, address, category, city, lat, long, country, description, ibu, name, state, website, } = req.body;
            if (!category) {
                category == "";
            }
            if (!description) {
                description == "";
            }
            if (!website) {
                website == "";
            }
            const createClientService = new CreateClientService_1.CreateClientService();
            const client = yield createClientService.execute({
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
            return res.json(client);
        });
    }
}
exports.CreateClientController = CreateClientController;
