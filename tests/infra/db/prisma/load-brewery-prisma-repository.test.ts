import { LoadBreweryPrismaRepository } from '../../../../src/infra/db/prisma/load-brewery-prisma-repository'
import { PrismaHelper } from '../../../../src/infra/db/prisma/prisma-helper'
import { mockAddBreweryParams } from '../../../domain/mocks/mock-brewery'

describe('LoadBreweryPrismaRepository', () => {
  beforeAll(async () => {
    await PrismaHelper.connect()
    await PrismaHelper.prisma.brewery.deleteMany()
  })

  afterAll(async () => {
    await PrismaHelper.disconnect()
    await PrismaHelper.prisma.brewery.deleteMany()
  })

  beforeEach(async () => {
    await PrismaHelper.prisma.brewery.deleteMany()
  })

  it('Should return brewery on success', async () => {
    const brewery = await PrismaHelper.prisma.brewery.create({ data: mockAddBreweryParams() })
    const params = { id: brewery.id }
    const sut = new LoadBreweryPrismaRepository()
    const result = await sut.handle(params)
    expect(result).toBeTruthy()
  })
})
