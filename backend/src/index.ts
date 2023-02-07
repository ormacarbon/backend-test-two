import { beerProductRouter } from './router/beerProductRouter';
import app from './app';

app.use('/', beerProductRouter);
