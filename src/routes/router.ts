import { Router } from 'express';
import breweriesHandler from '../controller/breweries.handler';
import multer from '../config/multer.config';
import menuHandler from '../controller/menu.handler';
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

routes.get('/api/v1/menu', menuHandler.show);
routes.post('/api/v1/menu/:id', menuHandler.addMenu);

export default routes;
