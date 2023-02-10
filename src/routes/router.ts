import { Router } from 'express';
import breweriesHandler from '../controller/breweries.handler';
import multer from '../config/multer.config';
import menuHandler from '../controller/menu.handler';
const routes = Router();

routes.get('/api/v1/breweries', breweriesHandler.findAllBrewelers);

routes.get('/api/v1/brewery/:id', breweriesHandler.find);

routes.get('/api/v1/menu', menuHandler.show);

routes.get('/api/v1/:name', breweriesHandler.findByName);

routes.post('/api/v1/breweries', breweriesHandler.store);

routes.post(
  '/api/v1/breweries/file',
  multer.single('data'),
  breweriesHandler.storeWithJSONFile
);

routes.delete('/api/v1/brewery/:id', breweriesHandler.delete);
routes.put('/api/v1/brewery/:id', breweriesHandler.uptade);

routes.post('/api/v1/menu/:id', menuHandler.addMenu);
routes.delete('/api/v1/menu/:id/:name_item', menuHandler.delete);

routes.get('/api/v1/menu/brewery/:brewery_name', menuHandler.findMenuFromOwner);

export default routes;
