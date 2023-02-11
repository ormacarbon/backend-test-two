import { createMock } from '@golevelup/ts-jest';

import { AppError } from '#/api/app-error.js';
import { IPrismaService } from '#/modules/shared/prisma.interface.js';
import { SeedService } from '#/modules/shared/seed.service.js';

describe('seed.service.ts', () => {
  const prismaService = createMock<IPrismaService>({
    beer: {
      count: jest.fn(),
      create: jest.fn(),
      createMany: jest.fn(),
      delete: jest.fn(),
      deleteMany: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  });
  const service = new SeedService(prismaService);

  test('seed ok', async () => {
    jest.spyOn(prismaService.beer, 'deleteMany').mockResolvedValue({ count: 1 });
    jest.spyOn(prismaService.beer, 'createMany').mockResolvedValue({ count: 1 });

    const result = await service.seed();

    expect(result).toBe(1);
  });

  test('seed throws, prisma error', async () => {
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
