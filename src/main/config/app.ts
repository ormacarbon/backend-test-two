import express from 'express';
import setupMiddlewares from "./middlewares";
import { mongoSeed } from '../middlewares/mongo-seed/mongo-seed';
import { Request, Response, NextFunction } from 'express';

const app = express();
app.use(async (req: Request, res: Response, next: NextFunction) => await mongoSeed(req, res, next));
setupMiddlewares(app);

export default app;
