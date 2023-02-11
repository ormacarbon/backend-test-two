import { Router } from 'express';
import couponsHandler from '../../controller/coupons.handler';

const routes = Router();

routes.get('/api/v1/coupons', couponsHandler.findAll);
routes.post('/api/v1/coupons', couponsHandler.create);
routes.delete('/api/v1/coupons/:id', couponsHandler.delete);

export default routes;
