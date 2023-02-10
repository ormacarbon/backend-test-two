import { createMock } from '@golevelup/ts-jest';
import { Beer } from '@prisma/client';

import { AppError } from '#/api/app-error.js';
import { BeerServiceGetOne } from '#/modules/beer/services/get-one.service.js';
import { IPrismaService } from '#/modules/shared/prisma.interface.js';

describe('get-one.service.ts', () => {
  const prismaService = createMock<IPrismaService>({ beer: { findUnique: jest.fn() } });
  const service = new BeerServiceGetOne(prismaService);

  test('getOne ok', async () => {
    jest.spyOn(prismaService.beer, 'findUnique').mockResolvedValue({ id: 'test-get-one' } as Beer);

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
