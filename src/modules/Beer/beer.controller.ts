import { Request, Response } from 'express';

import { BaseController } from '@core';
import BeerService from './beer.service';

export class BeerController extends BaseController<BeerService> {
  helloWorld = async (req: Request, res: Response) => {
    const name = req.body.name;

    const message = this.service.message({ name });

    return res.status(200).send({ message });
  };
}

export default BeerController;
