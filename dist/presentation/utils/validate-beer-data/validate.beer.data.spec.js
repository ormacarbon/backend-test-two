"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_beer_data_1 = require("./validate-beer-data");
const makeSut = () => {
    return new validate_beer_data_1.ValidateBeerBody();
};
describe("ValidateBeerData", () => {
    it("Should return name if no name is provided", () => {
        const sut = makeSut();
        const beerData = {
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
        const response = sut.validate(beerData);
        expect(response).toBe('name');
    });
    it("Should return 400 if no abv is provided", () => {
        const sut = makeSut();
        const body = {
            name: "Stone House Stout",
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
        const response = sut.validate(body);
        expect(response).toBe('abv');
    });
    it("Should return 400 if no address is provided", () => {
        const sut = makeSut();
        const body = {
            name: "Stone House Stout",
            abv: 8.918797384901016,
            category: "British Ale",
            city: "Slippery Rock",
            coordinates: [41.0638, -80.0556],
            country: "United States",
            description: "This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
            ibu: 104,
            state: "Pennsylvania",
            website: "http://www.northcountrybrewing.com"
        };
        const response = sut.validate(body);
        expect(response).toBe('address');
    });
    it("Should return 400 if no category is provided", () => {
        const sut = makeSut();
        const body = {
            name: "Stone House Stout",
            abv: 8.918797384901016,
            address: "141 South Main Street",
            city: "Slippery Rock",
            coordinates: [41.0638, -80.0556],
            country: "United States",
            description: "This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
            ibu: 104,
            state: "Pennsylvania",
            website: "http://www.northcountrybrewing.com"
        };
        const response = sut.validate(body);
        expect(response).toBe('category');
    });
    it("Should return 400 if no city is provided", () => {
        const sut = makeSut();
        const body = {
            name: "Stone House Stout",
            abv: 8.918797384901016,
            address: "141 South Main Street",
            category: "British Ale",
            coordinates: [41.0638, -80.0556],
            country: "United States",
            description: "This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
            ibu: 104,
            state: "Pennsylvania",
            website: "http://www.northcountrybrewing.com"
        };
        const response = sut.validate(body);
        expect(response).toBe('city');
    });
    it("Should return 400 if no coordinates is provided", () => {
        const sut = makeSut();
        const body = {
            name: "Stone House Stout",
            abv: 8.918797384901016,
            address: "141 South Main Street",
            category: "British Ale",
            city: "Slippery Rock",
            country: "United States",
            description: "This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
            ibu: 104,
            state: "Pennsylvania",
            website: "http://www.northcountrybrewing.com"
        };
        const response = sut.validate(body);
        expect(response).toBe('coordinates');
    });
    it("Should return 400 if no country is provided", () => {
        const sut = makeSut();
        const body = {
            name: "Stone House Stout",
            abv: 8.918797384901016,
            address: "141 South Main Street",
            category: "British Ale",
            city: "Slippery Rock",
            coordinates: [41.0638, -80.0556],
            description: "This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
            ibu: 104,
            state: "Pennsylvania",
            website: "http://www.northcountrybrewing.com"
        };
        const response = sut.validate(body);
        expect(response).toBe('country');
    });
    it("Should return 400 if no ibu is provided", () => {
        const sut = makeSut();
        const body = {
            name: "Stone House Stout",
            abv: 8.918797384901016,
            address: "141 South Main Street",
            category: "British Ale",
            city: "Slippery Rock",
            coordinates: [41.0638, -80.0556],
            country: "United States",
            description: "This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
            state: "Pennsylvania",
            website: "http://www.northcountrybrewing.com"
        };
        const response = sut.validate(body);
        expect(response).toBe('ibu');
    });
    it("Should return 400 if no state is provided", () => {
        const sut = makeSut();
        const body = {
            name: "Stone House Stout",
            abv: 8.918797384901016,
            address: "141 South Main Street",
            category: "British Ale",
            city: "Slippery Rock",
            coordinates: [41.0638, -80.0556],
            country: "United States",
            description: "This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
            ibu: 104,
            website: "http://www.northcountrybrewing.com"
        };
        const response = sut.validate(body);
        expect(response).toBe('state');
    });
    it("Should return 400 if no website is provided", () => {
        const sut = makeSut();
        const body = {
            name: "Stone House Stout",
            abv: 8.918797384901016,
            address: "141 South Main Street",
            category: "British Ale",
            city: "Slippery Rock",
            coordinates: [41.0638, -80.0556],
            country: "United States",
            description: "This robust, hearty stout is as sturdy as its namesake.  Roasted barley is the trademark of stout, a bittersweet separation from its cousin Porter.  The deep character of roasted barley is further enhanced by the addition of oatmeal for an incredible silky finish.",
            ibu: 104,
            state: "Pennsylvania"
        };
        const response = sut.validate(body);
        expect(response).toBe('website');
    });
    it("Should return void if no field is missing", () => {
        const sut = makeSut();
        const body = {
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
        const response = sut.validate(body);
        expect(response).toBeUndefined();
    });
});
//# sourceMappingURL=validate.beer.data.spec.js.map