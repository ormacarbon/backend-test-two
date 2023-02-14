import { PrismaClient, brewery } from '@prisma/client'
import { BreweryEntity } from '../../../domain/entities/brewery'

export const PrismaHelper = {
  prisma: new PrismaClient(),
  async connect () {
    await this.prisma.$connect()
  },
  async disconnect () {
    await this.prisma.$disconnect()
  },
  map (brewery: brewery): BreweryEntity {
    return {
      ...brewery,
      coordinates: brewery.coordinates.map(decimal => decimal.toNumber())
    }
  }
}
