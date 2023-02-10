import { inject, injectable } from 'tsyringe';

import { AppError, AppErrorType } from '#/api/app-error.js';
import type { IPrismaService } from '#/modules/shared/prisma.interface.js';

export interface IBeerServiceSeed {
  seed(): Promise<number>;
}

@injectable()
export class BeerServiceSeed implements IBeerServiceSeed {
  constructor(@inject('IPrismaService') private readonly prismaService: IPrismaService) {}

  async seed(): Promise<number> {
    try {
      await this.prismaService.beer.deleteMany();

      const data = await import('#/api/db.json', { assert: { type: 'json' } });
      const { count } = await this.prismaService.beer.createMany({ data: data.default });

      return count;
    } catch (err) {
      throw new AppError(AppErrorType.INTERNAL, (err as Error).message);
    }
  }
}
