const { Router } = require('express')
const routes = Router()
const beerController = require('../controllers/beerController')


  routes.get('/beers', beerController.getAllBeers)
  routes.patch('/beer/id/:id', beerController.updateBeer)
  routes.post('/beer', beerController.createBeer)
  routes.delete('/beer/id/:id', beerController.deleteBeer)
  

module.exports = routes
