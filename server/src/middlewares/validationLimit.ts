import { NextFunction, Request, Response } from 'express';
import { InvalidArgumentError } from '../services/err/Errors';

export interface CustomLimitRequest extends Request {
  limit?: number;
}

const validateLimit = (
  req: CustomLimitRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.query.limit) {
      const limit = parseInt(req.query.limit as string);

      if (isNaN(limit)) {
        throw new InvalidArgumentError('Limit is not a valid number');
      }

      req.limit = limit;
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default validateLimit;
