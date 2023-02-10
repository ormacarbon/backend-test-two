import { Router } from 'express';
import { inject, injectable } from 'tsyringe';

import type { IBeerController } from '#/modules/beer/beer.controller.js';

export interface IBeerRouter {
  router: Router;
}

@injectable()
export class BeerRouter implements IBeerRouter {
  router = Router();

  constructor(@inject('IBeerController') private readonly beerController: IBeerController) {
    this.router.use('/seed', this.beerController.seed);
  }
}
