import { Application } from 'express';
import breweriesRouter from './routes/breweries.router';
import couponsRouter from './routes/coupons.router';
import menuRouter from './routes/menu.router';
import reputationRouter from './routes/reputation.router';
import useRouter from './routes/user.router';
import searchRouter from './routes/search.router';


/**
 * @param {Express.App}
 * @description used to load application routes
 */
export function useRoutes(app: Application): void {
  app.use(searchRouter);
  app.use(couponsRouter);
  app.use(menuRouter);
  app.use(reputationRouter);
  app.use(useRouter);
  app.use(breweriesRouter);
}
