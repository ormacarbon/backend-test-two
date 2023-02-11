import { NextFunction, Request, Response } from 'express';
import BadRequestError from '../Utils/ErrorsTypes/BadRequestError';
import UnprocessableEntityError from '../Utils/ErrorsTypes/UnprocessableEntityError';
import ValidationsInputs from './Validations/ValidationInputs';

class BeerValidations {
  public static propertiesToCreate(req: Request, _res: Response, next: NextFunction) {
    const beerPropeties = req.body;
    const properties = ['abv', 'ibu', 'name'];

    try {
      properties.forEach((property) => {
        const checkProperty = property in beerPropeties;
        if (!checkProperty) throw new BadRequestError(`${property} attribute is missing.`);
      });

      return next();
    } catch (error) {
      return next(error);
    }
  }

  public static checkProperties(req: Request, _res: Response, next: NextFunction) {
    const beerPropeties = req.body;
    try {
      const { isError, message } = ValidationsInputs.validateBeerObject(beerPropeties);
      if (!isError) return next();

      throw new UnprocessableEntityError(message);
    } catch (error) {
      return next(error);
    }
  }

  public static checkPropertiesToUpdate(req: Request, _res: Response, next: NextFunction) {
    const beerPropeties = req.body;
    try {
      const properties = [
        'abv', 'address', 'category', 'city', 'coordinates',
        'country', 'ibu', 'name', 'description', 'state', 'website'];

      const checkProperties = properties.some((property) => property in beerPropeties);
      if (!checkProperties || !beerPropeties) {
        throw new BadRequestError('Missing property to update a document.');
      }

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default BeerValidations;
