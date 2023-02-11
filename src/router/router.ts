import { Application } from 'express';
import breweriesRouter from './routes/breweries.router';
import couponsRouter from './routes/coupons.router';
import menuRouter from './routes/menu.router';
import reputationRouter from './routes/reputation.router';
import useRouter from './routes/user.router';

export function useRoutes(app: Application): void {
  app.use(couponsRouter);
  app.use(menuRouter);
  app.use(reputationRouter);
  app.use(useRouter);
  app.use(breweriesRouter);
}
