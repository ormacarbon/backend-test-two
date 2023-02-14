import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddBeerController } from '../factories/controllers/beer/add-beer/add-beer-controller-factory'
import { makeDeleteBeerByIdController } from '../factories/controllers/beer/delete-beer-by-id/delete-beer-by-id-controller-factory'
import { makeLoadBeerByIdController } from '../factories/controllers/beer/load-beer-by-id/load-beer-by-id-controller-factory'
import { makeLoadBeersController } from '../factories/controllers/beer/load-beers/load-beers-controller-factory'
import { makeUpdateBeerByIdController } from '../factories/controllers/beer/update-beer-by-id/update-beer-by-id-controller-factory'

export default (router: Router): void => {
	router.post('/beer', adaptRoute(makeAddBeerController()))
	router.get('/beers', adaptRoute(makeLoadBeersController()))
	router.get('/beer/:id', adaptRoute(makeLoadBeerByIdController()))
	router.patch('/beer/:id', adaptRoute(makeUpdateBeerByIdController()))
	router.delete('/beer/:id', adaptRoute(makeDeleteBeerByIdController()))
}
