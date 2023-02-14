"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBeerMongoRepository = void 0;
const mongo_helper_1 = require("../../helpers/mongo-helper");
class UpdateBeerMongoRepository {
    async update(name, beerData) {
        const beerCollection = await mongo_helper_1.MongoHelper.getCollection('beers');
        await beerCollection.updateOne({ name }, { $set: { ...beerData } });
        return true;
    }
}
exports.UpdateBeerMongoRepository = UpdateBeerMongoRepository;
//# sourceMappingURL=update-beer-repository.js.map