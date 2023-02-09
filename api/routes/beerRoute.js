const { Router } = require('express')
const routes = Router()
const beerController = require('../controllers/beerController')

  routes.get('/', beerController.getAllBeers)
  routes.get('/id/:id', beerController.getOneBeerByID)
  routes.get('/abv/:abv', beerController.getOneBeerByABV)
  routes.get('/ibu/:ibu', beerController.getOneBeerByIBU)
  routes.patch('/id/:id', beerController.updateBeer)
  routes.post('/', beerController.createBeer)
  routes.delete('/id/:id', beerController.deleteBeer)
  

module.exports = routes
