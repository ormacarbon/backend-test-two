import express, { Express } from 'express'
import { setupRoute } from './routes'
import { setupMiddlewares } from './middlewares'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  setupRoute(app)
  setupMiddlewares(app)
  return app
}
