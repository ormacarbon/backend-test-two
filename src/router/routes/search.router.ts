import { Router } from 'express';
import breweriesHandler from '../../controller/breweries.handler';

const routes = Router();

routes.post('/api/v1/search', breweriesHandler.search);

export default routes;
