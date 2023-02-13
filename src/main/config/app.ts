import express, { Express } from 'express'
import { setupRoute } from './routes'
import { setupMiddlewares } from './middlewares'
import { setupSwagger } from './swagger'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  setupSwagger(app)
  setupMiddlewares(app)
  setupRoute(app)
  return app
}
