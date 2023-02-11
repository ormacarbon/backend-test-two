import { LoadBreweriesRepository } from '../../../data/protocols/db/load-breweries-repository'
import { BreweryEntity } from '../../../domain/entities/brewery'
import { PrismaHelper } from './prisma-helper'

export class LoadBreweriesPrismaRepository implements LoadBreweriesRepository {
  async handle (): Promise<BreweryEntity[]> {
    const breweries = await PrismaHelper.prisma.brewery.findMany()
    return breweries.length ? breweries.map((brewery) => PrismaHelper.map(brewery)) : []
  }
}
