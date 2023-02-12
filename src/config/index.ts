import { Application, json } from 'express';
import cors from 'cors';

import errorHandler from '../middlewares/err/ErrorHandler';

import { useRoutes } from '../router/router';

export default function appConfig(app: Application): void {
  app.use(cors());
  app.use(json());

  useRoutes(app);
  app.use(errorHandler);
}
