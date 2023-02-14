import { LoadBeersController } from '../../../../../presentation/controllers/beer/load-beers/load-beers-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeDbLoadBeers } from '../../../use-cases/beer/load-beers/db-load-beers-factory'

export const makeLoadBeersController = (): Controller => {
	return new LoadBeersController(makeDbLoadBeers())
}
