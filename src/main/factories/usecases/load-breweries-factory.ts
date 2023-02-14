import { DbLoadBreweries } from '../../../data/usecases/db-load-breweries'
import { LoadBreweriesPrismaRepository } from '../../../infra/db/prisma/load-breweries-prisma-repository'

export const makeDbLoadBreweries = (): DbLoadBreweries => {
  const loadBreweriesRepository = new LoadBreweriesPrismaRepository()
  return new DbLoadBreweries(loadBreweriesRepository)
}
