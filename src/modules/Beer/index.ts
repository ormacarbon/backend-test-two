import { IBeerRepository } from './beer.repository';
import { BeerController } from './beer.controller';
import { BeerMiddleware } from './beer.middleware';
import { BeerService } from './beer.service';

import { BeerEntity } from '@entity';

import { BaseModule } from '@core';

export class BeerModule extends BaseModule<
  BeerMiddleware,
  BeerController,
  BeerService,
  IBeerRepository,
  BeerEntity
> {
  async routes() {
    this.router.get(
      '/:id',
      this.middleware.valiateIdQuery,
      this.middleware.validateBeerExists,
      this.controller.findById,
    );

    this.router.get(
      '/',
      this.middleware.validateListQuery,
      this.controller.list,
    );

    this.router.post(
      '/',
      this.middleware.validateCreateBody,
      this.controller.create,
    );

    this.router.patch(
      '/:id',
      this.middleware.validatePatchBody,
      this.controller.update,
    );

    this.router.delete(
      '/:id',
      this.middleware.valiateIdQuery,
      this.middleware.validateBeerExists,
      this.controller.delete,
    );
  }
}
