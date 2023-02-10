import { NextFunction, Request, Response } from 'express';
import BadRequestError from '../Utils/ErrorsTypes/BadRequestError';
import UnprocessableEntityError from '../Utils/ErrorsTypes/UnprocessableEntityError';
import ValidationsInputs from './Validations/ValidationInputs';

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

  public static checkProperties(req: Request, _res: Response, next: NextFunction) {
    const beer = req.body;
    try {
      const { isError, message } = ValidationsInputs.validateBeerObject(beer);
      if (!isError) return next();

      throw new UnprocessableEntityError(message);
    } catch (error) {
      return next(error);
    }
  }
}

export default BeerValidations;
