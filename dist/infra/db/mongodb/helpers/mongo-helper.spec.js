"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_helper_1 = require("./mongo-helper");
describe("MongoHelper", () => {
    beforeAll(async () => {
        await mongo_helper_1.MongoHelper.connect();
    });
    afterAll(async () => {
        await mongo_helper_1.MongoHelper.disconnect();
    });
    it("Should reconnect if mongodb down", async () => {
        let beerCollection = await mongo_helper_1.MongoHelper.getCollection("beers");
        expect(beerCollection).toBeTruthy();
        await mongo_helper_1.MongoHelper.disconnect();
        beerCollection = await mongo_helper_1.MongoHelper.getCollection("beers");
        expect(beerCollection).toBeTruthy();
    });
});
//# sourceMappingURL=mongo-helper.spec.js.map