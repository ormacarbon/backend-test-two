import { faker } from '@faker-js/faker'
import { BreweryEntity } from '../../../src/domain/entities/brewery'
import { AddBreweryController } from '../../../src/presentation/controllers/add-brewery-controller'
import { AddBrewerySpy } from '../mocks/mock-brewery'
import { serverError } from '../../../src/presentation/helpers/http-helper'
import { throwError } from '../../domain/mocks/test-helpers'

const mockRequest = (): BreweryEntity => ({
  abv: faker.datatype.float(),
  ibu: faker.datatype.float(),
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
  addBrewerySpy: AddBrewerySpy
  sut: AddBreweryController
}

const makeSut = (): SutTypes => {
  const addBrewerySpy = new AddBrewerySpy()
  const sut = new AddBreweryController(addBrewerySpy)
  return { sut, addBrewerySpy }
}

describe('AddBrewery Controller', () => {
  it('Should call AddBrewery with correct values', async () => {
    const { sut, addBrewerySpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(addBrewerySpy.params).toBe(request)
  })

  it('Should return 500 if AddBrewery throws', async () => {
    const { sut, addBrewerySpy } = makeSut()
    jest.spyOn(addBrewerySpy, 'handle').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
