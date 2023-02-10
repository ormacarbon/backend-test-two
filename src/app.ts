import express from 'express';
import beerRoute from './Routes/beer.routes';

const app = express();
app.use(express.json());
app.use('/beers', beerRoute);

export default app;
