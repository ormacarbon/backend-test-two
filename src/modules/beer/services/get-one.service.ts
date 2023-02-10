import { Beer } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError, AppErrorType } from '#/api/app-error.js';
import type { IPrismaService } from '#/modules/shared/prisma.interface.js';

export interface IBeerServiceGetOne {
  getOne(id: string): Promise<Beer>;
}

@injectable()
export class BeerServiceGetOne implements IBeerServiceGetOne {
  constructor(@inject('IPrismaService') private readonly prismaService: IPrismaService) {}

  async getOne(id: string): Promise<Beer> {
    try {
      const beer = await this.prismaService.beer.findUnique({ where: { id } });

      if (!beer) throw new AppError(AppErrorType.NOT_FOUND, `beer with id ${id} not found`);

      return beer;
    } catch (err) {
      if (err instanceof AppError) throw err;
      throw new AppError(AppErrorType.INTERNAL, (err as Error).message);
    }
  }
}
