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
      const { obj } = req.body;
      const objcreate = await this.service.create(obj);
      return res.status(201).json(objcreate);
    } catch (err) {
      return res.status(400)
        .json({ message: err.message });
    }
  }

  public async readAll(
    req: Request,
    res: Response,
  ) {
    const { limit, skip } = req.query;
    const customers = await this.service.readAll(Number(limit), Number(skip));
    return res.status(200).json(customers);
  }

  public async update(
    req: Request,
    res: Response,
  ) {
    try {
      const { obj } = req.body;
      const { id } = req.params;
      const beer = await this.service.update(id, obj);
      return res.status(200).json(beer);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  public async delete(
    req: Request,
    res: Response,
  ) {
    try {
      const { id } = req.params;
      const beer = await this.service.delete(id);
      return res.status(200).json(beer);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
