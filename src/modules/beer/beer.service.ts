import { Beer } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { inject, injectable } from 'tsyringe';

import { AppError, AppErrorType } from '#/api/app-error.js';
import { BeerCreateDto } from '#/modules/beer/dtos/create.dto.js';
import { BeerGetManyDto } from '#/modules/beer/dtos/get-many.dto.js';
import { BeerUpdateDto } from '#/modules/beer/dtos/update.dto.js';
import type { IPrismaService } from '#/modules/shared/prisma.interface.js';

export type SearchResult = {
  totalBeers: number;
  totalPages: number;
  beersPerPage: number;
  currentPage: number;
  results: Beer[];
};

export interface IBeerService {
  create(input: BeerCreateDto): Promise<Beer>;
  getOne(id: string): Promise<Beer>;
  getMany(input: BeerGetManyDto): Promise<SearchResult>;
  update(input: BeerUpdateDto, id: string): Promise<Beer>;
  delete(id: string): Promise<boolean>;
}

@injectable()
export class BeerService implements IBeerService {
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

  async update(input: BeerUpdateDto, id: string): Promise<Beer> {
    try {
      const exists = await this.prismaService.beer.findUnique({ where: { id } });
      if (!exists) throw new AppError(AppErrorType.NOT_FOUND, `beer with id ${id} not found`);

      return await this.prismaService.beer.update({
        where: { id },
        data: { ...input },
      });
    } catch (err) {
      if (err instanceof AppError) throw err;
      throw new AppError(AppErrorType.INTERNAL, (err as Error).message);
    }
  }

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
