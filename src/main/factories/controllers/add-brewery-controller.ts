import { AddBreweryController } from '../../../presentation/controllers/add-brewery-controller'
import { makeDbAddBrewery } from '../usecases/add-brewery-factory'

export const makeAddBreweryController = (): AddBreweryController => {
  const addBrewery = makeDbAddBrewery()
  return new AddBreweryController(addBrewery)
}
