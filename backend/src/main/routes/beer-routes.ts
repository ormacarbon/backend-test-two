import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
	router.post('/beer', adaptRoute(makeAddBeerController()))
	router.get('/beers', adaptRoute(makeLoadBeersController()))
	router.get('/beer/:id', adaptRoute(makeLoadBeerByIdController()))
	router.patch('/beer/:id', adaptRoute(makeUpdateBeerByIdController()))
	router.delete('/beer/:id', adaptRoute(makeDeleteBeerByIdController()))
}
