import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err && err.statusCode) {
    res.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode
    });
  }

  next();
};

export default errorHandler;
