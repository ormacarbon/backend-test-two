import { createMock } from '@golevelup/ts-jest';
import { Request, Response } from 'express';

import { BeerController, IBeerController } from '#/modules/beer/beer.controller.js';
import { SeedResponseDto } from '#/modules/beer/dtos/seed-response.dto.js';
import { IBeerServiceSeed } from '#/modules/beer/services/seed.service.js';

describe('beer.controller.ts', () => {
  const beerServiceSeed = createMock<IBeerServiceSeed>();
  const controller: IBeerController = new BeerController(beerServiceSeed);

  test('seed', async () => {
    jest.spyOn(beerServiceSeed, 'seed').mockResolvedValue(5);
    const req = createMock<Request>();
    // https://mattiaerre.medium.com/express-req-res-and-chaining-1a9da1dc00e0
    const res: Response = createMock<Response>({ json: jest.fn(), status: jest.fn(() => res) });

    await controller.seed(req, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith<[SeedResponseDto]>({ success: true, count: 5 });
  });
});
