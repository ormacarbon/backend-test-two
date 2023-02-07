import { Router } from 'express';
import { findAllBrewelers, store, find } from '../controller/breweries.handler';
const routes = Router();

routes.get('/api/v1/brewelers', findAllBrewelers);
routes.get('/api/v1/brewelers/:id', find);
routes.post('/api/v1/brewelers', store);

export default routes;
