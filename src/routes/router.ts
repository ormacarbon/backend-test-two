import { Router } from 'express';
import breweriesHandler from '../controller/breweries.handler';
const routes = Router();

routes.get('/api/v1/brewelers', breweriesHandler.findAllBrewelers);
routes.get('/api/v1/brewelers/:id', breweriesHandler.find);
routes.post('/api/v1/brewelers', breweriesHandler.store);

export default routes;
