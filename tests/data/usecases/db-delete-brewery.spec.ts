import { DbDeleteBrewery } from '../../../src/data/usecases/db-delete-brewery'
import { mockDeleteBreweryParams } from '../../domain/mocks/mock-brewery'
import { DeleteBreweryRepositorySpy } from '../mocks/mock-db-brewery'

describe('DbDeleteBrewery Usecase', () => {
  it('Should call DeleteBreweryRepository with correct values', async () => {
    const deleteBreweryRepositorySpy = new DeleteBreweryRepositorySpy()
    const sut = new DbDeleteBrewery(deleteBreweryRepositorySpy)
    const params = mockDeleteBreweryParams()
    await sut.handle(params)
    expect(deleteBreweryRepositorySpy.params).toBe(params)
  })
})
