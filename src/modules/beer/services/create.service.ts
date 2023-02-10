import { Beer } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError, AppErrorType } from '#/api/app-error.js';
import { BeerCreateDto } from '#/modules/beer/dtos/create.dto.js';
import type { IPrismaService } from '#/modules/shared/prisma.interface.js';

export interface IBeerServiceCreate {
  create(input: BeerCreateDto): Promise<Beer>;
}

@injectable()
export class BeerServiceCreate implements IBeerServiceCreate {
  constructor(@inject('IPrismaService') private readonly prismaService: IPrismaService) {}

  async create(input: BeerCreateDto): Promise<Beer> {
    try {
      return await this.prismaService.beer.create({
        data: { ...input },
      });
    } catch (err) {
      throw new AppError(AppErrorType.INTERNAL, (err as Error).message);
    }
  }
}
