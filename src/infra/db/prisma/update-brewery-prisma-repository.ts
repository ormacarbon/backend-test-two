import { UpdateBreweryRepository, UpdateBreweryRepositoryParams } from '../../../data/protocols/db/update-brewery-repository'
import { BreweryEntity } from '../../../domain/entities/brewery'
import { PrismaHelper } from './prisma-helper'

export class UpdateBreweryPrismaRepository implements UpdateBreweryRepository {
  async handle (params: UpdateBreweryRepositoryParams): Promise<BreweryEntity> {
    const brewery = await PrismaHelper.prisma.brewery.update({ where: { id: params.id }, data: params })
    return PrismaHelper.map(brewery)
  }
}
