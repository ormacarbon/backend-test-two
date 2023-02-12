import { Express } from "express";
import { bodyParser, cors } from "../middlewares";
import { contentType } from '../middlewares/content-types/content-types';

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
}