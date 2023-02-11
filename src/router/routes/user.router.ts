import { Router } from 'express';
import userHandler from '../../controller/user.handler';

const routes = Router();

routes.get('/api/v1/user', userHandler.findAll);
routes.post('/api/v1/user', userHandler.store);
routes.post('/api/v1/login', userHandler.login);

export default routes;
