import { createMock } from '@golevelup/ts-jest';
import { Beer } from '@prisma/client';

import { AppError } from '#/api/app-error.js';
import { BeerServiceCreate } from '#/modules/beer/services/create.service.js';
import { IPrismaService } from '#/modules/shared/prisma.interface.js';

describe('create.service.ts', () => {
  const prismaService = createMock<IPrismaService>({ beer: { create: jest.fn() } });
  const service = new BeerServiceCreate(prismaService);

  test('create ok', async () => {
    jest.spyOn(prismaService.beer, 'create').mockResolvedValue({} as Beer);

    const result = await service.create({ abv: 1, ibu: 1 });

    expect(result).toEqual({});
  });

  test('create throws', async () => {
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
