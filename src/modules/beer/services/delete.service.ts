import { inject, injectable } from 'tsyringe';

import { AppError, AppErrorType } from '#/api/app-error.js';
import type { IPrismaService } from '#/modules/shared/prisma.interface.js';

export interface IBeerServiceDelete {
  delete(id: string): Promise<boolean>;
}

@injectable()
export class BeerServiceDelete implements IBeerServiceDelete {
  constructor(@inject('IPrismaService') private readonly prismaService: IPrismaService) {}

  async delete(id: string): Promise<boolean> {
    try {
      const { count } = await this.prismaService.beer.deleteMany({ where: { id } });
      if (count === 0) throw new AppError(AppErrorType.NOT_FOUND, `beer with id ${id} not found`);

      return true;
    } catch (err) {
      if (err instanceof AppError) throw err;
      throw new AppError(AppErrorType.INTERNAL, (err as Error).message);
    }
  }
}
