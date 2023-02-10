import { NextFunction, Request, Response } from 'express';
import BadRequestError from '../Utils/ErrorsTypes/BadRequestError';

class BeerValidations {
  public static propertiesToCreate(req: Request, _res: Response, next: NextFunction) {
    const beer = req.body;
    const properties = ['abv', 'ibu', 'name'];

    try {
      properties.forEach((property) => {
        const checkProperty = property in beer;
        if (!checkProperty) throw new BadRequestError(`${property} attribute is missing.`);
      });

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default BeerValidations;
