import { Router } from 'express';
import { findAllBrewelers, store } from '../controller/breweries.handler';
const routes = Router();

routes.get('/api/v1/brewelers', findAllBrewelers);
routes.post('/api/v1/brewelers', store);

export default routes;
