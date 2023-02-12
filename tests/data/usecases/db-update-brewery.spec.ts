import { DbUpdateBrewery } from '../../../src/data/usecases/db-update-brewery'
import { mockUpdateBreweryParams } from '../../domain/mocks/mock-brewery'
import { UpdateBreweryRepositorySpy } from '../mocks/mock-db-brewery'

describe('DbUpdateBrewery Usecase', () => {
  it('Should call UpdateBreweryRepository with correct values', async () => {
    const updateBrewerySpy = new UpdateBreweryRepositorySpy()
    const sut = new DbUpdateBrewery(updateBrewerySpy)
    const params = mockUpdateBreweryParams()
    await sut.handle(params)
    expect(updateBrewerySpy.params).toBe(params)
  })
})
