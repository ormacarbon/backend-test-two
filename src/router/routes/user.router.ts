import { Router } from 'express';
import userHandler from '../../controller/user.handler';

const routes = Router();

routes.get('/api/v1/user', userHandler.findAll);
routes.post('/api/v1/user', userHandler.store);

export default routes;
