import { BreweryEntity } from '../../../src/domain/entities/brewery'
import { AddBrewery } from '../../../src/domain/usecases/add-brewery'
import { DeleteBrewery, DeleteBreweryParams } from '../../../src/domain/usecases/delete-brewery'
import { LoadBreweries } from '../../../src/domain/usecases/load-breweries'
import { UpdateBrewery, UpdateBreweryParams } from '../../../src/domain/usecases/update-brewery'
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
  result = true
  async handle (params: DeleteBreweryParams): Promise<boolean> {
    this.params = params
    return this.result
  }
}

export class AddBrewerySpy implements AddBrewery {
  params: BreweryEntity
  async handle (params: BreweryEntity): Promise<void> {
    this.params = params
  }
}

export class UpdateBrewerySpy implements UpdateBrewery {
  params: UpdateBreweryParams
  async handle (params: UpdateBreweryParams): Promise<void> {
    this.params = params
  }
}
