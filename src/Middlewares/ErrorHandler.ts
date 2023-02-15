import { NextFunction, Request, Response } from 'express';
import AbstractHTTPException from '../Utils/ErrorsTypes/AbstractHttpException';

class ErrorHandler {
  public static execute(
    error: AbstractHTTPException,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    console.log(error);
    if (error.statusCode) return res.status(error.statusCode).json({ message: error.message });
    return res.status(500).json({ message: error.message });
  }
}

export default ErrorHandler;
