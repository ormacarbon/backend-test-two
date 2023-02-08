import { Router } from 'express';
import breweriesHandler from '../controller/breweries.handler';
import multer from '../config/multer.config';
const routes = Router();

routes.get('/api/v1/brewelers', breweriesHandler.findAllBrewelers);

routes.get('/api/v1/brewelers/:id', breweriesHandler.find);
routes.post('/api/v1/brewelers', breweriesHandler.store);

routes.post(
  '/api/v1/brewelers/file',
  multer.single('data'),
  breweriesHandler.storeWithJSONFile
);

routes.delete('/api/v1/brewelers/:id', breweriesHandler.findAndDelete);
routes.put('/api/v1/brewelers/:id', breweriesHandler.uptade);

routes.get('/api/v1/brewely/:name', breweriesHandler.findByName);

export default routes;
