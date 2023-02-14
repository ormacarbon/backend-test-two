"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBeerController = void 0;
const add_beer_protocols_1 = require("./add-beer-protocols");
class AddBeerController {
    constructor(addBeer, validateBeerBody) {
        this.addBeer = addBeer;
        this.validateBeerBody = validateBeerBody;
    }
    async handle(httpRequest) {
        try {
            const validate = this.validateBeerBody.validate(httpRequest.body);
            if (typeof validate === "string") {
                return (0, add_beer_protocols_1.badRequest)(new add_beer_protocols_1.MissingParamError(validate));
            }
            const data = httpRequest.body;
            const beer = await this.addBeer.add(data);
            return (0, add_beer_protocols_1.created)(beer);
        }
        catch (error) {
            return (0, add_beer_protocols_1.serverError)();
        }
    }
}
exports.AddBeerController = AddBeerController;
//# sourceMappingURL=add-beer.js.map