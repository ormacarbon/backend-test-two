import { createMock } from '@golevelup/ts-jest';

import { AppError } from '#/api/app-error.js';
import { BeerServiceSeed } from '#/modules/beer/services/seed.service.js';
import { IPrismaService } from '#/modules/shared/prisma.interface.js';

describe('seed.service.ts', () => {
  const prismaService = createMock<IPrismaService>({
    beer: { deleteMany: jest.fn(), createMany: jest.fn() },
  });
  const service = new BeerServiceSeed(prismaService);

  test('seed ok', async () => {
    jest.spyOn(prismaService.beer, 'deleteMany').mockResolvedValue({ count: 1 });
    jest.spyOn(prismaService.beer, 'createMany').mockResolvedValue({ count: 1 });

    const result = await service.seed();

    expect(result).toBe(1);
  });

  test('seed throws', async () => {
    jest.spyOn(prismaService.beer, 'deleteMany').mockImplementation(() => {
      throw new Error('database exploded');
    });

    const act = () => service.seed();

    await expect(act).rejects.toMatchObject<AppError>({
      name: 'AppError',
      type: 'INTERNAL',
      message: 'database exploded',
      statusCode: 500,
      details: null,
    });
  });
});
