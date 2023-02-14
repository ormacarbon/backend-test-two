"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateBeerController = void 0;
const update_beer_1 = require("../../presentation/controllers/update-beer/update-beer");
const update_beer_2 = require("../../data/useCases/update-beer/update-beer");
const update_beer_repository_1 = require("../../infra/db/mongodb/repositories/update-beer/update-beer-repository");
const read_one_repository_1 = require("../../infra/db/mongodb/repositories/read-one/read-one-repository");
const read_one_1 = require("../../data/useCases/read-one/read-one");
const validate_beer_data_1 = require("../../presentation/utils/validate-beer-data/validate-beer-data");
const makeUpdateBeerController = () => {
    const updateBeerRepository = new update_beer_repository_1.UpdateBeerMongoRepository();
    const updateBeer = new update_beer_2.DbUpdateBeer(updateBeerRepository);
    const readOneRepository = new read_one_repository_1.ReadOneMongoRepository();
    const readOne = new read_one_1.DbReadOne(readOneRepository);
    const validateBody = new validate_beer_data_1.ValidateBeerBody();
    return new update_beer_1.UpdateBeerController(updateBeer, readOne, validateBody);
};
exports.makeUpdateBeerController = makeUpdateBeerController;
//# sourceMappingURL=update-beer.js.map