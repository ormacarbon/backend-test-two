import { LoadBreweryRepository, LoadBreweryRepositoryParams } from '../../../data/protocols/db/load-brewery-repository'
import { BreweryEntity } from '../../../domain/entities/brewery'
import { PrismaHelper } from './prisma-helper'

export class LoadBreweryPrismaRepository implements LoadBreweryRepository {
  async handle (params: LoadBreweryRepositoryParams): Promise<BreweryEntity> {
    const brewery = await PrismaHelper.prisma.brewery.findUnique({ where: { id: params.id } })
    return brewery ? PrismaHelper.map(brewery) : null
  }
}
