import { DeleteBreweryRepository, DeleteBreweryRepositoryParams } from '../../../data/protocols/db/delete-brewery-repository'
import { BreweryEntity } from '../../../domain/entities/brewery'
import { PrismaHelper } from './prisma-helper'

export class DeleteBreweryPrismaRepository implements DeleteBreweryRepository {
  async handle (params: DeleteBreweryRepositoryParams): Promise<BreweryEntity> {
    const brewery = await PrismaHelper.prisma.brewery.delete({ where: { id: params.id } })
    return PrismaHelper.map(brewery)
  }
}
