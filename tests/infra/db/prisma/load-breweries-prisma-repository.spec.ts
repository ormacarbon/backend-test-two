import { PrismaClient } from '@prisma/client'
import { LoadBreweriesPrismaRepository } from '../../../../src/infra/db/prisma/load-breweries-prisma-repository'
import { PrismaHelper } from '../../../../src/infra/db/prisma/prisma-helper'
import { mockBreweryEntity } from '../../../domain/mocks/mock-brewery'

const makeSut = () => {
  return new LoadBreweriesPrismaRepository()
}

const prisma = new PrismaClient()

describe('LoadBreweriesPrismaRepository', () => {
  beforeAll(async () => {
    await PrismaHelper.connect()
  })

  afterAll(async () => {
    await PrismaHelper.disconnect()
  })

  beforeEach(async () => {
    await prisma.brewery.deleteMany()
  })

  it('Should return breweries on success', async () => {
    const sut = makeSut()
    await prisma.brewery.create({ data: mockBreweryEntity() })
    const result = await sut.handle()
    expect(result[0]).toBeTruthy()
  })

  it('Should return [] if database is empty', async () => {
    const sut = makeSut()
    const result = await sut.handle()
    expect(result).toEqual([])
  })
})
