import { faker } from '@faker-js/faker'
import { AddBreweryRepository, AddBreweryRepositoryParams } from '../../../src/data/protocols/db/add-brewery-repository'
import { DeleteBreweryRepository, DeleteBreweryRepositoryParams } from '../../../src/data/protocols/db/delete-brewery-repository'
import { LoadBreweriesRepository } from '../../../src/data/protocols/db/load-breweries-repository'
import { BreweryEntity } from '../../../src/domain/entities/brewery'
import { mockBreweryEntity } from '../../domain/mocks/mock-brewery'
import { UpdateBreweryRepository, UpdateBreweryRepositoryParams } from '../../../src/data/protocols/db/update-brewery-repository'

export class LoadBreweriesRepositorySpy implements LoadBreweriesRepository {
  result = [mockBreweryEntity()]
  call = false
  async handle (): Promise<BreweryEntity[]> {
    this.call = true
    return this.result
  }
}

export class DeleteBreweryRepositorySpy implements DeleteBreweryRepository {
  result = mockBreweryEntity()
  params: DeleteBreweryRepositoryParams
  async handle (params: DeleteBreweryRepositoryParams): Promise<BreweryEntity> {
    this.params = params
    return this.result
  }
}

export class AddBreweryRepositorySpy implements AddBreweryRepository {
  params: AddBreweryRepositoryParams
  result: BreweryEntity
  async handle (params: AddBreweryRepositoryParams): Promise<BreweryEntity> {
    this.params = params
    this.result = params
    this.result.id = faker.datatype.uuid()
    return this.result
  }
}

export class UpdateBreweryRepositorySpy implements UpdateBreweryRepository {
  params: UpdateBreweryRepositoryParams
  result = mockBreweryEntity()
  async handle (params: UpdateBreweryRepositoryParams): Promise<BreweryEntity> {
    this.params = params
    return this.result
  }
}
