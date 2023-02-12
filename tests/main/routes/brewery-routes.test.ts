import { PrismaHelper } from '../../../src/infra/db/prisma/prisma-helper'
import { setupApp } from '../../../src/main/config/app'
import request from 'supertest'
import { Express } from 'express'
import { mockAddBreweryParams, mockBreweryEntity } from '../../domain/mocks/mock-brewery'

let app: Express

describe('Brewery Routes', () => {
  beforeAll(async () => {
    app = await setupApp()
    await PrismaHelper.connect()
  })

  afterAll(async () => {
    await PrismaHelper.disconnect()
  })

  beforeEach(async () => {
    await PrismaHelper.prisma.brewery.deleteMany()
  })

  describe('GET /brewery', () => {
    it('Should return 200 if there are breweries in the database', async () => {
      await PrismaHelper.prisma.brewery.create({ data: mockBreweryEntity() })
      await request(app).get('/api/brewery').expect(200)
    })

    it('Should return 204 if there are no breweries in the database', async () => {
      await request(app).get('/api/brewery').expect(204)
    })
  })

  describe('DELETE /brewery/:id', () => {
    it('Should return 204 on success', async () => {
      const brewery = await PrismaHelper.prisma.brewery.create({ data: mockBreweryEntity() })
      await request(app).delete('/api/brewery/' + brewery.id).expect(204)
    })
  })

  describe('POST /brewery', () => {
    it('Should return 204 on success', async () => {
      await request(app).post('/api/brewery').send({ ...mockAddBreweryParams() }).expect(204)
    })
  })
})
