const Beer = require('./../models/beerModel');
const factory = require('./handlerFactory');



exports.getAllBeers = factory.getAll(Beer);

