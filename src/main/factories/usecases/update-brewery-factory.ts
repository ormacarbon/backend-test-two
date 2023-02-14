import { DbUpdateBrewery } from '../../../data/usecases/db-update-brewery'
import { LoadBreweryPrismaRepository } from '../../../infra/db/prisma/load-brewery-prisma-repository'
import { UpdateBreweryPrismaRepository } from '../../../infra/db/prisma/update-brewery-prisma-repository'

export const makeDbUpdateBrewery = (): DbUpdateBrewery => {
  const loadBreweryRepository = new LoadBreweryPrismaRepository()
  const updateBreweryRepository = new UpdateBreweryPrismaRepository()
  return new DbUpdateBrewery(updateBreweryRepository, loadBreweryRepository)
}
