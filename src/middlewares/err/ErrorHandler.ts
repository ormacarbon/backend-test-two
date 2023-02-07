import { Errback, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

const errorHandler = (
  err: Errback,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    res.status(400).json(err);
  }

  if (err) {
    console.log('cai aqui?');

    res.status(400).json(err);
  }

  next();
};

export default errorHandler;
