import { Router } from 'express';
import { inject, injectable } from 'tsyringe';

import type { IValidatorMiddleware } from '#/middlewares/validator.middleware.js';
import type { IBeerController } from '#/modules/beer/beer.controller.js';
import { BeerCreateDtoSchema } from '#/modules/beer/dtos/create.dto.js';

export interface IBeerRouter {
  router: Router;
}

@injectable()
export class BeerRouter implements IBeerRouter {
  router = Router();

  constructor(
    @inject('IBeerController') private readonly beerController: IBeerController,
    @inject('IValidatorMiddleware') private readonly validatorMw: IValidatorMiddleware,
  ) {
    this.router.get('/seed', this.beerController.seed);
    this.router.post(
      '/',
      this.validatorMw.validate(BeerCreateDtoSchema),
      this.beerController.create,
    );
    this.router.get('/:id', this.beerController.getOne);
  }
}
