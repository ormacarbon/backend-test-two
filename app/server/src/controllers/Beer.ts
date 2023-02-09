import { Request, Response } from "express";
import { IBeer } from "../interfaces/IBeer";
import { IService } from "../interfaces/IService";

export default class beerController {
  protected _beerService: IService<IBeer>;

  constructor(service: IService<IBeer>) {
    this._beerService = service;
  }

  public async read(_req: Request, res: Response<IBeer[]>) {
    const getAll = await this._beerService.read();
    return res.status(200).json(getAll);
  }

  public async readOne(req: Request, res: Response<IBeer>) {
    const getOne = await this._beerService.readOne(req.params.id) as IBeer;
    return res.status(200).json(getOne);
  }
}