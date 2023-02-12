import express, { Express } from 'express'
import { setupRoute } from './routes'
import { setupMiddlewares } from './middlewares'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  setupMiddlewares(app)
  setupRoute(app)
  return app
}
