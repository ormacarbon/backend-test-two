import { Beer } from '@prisma/client';
import autoBind from 'auto-bind';
import { Request, RequestHandler, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import type { IBeerService } from '#/modules/beer/beer.service.js';
import { BeerCreateDto } from '#/modules/beer/dtos/create.dto.js';
import { BeerGetManyDto } from '#/modules/beer/dtos/get-many.dto.js';
import { SeedResponseDto } from '#/modules/beer/dtos/seed-response.dto.js';
import { BeerUpdateDto } from '#/modules/beer/dtos/update.dto.js';
import type { ISeedService } from '#/modules/shared/seed.service.js';

export interface IBeerController {
  seed: RequestHandler;
  create: RequestHandler;
  getOne: RequestHandler;
  getMany: RequestHandler;
  update: RequestHandler;
  delete: RequestHandler;
}

@injectable()
export class BeerController implements IBeerController {
  constructor(
    @inject('IBeerService') private readonly beerService: IBeerService,
    @inject('ISeedService') private readonly seedService: ISeedService,
  ) {
    autoBind(this);
  }

  async seed(_req: Request, res: Response): Promise<Response> {
    const result = await this.seedService.seed();

    return res.status(201).json(new SeedResponseDto(result));
  }

  async create(req: Request<{}, {}, BeerCreateDto>, res: Response): Promise<Response> {
    const { body } = req;
    const result = await this.beerService.create(body);

    return res.status(201).json(this.stripNulls(result));
  }

  async getOne(req: Request<{ [key: string]: string }>, res: Response): Promise<Response> {
    const { params } = req;
    const result = await this.beerService.getOne(params.id);

    return res.json(this.stripNulls(result));
  }

  async getMany(req: Request<{}, {}, {}, BeerGetManyDto>, res: Response): Promise<Response> {
    const { query } = req;
    const result = await this.beerService.getMany(query);
    const { results, ...rest } = result;

    return res.json({ ...rest, results: results.map(this.stripNulls) });
  }

  async update(
    req: Request<{ [key: string]: string }, {}, BeerUpdateDto>,
    res: Response,
  ): Promise<Response> {
    const { body, params } = req;
    const result = await this.beerService.update(body, params.id);

    return res.json(this.stripNulls(result));
  }

  async delete(req: Request<{ [key: string]: string }>, res: Response): Promise<void> {
    const { params } = req;
    await this.beerService.delete(params.id);

    res.status(204).end();
  }

  private stripNulls(beer: Beer) {
    const stripped = Object.fromEntries(Object.entries(beer).filter(([_, v]) => v !== null));
    if (!beer.coordinates.length) delete stripped.coordinates;

    return stripped;
  }
}
