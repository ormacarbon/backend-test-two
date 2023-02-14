"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBeerController = void 0;
const delete_beer_protocols_1 = require("./delete-beer-protocols");
class DeleteBeerController {
    constructor(deleteBeer, readOne) {
        this.deleteBeer = deleteBeer;
        this.readOne = readOne;
    }
    async handle(httpRequest) {
        try {
            if (!httpRequest.query.name) {
                return (0, delete_beer_protocols_1.badRequest)(new delete_beer_protocols_1.MissingParamError("name"));
            }
            const { name } = httpRequest.query;
            const beer = await this.readOne.read(name);
            if (!beer) {
                return (0, delete_beer_protocols_1.notFound)();
            }
            await this.deleteBeer.delete(name);
            return (0, delete_beer_protocols_1.noContent)();
        }
        catch (error) {
            return (0, delete_beer_protocols_1.serverError)();
        }
    }
}
exports.DeleteBeerController = DeleteBeerController;
//# sourceMappingURL=delete-beer.js.map