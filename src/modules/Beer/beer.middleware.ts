import { BeerEntity } from '@entity';
import { BaseMiddleware } from '@interfaces';
import { NextFunction, Request, Response } from '@types';

import { BeerController } from './beer.controller';

export class BeerMiddleware extends BaseMiddleware<BeerController> {
  validateListQuery = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const limit = req.params.limit
      ? parseInt(req.params.limit as string, 10)
      : undefined;

    const offset = req.params.offset
      ? parseInt(req.params.offset as string, 10)
      : undefined;

    if (['number', undefined].includes(typeof limit)) {
      this.log('Limit must be a number');
      return res.status(400).send({ message: 'Limit must be a number' });
    }

    if (['number', undefined].includes(typeof offset)) {
      this.log('Offset must be a number');
      return res.status(400).send({ message: 'Offset must be a number' });
    }

    next();
  };

  validateCreateBody = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const beer = new BeerEntity();

    beer.name = req.body.name;
    beer.category = req.body.category;
    beer.description = req.body.description;
    beer.website = req.body.website;
    beer.abv = req.body.abv;
    beer.ibu = req.body.ibu;
    beer.address = req.body.address;
    beer.city = req.body.city;
    beer.state = req.body.state;
    beer.country = req.body.country;

    if (req.body.coordinates && req.body.coordinates.length === 2) {
      beer.lat = req.body.coordinates[0];
      beer.long = req.body.coordinates[1];
    }

    const errors = await this.validate(beer);

    if (errors.length > 0) {
      this.log('Validation failed');
      return res.status(400).send({ message: 'Validation failed', errors });
    }

    next();
  };

  validateUpdateBody = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    return this.validatePatchBody(req, res, next);
  };

  validatePatchBody = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const beer = new BeerEntity();

    if (req.body.name) beer.name = req.body.name;
    if (req.body.category) beer.category = req.body.category;
    if (req.body.description) beer.description = req.body.description;
    if (req.body.website) beer.website = req.body.website;
    if (req.body.abv) beer.abv = req.body.abv;
    if (req.body.ibu) beer.ibu = req.body.ibu;
    if (req.body.address) beer.address = req.body.address;
    if (req.body.city) beer.city = req.body.city;
    if (req.body.state) beer.state = req.body.state;
    if (req.body.country) beer.country = req.body.country;
    if (req.body.coordinates && req.body.coordinates.length === 2) {
      beer.lat = req.body.coordinates[0];
      beer.long = req.body.coordinates[1];
    }

    const errors = await this.validate(beer, {
      skipMissingProperties: true,
    });

    if (errors.length > 0) {
      this.log(errors);
      res.status(400).send(errors);
    }

    next();
  };

  validateDeleteQuery = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    return this.valiateIdQuery(req, res, () =>
      this.validateBeerExists(req, res, next),
    );
  };

  valiateIdQuery = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) {
      this.log('Id is required');
      return res.status(400).send({ message: 'Id is required' });
    }

    if (typeof id !== 'string') {
      this.log('Id must be a string');
      return res.status(400).send({ message: 'Id must be a string' });
    }

    if (id.length !== 24) {
      this.log('Id must be 24 characters');
      return res.status(400).send({ message: 'Id must be 24 characters' });
    }

    next();
  };

  validateBeerExists = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const id = req.params.id;

    const beer = await this.controller.service.findById(id);

    if (beer) {
      next();
    } else {
      this.log(`Beer ${req.params.id} not found`);

      res.status(404).send({ error: `Beer ${req.params.id} not found` });
    }
  };
}
