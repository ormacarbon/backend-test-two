const { Router } = require('express');
const routes = Router();
const BeerController = require('./Controllers/BeerController');


routes.post('/beers', BeerController.create)
routes.get('/beers', BeerController.index)
routes.get('/beer/:id', BeerController.read)
routes.put('/beer/:id', BeerController.update)
routes.delete('/beer/:id', BeerController.delete)




module.exports = routes;