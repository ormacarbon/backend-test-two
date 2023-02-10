import express from 'express';
import beerRoute from './Routes/beer.routes';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use('/beers', beerRoute);
app.use(ErrorHandler.execute);

export default app;
