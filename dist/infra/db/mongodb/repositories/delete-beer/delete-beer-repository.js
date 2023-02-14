"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBeerMongoRepository = void 0;
const mongo_helper_1 = require("../../helpers/mongo-helper");
class DeleteBeerMongoRepository {
    async delete(name) {
        const beerCollection = await mongo_helper_1.MongoHelper.getCollection('beers');
        await beerCollection.deleteOne({ name });
        return true;
    }
}
exports.DeleteBeerMongoRepository = DeleteBeerMongoRepository;
//# sourceMappingURL=delete-beer-repository.js.map