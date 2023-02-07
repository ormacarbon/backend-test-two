import { json } from 'express';
import cors from 'cors';
import { Express } from 'express';
import routes from '../routes/router';

export default function appConfig(app: Express): void {
  app.use(cors());
  app.use(json());
  app.use(routes);

}
