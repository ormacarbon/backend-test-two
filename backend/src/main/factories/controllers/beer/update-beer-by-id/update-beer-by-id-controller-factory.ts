import { UpdateBeerByIdController } from '../../../../../presentation/controllers/beer/update-beer-by-id/update-beer-by-id-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeDbUpdateBeerById } from '../../../use-cases/beer/update-beer-by-id/db-update-beer-by-id'

export const makeUpdateBeerByIdController = (): Controller => {
	return new UpdateBeerByIdController(makeDbUpdateBeerById())
}
