import { AddBreweryRepository, AddBreweryRepositoryParams } from '../../../data/protocols/db/add-brewery-repository'
import { BreweryEntity } from '../../../domain/entities/brewery'
import { PrismaHelper } from './prisma-helper'

export class AddBreweryPrismaRepository implements AddBreweryRepository {
  async handle (params: AddBreweryRepositoryParams): Promise<BreweryEntity> {
    const brewery = await PrismaHelper.prisma.brewery.create({ data: params })
    return PrismaHelper.map(brewery)
  }
}
