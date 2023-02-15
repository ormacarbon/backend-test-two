import { Application, json } from 'express';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import errorHandler from '../middlewares/err/ErrorHandler';
import { useRoutes } from '../router/router';
import swaggerDocument from './swagger.json';


/**
 * 
 * @param {Express.App}
 * @description Used for load dependences server, like routes, docs, handlerErrors with Express.App
 */
export default function appConfig(app: Application): void {
  app.use(cors());
  app.use(json());
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  useRoutes(app);
  app.use(errorHandler);
}