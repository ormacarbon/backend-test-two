import { faker } from '@faker-js/faker'
import { DeleteBreweryController, DeleteBreweryControllerRequest } from '../../../src/presentation/controllers/delete-brewery-controller'
import { DeleteBrewerySpy } from '../mocks/mock-brewery'

const mockRequest = (): DeleteBreweryControllerRequest => ({
  id: faker.datatype.uuid()
})

describe('DeleteBrewery Controller', () => {
  it('Should call DeleteBrewery with correct values', async () => {
    const deleteBrewerySpy = new DeleteBrewerySpy()
    const sut = new DeleteBreweryController(deleteBrewerySpy)
    const request = mockRequest()
    await sut.handle(request)
    expect(deleteBrewerySpy.params).toBe(request)
  })
})
