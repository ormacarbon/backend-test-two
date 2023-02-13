import { LoadBeerByIdController } from '../../../../../presentation/controllers/beer/load-beer-by-id/load-beer-by-id-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeDbLoadBeerById } from '../../../use-cases/beer/load-beer-by-id/db-load-beer-by-id-factory'

export const makeLoadBeerByIdController = (): Controller => {
	return new LoadBeerByIdController(makeDbLoadBeerById())
}
