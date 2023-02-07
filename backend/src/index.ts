import { beerRouter } from './router/beerRouter';
import app from './app';

app.use('/', beerRouter);
