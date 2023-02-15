import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

interface ErrorExtension {
  statusCode: number;
  message: string;
}

/**
 *  Funtion midleware error, used for capture errors from controllers.
 *
 * @param err
 * @param req
 * @param res
 * @param next
 * @returns
 */

const errorHandler = <T extends ErrorExtension>(
  err: T,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return res.status(403).json({
      message: err.issues,
      statusCode: 403
    });
  }

  if (err) {
    res.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode,
      href: req.url
    });
  }

  next();
};

export default errorHandler;
