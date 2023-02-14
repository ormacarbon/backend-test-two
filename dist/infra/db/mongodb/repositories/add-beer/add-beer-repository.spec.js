"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_helper_1 = require("../../helpers/mongo-helper");
const add_beer_repository_1 = require("./add-beer-repository");
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
const makeSut = () => {
    return new add_beer_repository_1.AddBeerMongoRepository();
};
describe("AddBeerMongoRepository", () => {
    beforeAll(async () => {
        await mongo_helper_1.MongoHelper.connect();
    });
    afterAll(async () => {
        const accountCollection = await mongo_helper_1.MongoHelper.getCollection('beers');
        await accountCollection.deleteMany({});
        await mongo_helper_1.MongoHelper.disconnect();
    });
    beforeEach(async () => {
        const accountCollection = await mongo_helper_1.MongoHelper.getCollection('beers');
        await accountCollection.deleteMany({});
    });
    it("Should return an beer on success", async () => {
        const sut = makeSut();
        const beer = await sut.add(fakeBeer);
        expect(beer).toBeTruthy();
    });
    it("Should return an beer with correct properties", async () => {
        const sut = makeSut();
        const beer = await sut.add(fakeBeer);
        expect(beer.name).toEqual(fakeBeer.name);
        expect(beer.abv).toEqual(fakeBeer.abv);
        expect(beer.description).toEqual(fakeBeer.description);
    });
    it("Should return an beer with id", async () => {
        const sut = makeSut();
        const beer = await sut.add(fakeBeer);
        expect(beer.id).toBeTruthy();
    });
});
//# sourceMappingURL=add-beer-repository.spec.js.map