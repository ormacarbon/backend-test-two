import { PrismaHelper } from '../infra/db/prisma/prisma-helper'

PrismaHelper.connect().then(async () => {
  const { setupApp } = await import('./config/app')
  const app = await setupApp()
  app.listen(3001, () => { console.log('Server running at http://localhost:3001') })
}).catch(console.error)
