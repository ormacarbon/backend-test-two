import { createMock } from '@golevelup/ts-jest';
import { Beer } from '@prisma/client';

import { AppError } from '#/api/app-error.js';
import { BeerService, SearchResult } from '#/modules/beer/beer.service.js';
import { IPrismaService } from '#/modules/shared/prisma.interface.js';

describe('beer.service.ts', () => {
  const prismaService = createMock<IPrismaService>({
    beer: {
      count: jest.fn(),
      create: jest.fn(),
      deleteMany: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  });
  const service = new BeerService(prismaService);

  describe('create', () => {
    test('create ok', async () => {
      jest.spyOn(prismaService.beer, 'create').mockResolvedValue({ abv: 1, ibu: 1 } as Beer);

      const result = await service.create({ abv: 1, ibu: 1 });

      expect(result).toEqual({ abv: 1, ibu: 1 });
    });

    test('create throws, prisma error', async () => {
      jest.spyOn(prismaService.beer, 'create').mockImplementation(() => {
        throw new Error('database exploded');
      });

      const act = () => service.create({ abv: 1, ibu: 1 });

      await expect(act).rejects.toMatchObject<AppError>({
        name: 'AppError',
        type: 'INTERNAL',
        statusCode: 500,
        message: 'database exploded',
        details: null,
      });
    });
  });

  describe('getOne', () => {
    test('getOne ok', async () => {
      jest
        .spyOn(prismaService.beer, 'findUnique')
        .mockResolvedValue({ id: 'test-get-one' } as Beer);

      const result = await service.getOne('id');

      expect(result).toEqual({ id: 'test-get-one' });
    });

    test('getOne throws, not found', async () => {
      jest.spyOn(prismaService.beer, 'findUnique').mockResolvedValue(null);

      const act = () => service.getOne('id');

      await expect(act).rejects.toMatchObject<AppError>({
        name: 'AppError',
        type: 'NOT_FOUND',
        statusCode: 404,
        message: 'beer with id id not found',
        details: null,
      });
    });

    test('getOne throws, prisma error', async () => {
      jest.spyOn(prismaService.beer, 'findUnique').mockImplementation(() => {
        throw new Error('database exploded');
      });

      const act = () => service.getOne('id');

      await expect(act).rejects.toMatchObject<AppError>({
        name: 'AppError',
        type: 'INTERNAL',
        statusCode: 500,
        message: 'database exploded',
        details: null,
      });
    });
  });

  describe('getMany', () => {
    test('getMany ok', async () => {
      // with coords
      jest.spyOn(prismaService.beer, 'count').mockResolvedValue(1);
      jest
        .spyOn(prismaService.beer, 'findMany')
        .mockResolvedValue([{ abv: 1, ibu: 1, coordinates: [1, 2] } as Beer]);

      const result = await service.getMany({ coordinates: '1,2' });

      expect(result).toMatchObject<SearchResult>({
        totalBeers: 1,
        totalPages: 1,
        beersPerPage: 10,
        currentPage: 1,
        results: [{ abv: 1, ibu: 1, coordinates: [1, 2] } as Beer],
      });

      // without coords
      jest.spyOn(prismaService.beer, 'count').mockResolvedValue(1);
      jest.spyOn(prismaService.beer, 'findMany').mockResolvedValue([{ abv: 1, ibu: 1 } as Beer]);

      const result2 = await service.getMany({});

      expect(result2).toMatchObject<SearchResult>({
        totalBeers: 1,
        totalPages: 1,
        beersPerPage: 10,
        currentPage: 1,
        results: [{ abv: 1, ibu: 1 } as Beer],
      });
    });

    test('getmany throws, prisma error', async () => {
      jest.spyOn(prismaService.beer, 'count').mockImplementation(() => {
        throw new Error('database exploded');
      });

      const act = () => service.getMany({});

      await expect(act).rejects.toMatchObject<AppError>({
        name: 'AppError',
        type: 'INTERNAL',
        statusCode: 500,
        message: 'database exploded',
        details: null,
      });
    });
  });

  describe('update', () => {
    test('update ok', async () => {
      jest.spyOn(prismaService.beer, 'findUnique').mockResolvedValue({} as Beer);
      jest.spyOn(prismaService.beer, 'update').mockResolvedValue({} as Beer);

      const result = await service.update({ abv: 1, ibu: 1 }, 'id');

      expect(result).toEqual({});
    });

    test('update throws, not found', async () => {
      jest.spyOn(prismaService.beer, 'findUnique').mockResolvedValue(null);

      const act = () => service.update({ abv: 1, ibu: 1 }, 'id');

      await expect(act).rejects.toMatchObject<AppError>({
        name: 'AppError',
        type: 'NOT_FOUND',
        statusCode: 404,
        message: 'beer with id id not found',
        details: null,
      });
    });

    test('update throws, prisma error', async () => {
      jest.spyOn(prismaService.beer, 'findUnique').mockImplementation(() => {
        throw new Error('database exploded');
      });

      const act = () => service.update({ abv: 1, ibu: 1 }, 'id');

      await expect(act).rejects.toMatchObject<AppError>({
        name: 'AppError',
        type: 'INTERNAL',
        statusCode: 500,
        message: 'database exploded',
        details: null,
      });
    });
  });

  describe('delete', () => {
    test('delete ok', async () => {
      jest.spyOn(prismaService.beer, 'deleteMany').mockResolvedValue({ count: 1 });

      const result = await service.delete('id');

      expect(result).toBeTruthy();
    });

    test('delete throws, not found', async () => {
      jest.spyOn(prismaService.beer, 'deleteMany').mockResolvedValue({ count: 0 });

      const act = () => service.delete('id');

      await expect(act).rejects.toMatchObject<AppError>({
        name: 'AppError',
        type: 'NOT_FOUND',
        statusCode: 404,
        message: 'beer with id id not found',
        details: null,
      });
    });

    test('delete throws, prisma error', async () => {
      jest.spyOn(prismaService.beer, 'deleteMany').mockImplementation(() => {
        throw new Error('database exploded');
      });

      const act = () => service.delete('id');

      await expect(act).rejects.toMatchObject<AppError>({
        name: 'AppError',
        type: 'INTERNAL',
        statusCode: 500,
        message: 'database exploded',
        details: null,
      });
    });
  });
});
