import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static execute(error: Error, _req: Request, res: Response, _next: NextFunction) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export default ErrorHandler;
