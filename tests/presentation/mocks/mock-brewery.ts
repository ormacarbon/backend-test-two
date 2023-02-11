import { BreweryEntity } from '../../../src/domain/entities/brewery'
import { DeleteBrewery, DeleteBreweryParams } from '../../../src/domain/usecases/delete-brewery'
import { LoadBreweries } from '../../../src/domain/usecases/load-breweries'
import { mockBreweryEntity } from '../../domain/mocks/mock-brewery'

export class LoadBreweriesSpy implements LoadBreweries {
  result = [mockBreweryEntity()]
  call = false
  async handle (): Promise<BreweryEntity[]> {
    this.call = true
    return this.result
  }
}

export class DeleteBrewerySpy implements DeleteBrewery {
  params: DeleteBreweryParams
  async handle (params: DeleteBreweryParams): Promise<void> {
    this.params = params
  }
}