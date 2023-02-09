import { NextFunction, Request, Response } from 'express';
import { BaseMiddleware } from '@core';

export class BeerMiddleware extends BaseMiddleware {
  validateBodyFields = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const name = req.body.name;

    if (!name) {
      this.log('Missing name body field');
      return res.status(400).send({ error: 'Missing Password Field' });
    }

    this.log('Valid Body Fields');
    next();
  };
}

export default BeerMiddleware;
