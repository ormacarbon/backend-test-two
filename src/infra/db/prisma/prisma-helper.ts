import { PrismaClient } from '@prisma/client'

export const PrismaHelper = {
  prisma: new PrismaClient(),
  async connect () {
    await this.prisma.$connect()
  },
  async disconnect () {
    await this.prisma.$disconnect()
  }
}
