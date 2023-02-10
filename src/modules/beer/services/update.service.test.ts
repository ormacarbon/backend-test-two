import { createMock } from '@golevelup/ts-jest';
import { Beer } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js';

import { AppError } from '#/api/app-error.js';
import { BeerServiceUpdate } from '#/modules/beer/services/update.service.js';
import { IPrismaService } from '#/modules/shared/prisma.interface.js';

describe('create.service.ts', () => {
  const prismaService = createMock<IPrismaService>({ beer: { update: jest.fn() } });
  const service = new BeerServiceUpdate(prismaService);

  test('update ok', async () => {
    jest.spyOn(prismaService.beer, 'update').mockResolvedValue({} as Beer);

    const result = await service.update({ abv: 1, ibu: 1 }, 'id');

    expect(result).toEqual({});
  });

  test('update throws, not found', async () => {
    jest.spyOn(prismaService.beer, 'update').mockImplementation(() => {
      throw new PrismaClientKnownRequestError('not found', {
        code: 'P2025',
        clientVersion: 'test',
      });
    });

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
    jest.spyOn(prismaService.beer, 'update').mockImplementation(() => {
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
