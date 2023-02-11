import { Router } from 'express';
import reputationHandler from '../../controller/reputation.handler';
import Authorization from '../../middlewares/Authorization';

const routes = Router();

routes.get(
  '/api/v1/reputation/:brewery/:reputation',
  Authorization.authBearer,
  reputationHandler.add
);

export default routes;
