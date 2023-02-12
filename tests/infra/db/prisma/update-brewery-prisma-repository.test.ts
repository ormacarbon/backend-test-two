import { PrismaHelper } from '../../../../src/infra/db/prisma/prisma-helper'
import { UpdateBreweryPrismaRepository } from '../../../../src/infra/db/prisma/update-brewery-prisma-repository'
import { mockAddBreweryParams, mockUpdateBreweryParams } from '../../../domain/mocks/mock-brewery'

describe('UpdateBreweryPrismaRepository', () => {
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
    const brewery = await PrismaHelper.prisma.brewery.create({ data: mockAddBreweryParams() })
    const params = mockUpdateBreweryParams()
    params.id = brewery.id
    const sut = new UpdateBreweryPrismaRepository()
    const result = await sut.handle(params)
    expect(result).toBeTruthy()
  })
})
