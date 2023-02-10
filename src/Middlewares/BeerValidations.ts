import { NextFunction, Request, Response } from 'express';

class BeerValidations {
  public static propertiesToCreate(req: Request, _res: Response, next: NextFunction) {
    const beer = req.body;
    const properties = ['abv', 'ibu', 'name'];

    try {
      properties.forEach((property) => {
        const checkProperty = property in beer;
        if (!checkProperty) throw new Error('Missing attribute');
      });

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default BeerValidations;
