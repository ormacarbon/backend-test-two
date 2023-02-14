import { DbAddBrewery } from '../../../data/usecases/db-add-brewery'
import { AddBreweryPrismaRepository } from '../../../infra/db/prisma/add-brewery-prisma-repository'

export const makeDbAddBrewery = (): DbAddBrewery => {
  const addBreweryRepository = new AddBreweryPrismaRepository()
  return new DbAddBrewery(addBreweryRepository)
}
