import { DbDeleteBrewery } from '../../../data/usecases/db-delete-brewery'
import { DeleteBreweryPrismaRepository } from '../../../infra/db/prisma/delete-brewery-prisma-repository'

export const makeDbDeleteBrewery = (): DbDeleteBrewery => {
  const deleteBreweryRepository = new DeleteBreweryPrismaRepository()
  return new DbDeleteBrewery(deleteBreweryRepository)
}
