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
exports.GetFilteredClientsService = void 0;
const prisma_1 = require("../prisma");
class GetFilteredClientsService {
    execute({ abv, address, category, city, country, description, ibu, name, state, website, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield prisma_1.prismaClient.client.findMany({
                where: {
                    abv: abv,
                    address: address,
                    category: category,
                    city: city,
                    country: country,
                    description: description,
                    ibu: ibu,
                    name: name,
                    state: state,
                    website: website,
                },
            });
            const clientsArray = [];
            for (let i = 0; i < clients.length; i++) {
                const element = clients[i];
                function removeEmpty(element) {
                    let client = Object.fromEntries(Object.entries(element).filter(([_, v]) => v != ""));
                    let clientCoord = {
                        abv: client.abv,
                        address: client.address,
                        category: client.category,
                        city: client.city,
                        coordinates: [client.lat, client.long],
                        country: client.country,
                        description: client.description,
                        ibu: client.ibu,
                        name: client.name,
                        state: client.state,
                        website: client.website,
                    };
                    clientsArray.push(clientCoord);
                }
                removeEmpty(element);
            }
            return clientsArray;
        });
    }
}
exports.GetFilteredClientsService = GetFilteredClientsService;
