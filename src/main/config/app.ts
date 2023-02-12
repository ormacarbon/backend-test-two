import express from 'express';
import setupMiddlewares from "./middlewares";
import { mongoSeed } from '../middlewares/mongo-seed/mongo-seed';
import { NextFunction } from 'express';

const app = express();
app.use(async (next: NextFunction) => await mongoSeed(next));
setupMiddlewares(app);

export default app;
