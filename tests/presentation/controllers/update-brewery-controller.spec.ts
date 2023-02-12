import { faker } from '@faker-js/faker'
import { UpdateBreweryParams } from '../../../src/domain/usecases/update-brewery'
import { UpdateBreweryController } from '../../../src/presentation/controllers/update-brewery-controller'
import { UpdateBrewerySpy } from '../mocks/mock-brewery'

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

describe('UpdateBrewery Controller', () => {
  it('Should call UpdateBrewery with correct values', async () => {
    const updateBrewerySpy = new UpdateBrewerySpy()
    const sut = new UpdateBreweryController(updateBrewerySpy)
    const request = mockRequest()
    await sut.handle(request)
    expect(updateBrewerySpy.params).toBe(request)
  })
})
