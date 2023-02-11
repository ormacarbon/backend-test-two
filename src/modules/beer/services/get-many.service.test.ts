import { createMock } from '@golevelup/ts-jest';
import { Beer } from '@prisma/client';

import { AppError } from '#/api/app-error.js';
import { BeerServiceGetMany, SearchResult } from '#/modules/beer/services/get-many.service.js';
import { IPrismaService } from '#/modules/shared/prisma.interface.js';

describe('get-many.service.ts', () => {
  const prismaService = createMock<IPrismaService>({
    beer: { count: jest.fn(), findMany: jest.fn() },
  });
  const service = new BeerServiceGetMany(prismaService);

  test('get many ok', async () => {
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

  test('get many throws, prisma error', async () => {
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
