"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBeerMongoRepository = void 0;
const mongo_helper_1 = require("../../helpers/mongo-helper");
class AddBeerMongoRepository {
    async add(beerData) {
        const beerCollection = await mongo_helper_1.MongoHelper.getCollection('beers');
        const { insertedId } = await beerCollection.insertOne(beerData);
        const beer = { id: insertedId.toString(), ...beerData };
        return beer;
    }
}
exports.AddBeerMongoRepository = AddBeerMongoRepository;
//# sourceMappingURL=add-beer-repository.js.map