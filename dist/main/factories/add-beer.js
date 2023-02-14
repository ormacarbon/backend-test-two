"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddBeerController = void 0;
const add_beer_1 = require("../../presentation/controllers/add-beer/add-beer");
const validate_beer_data_1 = require("../../presentation/utils/validate-beer-data/validate-beer-data");
const add_beer_2 = require("../../data/useCases/add-beer/add-beer");
const add_beer_repository_1 = require("../../infra/db/mongodb/repositories/add-beer/add-beer-repository");
const makeAddBeerController = () => {
    const repository = new add_beer_repository_1.AddBeerMongoRepository();
    const addBeer = new add_beer_2.DbAddBeer(repository);
    const validadeBeerBode = new validate_beer_data_1.ValidateBeerBody();
    return new add_beer_1.AddBeerController(addBeer, validadeBeerBode);
};
exports.makeAddBeerController = makeAddBeerController;
//# sourceMappingURL=add-beer.js.map