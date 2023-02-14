"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeReadOne = void 0;
const read_one_1 = require("./read-one");
const read_one_protocols_1 = require("./read-one-protocols");
const fakeReturn = {
    id: "Object_id",
    name: "Stone House Stout",
    abv: 8.918797384901016,
    address: "141 South Main Street",
    category: "British Ale",
    city: "Slippery Rock",
    coordinates: [41.0638, -80.0556],
    country: "United States",
    description: "This robust, hearty stout is as sturdy as its namesake. Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
    ibu: 104,
    state: "Pennsylvania",
    website: "http://www.northcountrybrewing.com"
};
const makeReadOne = () => {
    class ReadOneStrub {
        read(name) {
            return new Promise(resolve => resolve(fakeReturn));
        }
    }
    return new ReadOneStrub();
};
exports.makeReadOne = makeReadOne;
const makeSut = () => {
    const readOneStub = (0, exports.makeReadOne)();
    const sut = new read_one_1.ReadOneController(readOneStub);
    return {
        sut,
        readOneStub
    };
};
describe("ReadOne Controller", () => {
    it("Should return 400 if no name is provided", async () => {
        const { sut } = makeSut();
        const httpResquest = {
            query: {}
        };
        const httpResponse = await sut.handle(httpResquest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual(new read_one_protocols_1.MissingParamError("name"));
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
        expect(httpResponse.body).toEqual(new read_one_protocols_1.NotFoundError());
    });
    it("Should return 500 if ReadOne throws", async () => {
        const { sut, readOneStub } = makeSut();
        const httpResquest = {
            body: {}
        };
        jest.spyOn(readOneStub, "read").mockImplementationOnce(() => {
            throw new Error();
        });
        const httpResponse = await sut.handle(httpResquest);
        expect(httpResponse.statusCode).toBe(500);
        expect(httpResponse.body).toEqual(new read_one_protocols_1.ServerError());
    });
    it('Should call read of ReadOne with name', async () => {
        const { sut, readOneStub } = makeSut();
        const httpRequest = {
            query: {
                name: "Stone House Stout"
            }
        };
        const createSpy = jest.spyOn(readOneStub, "read");
        sut.handle(httpRequest);
        expect(createSpy).toHaveBeenCalledWith(httpRequest.query.name);
    });
    it('Should return 200 if valid values is provided.', async () => {
        const { sut } = makeSut();
        const httpRequest = {
            query: {
                name: "Stone House Stout"
            }
        };
        const httpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(200);
        expect(httpResponse.body).toEqual(fakeReturn);
    });
});
//# sourceMappingURL=read-one.spec.js.map