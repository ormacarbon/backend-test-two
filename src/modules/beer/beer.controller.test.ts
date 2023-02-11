import { createMock } from '@golevelup/ts-jest';
import { Beer } from '@prisma/client';
import { Request, Response } from 'express';

import { BeerController, IBeerController } from '#/modules/beer/beer.controller.js';
import { IBeerService } from '#/modules/beer/beer.service.js';
import { SeedResponseDto } from '#/modules/beer/dtos/seed-response.dto.js';
import { ISeedService } from '#/modules/shared/seed.service.js';

describe('beer.controller.ts', () => {
  const beerService = createMock<IBeerService>();
  const seedService = createMock<ISeedService>();

  const controller: IBeerController = new BeerController(beerService, seedService);

  test('seed', async () => {
    jest.spyOn(seedService, 'seed').mockResolvedValue(5);
    const req = createMock<Request>();
    // https://mattiaerre.medium.com/express-req-res-and-chaining-1a9da1dc00e0
    const res: Response = createMock<Response>({ json: jest.fn(), status: jest.fn(() => res) });

    await controller.seed(req, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith<[SeedResponseDto]>({ success: true, count: 5 });
  });

  test('create', async () => {
    // with coords
    jest.spyOn(beerService, 'create').mockResolvedValue({ coordinates: [1, 3] } as Beer);
    const req = createMock<Request>();
    // https://mattiaerre.medium.com/express-req-res-and-chaining-1a9da1dc00e0
    const res: Response = createMock<Response>({ json: jest.fn(), status: jest.fn(() => res) });

    await controller.create(req, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ coordinates: [1, 3] });

    // without coords
    jest.spyOn(beerService, 'create').mockResolvedValue({ coordinates: [] } as unknown as Beer);
    const req2 = createMock<Request>();
    // https://mattiaerre.medium.com/express-req-res-and-chaining-1a9da1dc00e0
    const res2: Response = createMock<Response>({ json: jest.fn(), status: jest.fn(() => res) });

    await controller.create(req2, res2, jest.fn());

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({});
  });

  test('get one', async () => {
    jest
      .spyOn(beerService, 'getOne')
      .mockResolvedValue({ id: 'test-get-one', coordinates: [1, 2] } as Beer);
    const req = createMock<Request>();
    const res: Response = createMock<Response>({ json: jest.fn() });

    await controller.getOne(req, res, jest.fn());

    expect(res.json).toHaveBeenCalledWith({ id: 'test-get-one', coordinates: [1, 2] });
  });

  test('get many', async () => {
    jest.spyOn(beerService, 'getMany').mockResolvedValue({
      totalBeers: 1,
      totalPages: 1,
      beersPerPage: 10,
      currentPage: 1,
      results: [{ id: 'test-get-one', coordinates: [1, 2] } as Beer],
    });
    const req = createMock<Request>();
    const res: Response = createMock<Response>({ json: jest.fn() });

    await controller.getMany(req, res, jest.fn());

    expect(res.json).toHaveBeenCalledWith({
      totalBeers: 1,
      totalPages: 1,
      beersPerPage: 10,
      currentPage: 1,
      results: [{ id: 'test-get-one', coordinates: [1, 2] } as Beer],
    });
  });

  test('update', async () => {
    jest.spyOn(beerService, 'update').mockResolvedValue({ abv: 420, coordinates: [1, 2] } as Beer);
    const req = createMock<Request>();
    // https://mattiaerre.medium.com/express-req-res-and-chaining-1a9da1dc00e0
    const res: Response = createMock<Response>({ json: jest.fn(), status: jest.fn(() => res) });

    await controller.update(req, res, jest.fn());

    expect(res.json).toHaveBeenCalledWith({ abv: 420, coordinates: [1, 2] });
  });

  test('delete', async () => {
    jest.spyOn(beerService, 'delete').mockResolvedValue(true);
    const req = createMock<Request>();
    // https://mattiaerre.medium.com/express-req-res-and-chaining-1a9da1dc00e0
    const res: Response = createMock<Response>({ end: jest.fn(), status: jest.fn(() => res) });

    await controller.delete(req, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.end).toHaveBeenCalled();
  });
});
