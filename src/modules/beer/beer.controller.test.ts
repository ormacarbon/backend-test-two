import { createMock } from '@golevelup/ts-jest';
import { Beer } from '@prisma/client';
import { Request, Response } from 'express';

import { BeerController, IBeerController } from '#/modules/beer/beer.controller.js';
import { SeedResponseDto } from '#/modules/beer/dtos/seed-response.dto.js';
import { IBeerServiceCreate } from '#/modules/beer/services/create.service.js';
import { IBeerServiceGetOne } from '#/modules/beer/services/get-one.service.js';
import { IBeerServiceSeed } from '#/modules/beer/services/seed.service.js';

describe('beer.controller.ts', () => {
  const beerServiceSeed = createMock<IBeerServiceSeed>();
  const beerServiceCreate = createMock<IBeerServiceCreate>();
  const beerServiceGetOne = createMock<IBeerServiceGetOne>();
  const controller: IBeerController = new BeerController(
    beerServiceSeed,
    beerServiceCreate,
    beerServiceGetOne,
  );

  test('seed', async () => {
    jest.spyOn(beerServiceSeed, 'seed').mockResolvedValue(5);
    const req = createMock<Request>();
    // https://mattiaerre.medium.com/express-req-res-and-chaining-1a9da1dc00e0
    const res: Response = createMock<Response>({ json: jest.fn(), status: jest.fn(() => res) });

    await controller.seed(req, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith<[SeedResponseDto]>({ success: true, count: 5 });
  });

  test('create', async () => {
    // with coords
    jest.spyOn(beerServiceCreate, 'create').mockResolvedValue({ coordinates: [1, 3] } as Beer);
    const req = createMock<Request>();
    // https://mattiaerre.medium.com/express-req-res-and-chaining-1a9da1dc00e0
    const res: Response = createMock<Response>({ json: jest.fn(), status: jest.fn(() => res) });

    await controller.create(req, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ coordinates: [1, 3] });

    // without coords
    jest
      .spyOn(beerServiceCreate, 'create')
      .mockResolvedValue({ coordinates: [] } as unknown as Beer);
    const req2 = createMock<Request>();
    // https://mattiaerre.medium.com/express-req-res-and-chaining-1a9da1dc00e0
    const res2: Response = createMock<Response>({ json: jest.fn(), status: jest.fn(() => res) });

    await controller.create(req2, res2, jest.fn());

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({});
  });

  test('get one', async () => {
    jest
      .spyOn(beerServiceGetOne, 'getOne')
      .mockResolvedValue({ id: 'test-get-one', coordinates: [1, 2] } as Beer);
    const req = createMock<Request>();
    const res: Response = createMock<Response>({ json: jest.fn() });

    await controller.getOne(req, res, jest.fn());

    expect(res.json).toHaveBeenCalledWith({ id: 'test-get-one', coordinates: [1, 2] });
  });
});
