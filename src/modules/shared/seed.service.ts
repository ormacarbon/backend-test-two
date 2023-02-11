import { inject, injectable } from 'tsyringe';

import { AppError, AppErrorType } from '#/api/app-error.js';
import data from '#/api/db.json' assert { type: 'json' };
import type { IPrismaService } from '#/modules/shared/prisma.interface.js';

export interface ISeedService {
  seed(): Promise<number>;
}

@injectable()
export class SeedService implements ISeedService {
  constructor(@inject('IPrismaService') private readonly prismaService: IPrismaService) {}

  async seed(): Promise<number> {
    try {
      await this.prismaService.beer.deleteMany();

      const { count } = await this.prismaService.beer.createMany({ data });

      return count;
    } catch (err) {
      throw new AppError(AppErrorType.INTERNAL, (err as Error).message);
    }
  }
}
