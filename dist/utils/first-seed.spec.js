"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const first_seed_1 = require("./first-seed");
const mongo_helper_1 = require("../infra/db/mongodb/helpers/mongo-helper");
const fakeBeer = {
    name: "Stone House Stout",
    abv: 8.918797384901016,
    address: "141 South Main Street",
    category: "British Ale",
    city: "Slippery Rock",
    coordinates: [41.0638, -80.0556],
    country: "United States",
    description: "This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
    ibu: 104,
    state: "Pennsylvania",
    website: "http://www.northcountrybrewing.com"
};

describe("firstSeed", () => {
    beforeEach(async () => {
        const accountCollection = await mongo_helper_1.MongoHelper.getCollection('beers');
        await accountCollection.deleteMany({});
        await mongo_helper_1.MongoHelper.disconnect();
    });
    it("Should connect to mongodb", async () => {
        await (0, first_seed_1.firstSeed)();
        const beerCollection = await mongo_helper_1.MongoHelper.getCollection("beers");
        expect(beerCollection).toBeTruthy();
    });
    it("Should seed to mongodb", async () => {
        await mongo_helper_1.MongoHelper.connect();
        let beerCollection = await mongo_helper_1.MongoHelper.getCollection("beers");
        const beforeSeed = await beerCollection.findOne({ name: fakeBeer.name });
        expect(beforeSeed).toBeFalsy();
        await (0, first_seed_1.firstSeed)();
        beerCollection = await mongo_helper_1.MongoHelper.getCollection("beers");
        const afterSeed = await beerCollection.findOne({ name: fakeBeer.name });
        expect(afterSeed).toBeTruthy();
    });
});
//# sourceMappingURL=first-seed.spec.js.map