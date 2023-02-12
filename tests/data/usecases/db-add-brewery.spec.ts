import { DbAddBrewery } from '../../../src/data/usecases/db-add-brewery'
import { mockAddBreweryParams } from '../../domain/mocks/mock-brewery'
import { AddBreweryRepositorySpy } from '../mocks/mock-db-brewery'

describe('DbAddBrewery Usecase', () => {
  it('Should call AddBreweryRepository with correct values', async () => {
    const addBreweryRepositorySpy = new AddBreweryRepositorySpy()
    const sut = new DbAddBrewery(addBreweryRepositorySpy)
    const params = mockAddBreweryParams()
    await sut.handle(params)
    expect(addBreweryRepositorySpy.params).toBe(params)
  })
})
