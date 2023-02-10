import { Beer } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js';
import { inject, injectable } from 'tsyringe';

import { AppError, AppErrorType } from '#/api/app-error.js';
import { BeerUpdateDto } from '#/modules/beer/dtos/update.dto.js';
import type { IPrismaService } from '#/modules/shared/prisma.interface.js';

export interface IBeerServiceUpdate {
  update(input: BeerUpdateDto, id: string): Promise<Beer>;
}

@injectable()
export class BeerServiceUpdate implements IBeerServiceUpdate {
  constructor(@inject('IPrismaService') private readonly prismaService: IPrismaService) {}

  async update(input: BeerUpdateDto, id: string): Promise<Beer> {
    try {
      return await this.prismaService.beer.update({
        where: { id },
        data: { ...input },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError && err.code === 'P2025')
        throw new AppError(AppErrorType.NOT_FOUND, `beer with id ${id} not found`);
      throw new AppError(AppErrorType.INTERNAL, (err as Error).message);
    }
  }
}
