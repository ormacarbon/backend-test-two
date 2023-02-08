const Beer = require('./../models/beerModel');
const factory = require('./handlerFactory');

exports.getAllBeers = factory.getAll(Beer);
exports.getBeer = factory.getOne(Beer);
exports.createBeer = factory.createOne(Beer);
exports.updateBeer = factory.updateOne(Beer);
exports.deleteBeer = factory.deleteOne(Beer);

