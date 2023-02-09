import { BreweryEntity } from '../../../src/domain/entities/brewery'
import { LoadBreweries } from '../../../src/domain/usecases/load-breweries'
import { mockBreweryEntity } from '../../domain/mocks/mock-brewery'

export class LoadBreweriesSpy implements LoadBreweries {
  result = mockBreweryEntity()
  call = false
  async handle (): Promise<BreweryEntity[]> {
    this.call = true
    return [this.result]
  }
}
