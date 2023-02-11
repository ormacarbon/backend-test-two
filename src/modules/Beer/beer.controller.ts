import { BeerEntity } from '@entity';
import { BaseController } from '@core';
import { Request, Response } from '@types';

import { BeerService } from './beer.service';

function transformDTO(beer: BeerEntity) {
  const { lat, long, ...beerDTO } = beer;

  if (lat && long) {
    return { coordinates: [lat, long], ...beerDTO };
  } else {
    return beerDTO;
  }
}

export class BeerController extends BaseController<BeerService> {
  list = async (req: Request, res: Response) => {
    const limit = req.query.limit ? Number(req.query.limit) : 25;
    const offset = req.query.offset ? Number(req.query.offset) : 0;

    // eslint-disable-next-line prefer-const
    let { items, _opt } = await this.service.list(limit, offset);

    items = items.map((beer) => transformDTO(beer)) as any;

    return res.status(200).send({ items, _opt });
  };

  create = async (req: Request, res: Response) => {
    const beer = await this.service.create(req.body);

    return res.status(201).send({ beer: transformDTO(beer) });
  };

  update = async (req: Request, res: Response) => {
    const beer = await this.service.update(req.params.id, req.body);

    if (!beer || beer === null) {
      return res.status(404).send({ message: 'Beer not found' });
    }

    return res.status(200).send({ beer: transformDTO(beer) });
  };

  delete = async (req: Request, res: Response) => {
    await this.service.delete(req.params.id);

    return res.status(204).send();
  };

  findById = async (req: Request, res: Response) => {
    const beer = await this.service.findById(req.params.id);

    if (!beer || beer === null) {
      return res.status(404).send({ message: 'Beer not found' });
    }

    return res.status(200).send({ beer: transformDTO(beer) });
  };

  patch = async (req: Request, res: Response) => {
    const beer = await this.service.update(req.params.id, req.body);

    if (!beer || beer === null) {
      return res.status(404).send({ message: 'Beer not found' });
    }

    return res.status(200).send({ beer: transformDTO(beer) });
  };
}
