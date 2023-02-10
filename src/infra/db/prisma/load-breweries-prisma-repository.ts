import { LoadBreweriesRepository } from '../../../data/protocols/db/load-breweries-repository'
import { BreweryEntity } from '../../../domain/entities/brewery'
import { PrismaHelper } from './prisma-helper'

export class LoadBreweriesPrismaRepository implements LoadBreweriesRepository {
  async handle (): Promise<BreweryEntity[]> {
    return await PrismaHelper.prisma.brewery.findMany()
  }
}
