import { Express } from 'express'
import { bodyParser } from '../middlewares/body-parser'
import { contentType } from '../middlewares/content-type'

export const setupMiddlewares = (app: Express) => {
  app.use(bodyParser)
  app.use(contentType)
}
