import { LoadBreweriesRepository } from '../../../src/data/protocols/db/load-breweries-repository'
import { BreweryEntity } from '../../../src/domain/entities/brewery'
import { mockBreweryEntity } from '../../domain/mocks/mock-brewery'

export class LoadBreweriesRepositorySpy implements LoadBreweriesRepository {
  result = [mockBreweryEntity()]
  call = false
  async handle (): Promise<BreweryEntity[]> {
    this.call = true
    return this.result
  }
}
