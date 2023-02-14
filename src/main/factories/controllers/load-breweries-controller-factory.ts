import { Controller } from '../../../presentation/abstract/controller'
import { LoadBreweriesController } from '../../../presentation/controllers/load-breweries-controller'
import { makeDbLoadBreweries } from '../usecases/load-breweries-factory'

export const makeLoadBreweriesController = (): Controller => {
  const loadBreweries = makeDbLoadBreweries()
  return new LoadBreweriesController(loadBreweries)
}
