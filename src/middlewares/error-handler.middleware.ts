import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import { AppError } from '#/api/app-error.js';

export interface IErrorHandlerMiddleware {
  handle: ErrorRequestHandler;
}

export class ErrorHandlerMiddleware implements IErrorHandlerMiddleware {
  handle(err: AppError, _req: Request, res: Response, next: NextFunction): void {
    return next(
      res.status(err.statusCode).json({
        statusCode: err.statusCode,
        type: err.type,
        message: err.message,
        details: err.details,
      }),
    );
  }
}
