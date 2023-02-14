import { DbDeleteBrewery } from '../../../data/usecases/db-delete-brewery'
import { DeleteBreweryPrismaRepository } from '../../../infra/db/prisma/delete-brewery-prisma-repository'
import { LoadBreweryPrismaRepository } from '../../../infra/db/prisma/load-brewery-prisma-repository'

export const makeDbDeleteBrewery = (): DbDeleteBrewery => {
  const deleteBreweryRepository = new DeleteBreweryPrismaRepository()
  const loadBreweryRepository = new LoadBreweryPrismaRepository()
  return new DbDeleteBrewery(deleteBreweryRepository, loadBreweryRepository)
}
