import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'
const prisma = new PrismaClient()

async function main () {
  const fileContents = fs.readFileSync(path.join(__dirname, '../db.json'), { encoding: 'utf-8' })
  const dataJson = JSON.parse(fileContents.toString())

  console.log('Start seeding...')
  for (const brewery of dataJson) {
    await prisma.brewery.create({ data: brewery })
  }
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.log(error)
    await prisma.$disconnect()
  })
