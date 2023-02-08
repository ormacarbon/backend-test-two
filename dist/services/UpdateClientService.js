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
exports.UpdateClientService = void 0;
const prisma_1 = require("../prisma");
const CoordinatesClient_1 = require("../helpers/CoordinatesClient");
const RemoveEmpty_1 = require("../helpers/RemoveEmpty");
class UpdateClientService {
    execute({ id, abv, address, category, city, lat, long, country, description, ibu, name, state, website, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield prisma_1.prismaClient.client.update({
                where: {
                    id: id,
                },
                data: {
                    abv: abv,
                    address: address,
                    category: category,
                    city: city,
                    lat: lat,
                    long: long,
                    country: country,
                    description: description,
                    ibu: ibu,
                    name: name,
                    state: state,
                    website: website,
                },
            });
            const clientCoord = (0, CoordinatesClient_1.Coord)(client);
            return (0, RemoveEmpty_1.removeEmpty)(clientCoord);
        });
    }
}
exports.UpdateClientService = UpdateClientService;
