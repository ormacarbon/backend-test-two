import { createMock } from '@golevelup/ts-jest';
import { NextFunction, Request, Response } from 'express';

import { IValidatorMiddleware } from '#/middlewares/validator.middleware.js';
import { IBeerController } from '#/modules/beer/beer.controller.js';
import { BeerRouter, IBeerRouter } from '#/modules/beer/beer.router.js';

describe('beer.router.ts', () => {
  const beerController = createMock<IBeerController>();
  const validatorMw = createMock<IValidatorMiddleware>({
    validate: jest.fn(() => (_req: Request, _res: Response, next: NextFunction) => next()),
  });
  const router: IBeerRouter = new BeerRouter(beerController, validatorMw);

  test('defined', async () => {
    expect(router).toBeDefined();
  });
});
