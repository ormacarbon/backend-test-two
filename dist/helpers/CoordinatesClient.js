"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coord = void 0;
function Coord(client) {
    const clientCoord = {
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
    return clientCoord;
}
exports.Coord = Coord;
