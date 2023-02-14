import { PrismaHelper } from '../infra/db/prisma/prisma-helper'

const port = 3001

PrismaHelper.connect().then(async () => {
  const { setupApp } = await import('./config/app')
  const app = await setupApp()
  app.listen(port ?? process.env.PORT, () => { console.log('Server running at http://localhost:' + port ?? process.env.PORT) })
}).catch(console.error)
