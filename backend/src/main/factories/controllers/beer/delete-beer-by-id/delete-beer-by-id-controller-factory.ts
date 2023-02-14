import { DeleteBeerByIdController } from '../../../../../presentation/controllers/beer/delete-beer-by-id/delete-beer-by-id-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeDbDeleteBeerById } from '../../../use-cases/beer/delete-beer-by-id/db-delete-beer-by-id-factory'

export const makeDeleteBeerByIdController = (): Controller => {
	return new DeleteBeerByIdController(makeDbDeleteBeerById())
}
