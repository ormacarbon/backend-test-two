"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBeerController = void 0;
const update_beer_protocols_1 = require("./update-beer-protocols");
class UpdateBeerController {
    constructor(updateBeer, readOne, validateBody) {
        this.updateBeer = updateBeer;
        this.readOne = readOne;
        this.validateBody = validateBody;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.query.name) {
                return (0, update_beer_protocols_1.badRequest)(new update_beer_protocols_1.MissingParamError("name"));
            }
            const { name } = httpRequest.query;
            const beer = await this.readOne.read(name);
            if (!beer) {
                return (0, update_beer_protocols_1.notFound)();
            }
            const validate = this.validateBody.validate(httpRequest.body);
            if (typeof validate === "string") {
                return (0, update_beer_protocols_1.badRequest)(new update_beer_protocols_1.MissingParamError(validate));
            }
            const beerData = httpRequest.body;
            await this.updateBeer.update(name, beerData);
            return (0, update_beer_protocols_1.noContent)();
        }
        catch (error) {
            return (0, update_beer_protocols_1.serverError)();
        }
    }
}
exports.UpdateBeerController = UpdateBeerController;
//# sourceMappingURL=update-beer.js.map