import { Server } from 'http';

import BeerController from './beer.controller';
import BeerMiddleware from './beer.middleware';
import BeerService from './beer.service';

import { BaseModule } from '@core';

export class BeerModule extends BaseModule<
  BeerMiddleware,
  BeerController,
  BeerService
> {
  async routes() {
    this.router.post(
      '/',
      this.middleware.validateBodyFields,
      this.controller.helloWorld,
    );
  }
}

export default function Module(server: Server) {
  return new BeerModule({
    server,
    name: 'beer',
    service: BeerService,
    middleware: BeerMiddleware,
    controller: BeerController,
  });
}
