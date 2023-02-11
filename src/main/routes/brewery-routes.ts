import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeLoadBreweriesController } from '../factories/controllers/load-breweries-controller-factory'
import { makeDeleteBreweryController } from '../factories/controllers/delete-brewery-controller-factory'

export default (router: Router): void => {
  router.get('/brewery', adaptRoute(makeLoadBreweriesController()))
  router.delete('/brewery/:id', adaptRoute(makeDeleteBreweryController()))
}
