import { DeleteBreweryController } from '../../../presentation/controllers/delete-brewery-controller'
import { makeDbDeleteBrewery } from '../usecases/delete-brewery-factory'

export const makeDeleteBreweryController = (): DeleteBreweryController => {
  const deleteBrewery = makeDbDeleteBrewery()
  return new DeleteBreweryController(deleteBrewery)
}
