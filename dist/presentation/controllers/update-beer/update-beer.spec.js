"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_beer_spec_1 = require("../add-beer/add-beer.spec");
const read_one_spec_1 = require("../read-one/read-one.spec");
const update_beer_1 = require("./update-beer");
const update_beer_protocols_1 = require("./update-beer-protocols");
const fakeBeerData = {
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
const makeUpdateBeer = () => {
    class UpdateBeerStub {
        update(name, beerData) {
            return new Promise(resolve => resolve(true));
        }
    }
    return new UpdateBeerStub();
};
const makeSut = () => {
    const updateBeerStub = makeUpdateBeer();
    const readOneStub = (0, read_one_spec_1.makeReadOne)();
    const validateBodyStub = (0, add_beer_spec_1.makeBodyValidator)();
    const sut = new update_beer_1.UpdateBeerController(updateBeerStub, readOneStub, validateBodyStub);
    return {
        sut,
        updateBeerStub,
        readOneStub,
        validateBodyStub
    };
};
describe("UpdateBeer Controller", () => {
    it("Should return 400 if no name is provided", async () => {
        const { sut } = makeSut();
        const httpResquest = {
            query: {}
        };
        const httpResponse = await sut.handle(httpResquest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new update_beer_protocols_1.MissingParamError("name"));
    });
    it("Should return 400 if Beer not found", async () => {
        const { sut, readOneStub } = makeSut();
        const httpResquest = {
            query: {
                name: "Bohemia"
            }
        };
        let result;
        jest.spyOn(readOneStub, "read").mockReturnValueOnce(new Promise(resolve => resolve(result)));
        const httpResponse = await sut.handle(httpResquest);
        expect(httpResponse.statusCode).toBe(404);
        expect(httpResponse.body).toEqual(new update_beer_protocols_1.NotFoundError());
    });
    it("Should return 400 if ValidateBeerBody returns a string", async () => {
        const { sut, validateBodyStub } = makeSut();
        const httpRequest = {
            body: {
                name: "Stone House Stout"
            },
            query: {
                name: "Stone House Stout"
            }
        };
        jest.spyOn(validateBodyStub, "validate").mockReturnValueOnce("website");
        const httpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new update_beer_protocols_1.MissingParamError("website"));
    });
    it("Should return 500 if AddBeer throws", async () => {
        const { sut, updateBeerStub } = makeSut();
        const httpResquest = {
            body: fakeBeerData,
            query: {
                name: "Stone House Stout"
            }
        };
        jest.spyOn(updateBeerStub, "update").mockImplementationOnce(() => {
            throw new Error();
        });
        const httpResponse = await sut.handle(httpResquest);
        expect(httpResponse.statusCode).toBe(500);
        expect(httpResponse.body).toEqual(new update_beer_protocols_1.ServerError());
    });
    it("Should return 204 on success", async () => {
        const { sut } = makeSut();
        const httpRequest = {
            query: {
                name: "Stone House Stout"
            },
            body: fakeBeerData
        };
        const httpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(204);
    });
});
//# sourceMappingURL=update-beer.spec.js.map