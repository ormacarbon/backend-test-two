import * as express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import routeBeer from './routes/Beer';

const app = express();

app.use(express.json());

app.use('/beers', routeBeer);

app.use(errorHandler);

export default app;