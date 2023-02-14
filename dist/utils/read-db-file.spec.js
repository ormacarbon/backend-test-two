"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_db_file_1 = require("./read-db-file");
const promises_1 = __importDefault(require("fs/promises"));
describe("readDbFile", () => {
    it("Should return an array of objects", async () => {
        const data = await (0, read_db_file_1.readDbFile)();
        expect(data[0]).toHaveProperty("name");
    });
    it("Should return an object of AddBeerData", async () => {
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
        const data = await (0, read_db_file_1.readDbFile)();
        expect(data).toContainEqual(fakeBeer);
    });
    it("Should be empty if readFeli throws", async () => {
        jest.spyOn(promises_1.default, "readFile").mockImplementationOnce(() => {
            throw new Error();
        });
        const data = await (0, read_db_file_1.readDbFile)();
        expect(data).toBeFalsy();
    });
});
//# sourceMappingURL=read-db-file.spec.js.map