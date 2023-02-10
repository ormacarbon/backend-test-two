import { Beer } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError, AppErrorType } from '#/api/app-error.js';
import { BeerGetManyDto } from '#/modules/beer/dtos/get-many.dto.js';
import type { IPrismaService } from '#/modules/shared/prisma.interface.js';

export type SearchResult = {
  totalBeers: number;
  totalPages: number;
  beersPerPage: number;
  currentPage: number;
  search: Beer[];
};

export interface IBeerServiceGetMany {
  getMany(input: BeerGetManyDto): Promise<SearchResult>;
}

@injectable()
export class BeerServiceGetMany implements BeerServiceGetMany {
  constructor(@inject('IPrismaService') private readonly prismaService: IPrismaService) {}

  async getMany(input: BeerGetManyDto): Promise<SearchResult> {
    try {
      const { page, ...rest } = input;
      const { coordinates, ...where } = rest;
      const coords = coordinates ? coordinates.split(',').map((v) => +v) : [];
      const currentPage = page || 1;

      const totalBeers = await this.prismaService.beer.count();
      const result = await this.prismaService.beer.findMany({
        where: { ...where, coordinates: { hasEvery: coords } },
        take: 10,
        skip: (currentPage - 1) * 5,
      });

      return {
        totalBeers,
        totalPages: Math.ceil(totalBeers / 10),
        beersPerPage: 10,
        currentPage,
        search: result,
      };
    } catch (err) {
      throw new AppError(AppErrorType.INTERNAL, (err as Error).message);
    }
  }
}
