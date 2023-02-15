import { Router } from 'express';
import breweriesHandler from '../../controller/breweries.handler';
import multer from '../../config/multer.config';
import validateLimit from '../../middlewares/validationLimit';

const routes = Router();

routes.get(
  '/api/v1/breweries',
  validateLimit,
  breweriesHandler.findAllBrewelers
);
routes.post('/api/v1/breweries', breweriesHandler.store);

routes.post(
  '/api/v1/breweries/file',
  multer.single('data'),
  breweriesHandler.storeJsonFile
);

routes.get('/api/v1/brewery/:id', breweriesHandler.find);
routes.delete('/api/v1/brewery/:id', breweriesHandler.delete);
routes.put('/api/v1/brewery/:id', breweriesHandler.uptade);

routes.get('/api/v1/:name', breweriesHandler.findByName);

export default routes;
