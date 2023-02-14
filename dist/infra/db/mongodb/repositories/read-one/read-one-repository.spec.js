"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_helper_1 = require("../../helpers/mongo-helper");
const add_beer_repository_1 = require("../add-beer/add-beer-repository");
const read_one_repository_1 = require("./read-one-repository");
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
const name = "Stone House Stout";
const addRepository = new add_beer_repository_1.AddBeerMongoRepository();
const makeSut = () => {
    return new read_one_repository_1.ReadOneMongoRepository();
};
describe("ReadOneMongoRepository", () => {
    beforeAll(async () => {
        await mongo_helper_1.MongoHelper.connect();
        await addRepository.add(fakeBeer);
    });
    afterAll(async () => {
        const accountCollection = await mongo_helper_1.MongoHelper.getCollection('beers');
        await accountCollection.deleteMany({});
        await mongo_helper_1.MongoHelper.disconnect();
    });
    it("Should return a beer", async () => {
        const sut = makeSut();
        const beer = await sut.read(name);
        expect(beer).toBeTruthy();
    });
    it("Should return an object with correct values", async () => {
        const sut = makeSut();
        const beer = await sut.read(name);
        expect(beer.name).toBe(fakeBeer.name);
        expect(beer.website).toBe(fakeBeer.website);
        expect(beer.coordinates).toStrictEqual(fakeBeer.coordinates);
    });
});
//# sourceMappingURL=read-one-repository.spec.js.map