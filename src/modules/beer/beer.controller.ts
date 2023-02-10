import autoBind from 'auto-bind';
import { Request, RequestHandler, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import { SeedResponseDto } from '#/modules/beer/dtos/seed-response.dto.js';
import type { IBeerServiceSeed } from '#/modules/beer/services/seed.service.js';

export interface IBeerController {
  seed: RequestHandler;
}

@injectable()
export class BeerController implements IBeerController {
  constructor(@inject('IBeerServiceSeed') private readonly beerServiceSeed: IBeerServiceSeed) {
    autoBind(this);
  }

  async seed(_req: Request, res: Response): Promise<Response> {
    const result = await this.beerServiceSeed.seed();

    return res.status(201).json(new SeedResponseDto(result));
  }
}
