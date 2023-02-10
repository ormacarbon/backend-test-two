import { BreweryEntity } from '../../domain/entities/brewery'
import { LoadBreweries } from '../../domain/usecases/load-breweries'
import { LoadBreweriesRepository } from '../protocols/db/load-breweries-repository'

export class DbLoadBreweries implements LoadBreweries {
  constructor (private readonly loadBreweriesRepository: LoadBreweriesRepository) {}
  async handle (): Promise<BreweryEntity[]> {
    const result = await this.loadBreweriesRepository.handle()
    return result
  }
}
