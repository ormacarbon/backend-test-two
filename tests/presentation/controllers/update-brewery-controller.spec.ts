import { faker } from '@faker-js/faker'
import { UpdateBreweryParams } from '../../../src/domain/usecases/update-brewery'
import { UpdateBreweryController } from '../../../src/presentation/controllers/update-brewery-controller'
import { UpdateBrewerySpy } from '../mocks/mock-brewery'
import { noContent, serverError } from '../../../src/presentation/helpers/http-helper'
import { throwError } from '../../domain/mocks/test-helpers'

const mockRequest = (): UpdateBreweryParams => ({
  id: faker.datatype.uuid(),
  abv: faker.datatype.number(),
  ibu: faker.datatype.number(),
  address: faker.address.streetAddress(),
  category: faker.commerce.department(),
  city: faker.address.cityName(),
  coordinates: [faker.datatype.float(), faker.datatype.float()],
  country: faker.address.country(),
  description: faker.lorem.paragraph(),
  name: faker.company.name(),
  state: faker.address.state(),
  website: faker.internet.domainName()
})

type SutTypes = {
  updateBrewerySpy: UpdateBrewerySpy
  sut: UpdateBreweryController
}

const makeSut = (): SutTypes => {
  const updateBrewerySpy = new UpdateBrewerySpy()
  const sut = new UpdateBreweryController(updateBrewerySpy)
  return { sut, updateBrewerySpy }
}

describe('UpdateBrewery Controller', () => {
  it('Should call UpdateBrewery with correct values', async () => {
    const { sut, updateBrewerySpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(updateBrewerySpy.params).toBe(request)
  })

  it('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const result = await sut.handle(mockRequest())
    expect(result).toEqual(noContent())
  })

  it('Should return 500 if UpdateBrewery throws', async () => {
    const { sut, updateBrewerySpy } = makeSut()
    jest.spyOn(updateBrewerySpy, 'handle').mockImplementationOnce(throwError)
    const result = await sut.handle(mockRequest())
    expect(result).toEqual(serverError(new Error()))
  })
})
