import { Request, Response } from 'express';
import IBeersService from '../interfaces/IService';
import { IBeers } from '../interfaces/IBeers';

export default class BeersController {
  constructor(private service: IBeersService<IBeers>) { }

  public async create(
    req: Request,
    res: Response,
  ) {
    try {
      const beer = req.body;
      const objcreate = await this.service.create(beer);
      return res.status(201).json({ message: objcreate });
    } catch (err) {
      return res.status(400)
        .json({ message: err.message });
    }
  }
}
