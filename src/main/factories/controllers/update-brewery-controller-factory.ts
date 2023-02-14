import { UpdateBreweryController } from '../../../presentation/controllers/update-brewery-controller'
import { makeDbUpdateBrewery } from '../usecases/update-brewery-factory'

export const makeUpdateBreweryController = (): UpdateBreweryController => {
  const updateBrewery = makeDbUpdateBrewery()
  return new UpdateBreweryController(updateBrewery)
}
