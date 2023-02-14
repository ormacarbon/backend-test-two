"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteBeerController = void 0;
const delete_beer_1 = require("../../data/useCases/delete-beer/delete-beer");
const delete_beer_repository_1 = require("../../infra/db/mongodb/repositories/delete-beer/delete-beer-repository");
const delete_beer_2 = require("../../presentation/controllers/delete-beer/delete-beer");
const read_one_repository_1 = require("../../infra/db/mongodb/repositories/read-one/read-one-repository");
const read_one_1 = require("../../data/useCases/read-one/read-one");
const makeDeleteBeerController = () => {
    const deleteBeerRepository = new delete_beer_repository_1.DeleteBeerMongoRepository();
    const deleteBeer = new delete_beer_1.DbDeleteBeer(deleteBeerRepository);
    const readOneRepository = new read_one_repository_1.ReadOneMongoRepository();
    const readOne = new read_one_1.DbReadOne(readOneRepository);
    return new delete_beer_2.DeleteBeerController(deleteBeer, readOne);
};
exports.makeDeleteBeerController = makeDeleteBeerController;
//# sourceMappingURL=delete-beer.js.map