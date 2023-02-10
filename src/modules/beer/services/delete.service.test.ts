import { createMock } from '@golevelup/ts-jest';

import { AppError } from '#/api/app-error.js';
import { BeerServiceDelete } from '#/modules/beer/services/delete.service.js';
import { IPrismaService } from '#/modules/shared/prisma.interface.js';

describe('delete.sevice.ts', () => {
  const prismaService = createMock<IPrismaService>({ beer: { deleteMany: jest.fn() } });
  const service = new BeerServiceDelete(prismaService);

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
