"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeReadOneController = void 0;
const read_one_1 = require("../../presentation/controllers/read-one/read-one");
const read_one_2 = require("../../data/useCases/read-one/read-one");
const read_one_repository_1 = require("../../infra/db/mongodb/repositories/read-one/read-one-repository");
const makeReadOneController = () => {
    const repository = new read_one_repository_1.ReadOneMongoRepository();
    const readOne = new read_one_2.DbReadOne(repository);
    return new read_one_1.ReadOneController(readOne);
};
exports.makeReadOneController = makeReadOneController;
//# sourceMappingURL=read-one.js.map