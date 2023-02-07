import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    res.status(400).json(err);
  }

  if (err.message.includes('E11000')) {
    res.status(400).json({
      message: 'Key duplicate',
      status: err.statusCode
    });
  }

  if (err) {
    res.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode
    });
  }

  next();
};

export default errorHandler;
