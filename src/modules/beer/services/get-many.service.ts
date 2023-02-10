import { Beer } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { inject, injectable } from 'tsyringe';

import { AppError, AppErrorType } from '#/api/app-error.js';
import { BeerGetManyDto } from '#/modules/beer/dtos/get-many.dto.js';
import type { IPrismaService } from '#/modules/shared/prisma.interface.js';

export type SearchResult = {
  totalBeers: number;
  totalPages: number;
  beersPerPage: number;
  currentPage: number;
  results: Beer[];
};

export interface IBeerServiceGetMany {
  getMany(input: BeerGetManyDto): Promise<SearchResult>;
}

@injectable()
export class BeerServiceGetMany implements BeerServiceGetMany {
  constructor(@inject('IPrismaService') private readonly prismaService: IPrismaService) {}

  async getMany(input: BeerGetManyDto): Promise<SearchResult> {
    try {
      const parsed = plainToInstance(BeerGetManyDto, input);
      const { page, ...rest } = parsed;
      const { coordinates, ...where } = rest;
      const coords = coordinates ? coordinates.split(',').map((v) => +v) : [];
      const currentPage = page || 1;
      const beersPerPage = 10;

      const totalBeers = await this.prismaService.beer.count({
        where: { ...where, coordinates: coordinates ? { hasEvery: coords } : undefined },
      });
      const result = await this.prismaService.beer.findMany({
        where: { ...where, coordinates: coordinates ? { hasEvery: coords } : undefined },
        take: beersPerPage,
        skip: (currentPage - 1) * beersPerPage,
      });

      return {
        totalBeers,
        totalPages: Math.ceil(totalBeers / beersPerPage),
        beersPerPage,
        currentPage,
        results: result,
      };
    } catch (err) {
      throw new AppError(AppErrorType.INTERNAL, (err as Error).message);
    }
  }
}
