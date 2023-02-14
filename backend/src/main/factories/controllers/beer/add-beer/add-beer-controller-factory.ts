import { AddBeerController } from '../../../../../presentation/controllers/beer/add-beer/add-beer-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeDbAddBeer } from '../../../use-cases/beer/add-beer/db-add-beer-factory'
import { makeAddBeerValidation } from './add-beer-validation-factory'

export const makeAddBeerController = (): Controller => {
	return new AddBeerController(makeAddBeerValidation(), makeDbAddBeer())
}
