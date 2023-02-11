import { faker } from '@faker-js/faker'
import { BreweryEntity } from '../../../src/domain/entities/brewery'
import { DeleteBreweryParams } from '../../../src/domain/usecases/delete-brewery'

export const mockBreweryEntity = (): BreweryEntity => ({
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

export const mockDeleteBreweryParams = (): DeleteBreweryParams => ({
  id: faker.datatype.uuid()
})
