import { Router } from 'express';
import breweriesHandler from '../controller/breweries.handler';
import multer from '../config/multer.config';
import menuHandler from '../controller/menu.handler';
import couponsHandler from '../controller/coupons.handler';
import userHandler from '../controller/user.handler';
import reputationHandler from '../controller/reputation.handler';
const routes = Router();

routes.get('/api/v1/breweries', breweriesHandler.findAllBrewelers);
routes.post('/api/v1/breweries', breweriesHandler.store);

routes.get('/api/v1/brewery/:id', breweriesHandler.find);
routes.delete('/api/v1/brewery/:id', breweriesHandler.delete);
routes.put('/api/v1/brewery/:id', breweriesHandler.uptade);

routes.get('/api/v1/menu', menuHandler.show);
routes.post('/api/v1/menu/:id', menuHandler.addMenu);
routes.delete('/api/v1/menu/:id/:name_item', menuHandler.delete);
routes.get('/api/v1/menu/brewery/:brewery_name', menuHandler.findMenuFromOwner);

routes.post(
  '/api/v1/breweries/file',
  multer.single('data'),
  breweriesHandler.storeWithJSONFile
);

routes.get('/api/v1/user', userHandler.findAll);
routes.post('/api/v1/user', userHandler.store);

routes.get('/api/v1/reputation/:reputation', reputationHandler.add);

routes.get('/api/v1/coupons', couponsHandler.findAll);
routes.post('/api/v1/coupons', couponsHandler.create);
routes.delete('/api/v1/coupons/:id', couponsHandler.delete);

routes.get('/api/v1/:name', breweriesHandler.findByName);

export default routes;
