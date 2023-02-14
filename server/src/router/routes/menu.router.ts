import { Router } from 'express';
import menuHandler from '../../controller/menu.handler';

const routes = Router();

routes.get('/api/v1/menu', menuHandler.show);
routes.post('/api/v1/menu/:id', menuHandler.addMenu);
routes.delete('/api/v1/menu/:id/:name_item', menuHandler.delete);
routes.get('/api/v1/menu/brewery/:brewery_name', menuHandler.findMenuFromOwner);

export default routes;
