import { AddBreweryPrismaRepository } from '../../../../src/infra/db/prisma/add-brewery-prisma-repository'
import { PrismaHelper } from '../../../../src/infra/db/prisma/prisma-helper'
import { mockAddBreweryParams } from '../../../domain/mocks/mock-brewery'

describe('AddBreweryPrismaRepository', () => {
  beforeAll(async () => {
    await PrismaHelper.connect()
  })

  afterAll(async () => {
    await PrismaHelper.disconnect()
  })

  beforeEach(async () => {
    await PrismaHelper.prisma.brewery.deleteMany()
  })

  it('Should return brewery on success', async () => {
    const sut = new AddBreweryPrismaRepository()
    const result = await sut.handle(mockAddBreweryParams())
    expect(result).toBeTruthy()
  })
})
