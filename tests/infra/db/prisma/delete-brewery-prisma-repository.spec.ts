import { DeleteBreweryPrismaRepository } from '../../../../src/infra/db/prisma/delete-brewery-prisma-repository'
import { PrismaHelper } from '../../../../src/infra/db/prisma/prisma-helper'
import { mockBreweryEntity } from '../../../domain/mocks/mock-brewery'

const makeSut = () => {
  return new DeleteBreweryPrismaRepository()
}

describe('DeleteBreweryPrismaRepository', () => {
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
    const sut = makeSut()
    const brewery = await PrismaHelper.prisma.brewery.create({ data: mockBreweryEntity() })
    const result = await sut.handle({ id: brewery.id })
    expect(result).toBeTruthy()
  })
})
