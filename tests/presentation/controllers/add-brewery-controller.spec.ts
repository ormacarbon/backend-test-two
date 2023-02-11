import { faker } from '@faker-js/faker'
import { BreweryEntity } from '../../../src/domain/entities/brewery'
import { AddBreweryController } from '../../../src/presentation/controllers/add-brewery-controller'
import { AddBrewerySpy } from '../mocks/mock-brewery'

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

describe('AddBrewery Controller', () => {
  it('Should call AddBrewery with correct values', async () => {
    const addBrewerySpy = new AddBrewerySpy()
    const sut = new AddBreweryController(addBrewerySpy)
    const request = mockRequest()
    await sut.handle(request)
    expect(addBrewerySpy.params).toBe(request)
  })
})
