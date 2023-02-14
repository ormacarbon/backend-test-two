"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadOneMongoRepository = void 0;
const mongo_helper_1 = require("../../helpers/mongo-helper");
class ReadOneMongoRepository {
    async read(name) {
        const beerCollection = await mongo_helper_1.MongoHelper.getCollection('beers');
        const beer = await beerCollection.findOne({ name });
        return beer;
    }
}
exports.ReadOneMongoRepository = ReadOneMongoRepository;
//# sourceMappingURL=read-one-repository.js.map