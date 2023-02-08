import { NextFunction, Request, Response } from 'express';

interface ErrorExtension {
  statusCode: number;
  message: string;
}

const errorHandler = <T extends ErrorExtension>(
  err: T,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err && err.statusCode) {
    res.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode,
      href: req.url
    });
  }

  next();
};

export default errorHandler;
