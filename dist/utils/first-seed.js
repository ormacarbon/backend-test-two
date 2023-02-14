"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstSeed = void 0;
const read_db_file_1 = require("./read-db-file");
const add_beer_repository_1 = require("../infra/db/mongodb/repositories/add-beer/add-beer-repository");
const mongo_helper_1 = require("../infra/db/mongodb/helpers/mongo-helper");
const firstSeed = async () => {
    const addBeer = new add_beer_repository_1.AddBeerMongoRepository();
    await mongo_helper_1.MongoHelper.connect();
    const beerCollections = await mongo_helper_1.MongoHelper.getCollection("beers");
    await beerCollections.deleteMany({});
    const beersData = await (0, read_db_file_1.readDbFile)();
    await beerCollections.insertMany(beersData);
};
exports.firstSeed = firstSeed;
//# sourceMappingURL=first-seed.js.map