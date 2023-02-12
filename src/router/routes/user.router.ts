import { Router } from 'express';
import userHandler from '../../controller/user.handler';

const routes = Router();

routes.get('/api/v1/all/user', userHandler.findAll);
routes.get('/api/v1/user/:id', userHandler.findUserById);
routes.post('/api/v1/user', userHandler.store);
routes.post('/api/v1/login', userHandler.login);
routes.get('/api/v1/user', userHandler.findUser);

export default routes;
