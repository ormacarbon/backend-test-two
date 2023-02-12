import { DbUpdateBrewery } from '../../../data/usecases/db-update-brewery'
import { UpdateBreweryPrismaRepository } from '../../../infra/db/prisma/update-brewery-prisma-repository'

export const makeDbUpdateBrewery = (): DbUpdateBrewery => {
  const updateBreweryRepository = new UpdateBreweryPrismaRepository()
  return new DbUpdateBrewery(updateBreweryRepository)
}
