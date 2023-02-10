import { createMock } from '@golevelup/ts-jest';

import { IBeerController } from '#/modules/beer/beer.controller.js';
import { BeerRouter, IBeerRouter } from '#/modules/beer/beer.router.js';

describe('beer.router.ts', () => {
  const beerController = createMock<IBeerController>();
  const router: IBeerRouter = new BeerRouter(beerController);

  test('defined', async () => {
    expect(router).toBeDefined();
  });
});
