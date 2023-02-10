import { Beer } from '@prisma/client';
import autoBind from 'auto-bind';
import { Request, RequestHandler, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import { BeerCreateDto } from '#/modules/beer/dtos/create.dto.js';
import { BeerGetManyDto } from '#/modules/beer/dtos/get-many.dto.js';
import { SeedResponseDto } from '#/modules/beer/dtos/seed-response.dto.js';
import type { IBeerServiceCreate } from '#/modules/beer/services/create.service.js';
import type { IBeerServiceGetMany } from '#/modules/beer/services/get-many.service.js';
import type { IBeerServiceGetOne } from '#/modules/beer/services/get-one.service.js';
import type { IBeerServiceSeed } from '#/modules/beer/services/seed.service.js';

export interface IBeerController {
  seed: RequestHandler;
  create: RequestHandler;
  getOne: RequestHandler;
  getMany: RequestHandler;
}

@injectable()
export class BeerController implements IBeerController {
  constructor(
    @inject('IBeerServiceSeed') private readonly beerServiceSeed: IBeerServiceSeed,
    @inject('IBeerServiceCreate') private readonly beerServiceCreate: IBeerServiceCreate,
    @inject('IBeerServiceGetOne') private readonly beerServiceGetOne: IBeerServiceGetOne,
    @inject('IBeerServiceGetMany') private readonly beerServiceGetMany: IBeerServiceGetMany,
  ) {
    autoBind(this);
  }

  async seed(_req: Request, res: Response): Promise<Response> {
    const result = await this.beerServiceSeed.seed();

    return res.status(201).json(new SeedResponseDto(result));
  }

  async create(req: Request<{}, {}, BeerCreateDto>, res: Response): Promise<Response> {
    const { body } = req;
    const result = await this.beerServiceCreate.create(body);

    return res.status(201).json(this.stripNulls(result));
  }

  async getOne(req: Request<{ [key: string]: string }>, res: Response): Promise<Response> {
    const { params } = req;
    const result = await this.beerServiceGetOne.getOne(params.id);

    return res.json(this.stripNulls(result));
  }

  async getMany(req: Request<{}, {}, {}, BeerGetManyDto>, res: Response): Promise<Response> {
    const { query } = req;
    const result = await this.beerServiceGetMany.getMany(query);
    const { results, ...rest } = result;

    return res.json({ ...rest, results: results.map(this.stripNulls) });
  }

  private stripNulls(beer: Beer) {
    const stripped = Object.fromEntries(Object.entries(beer).filter(([_, v]) => v !== null));
    if (!beer.coordinates.length) delete stripped.coordinates;

    return stripped;
  }
}
