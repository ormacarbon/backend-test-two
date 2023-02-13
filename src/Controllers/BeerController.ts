import { NextFunction, Request, Response } from 'express';
import IBeer from '../Interfaces/IBeer';
import IBeerService from '../Interfaces/IBeerService';

class BeerController {
  constructor(private _service: IBeerService<IBeer>) { }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const beer: IBeer = req.body;
    try {
      const newBeer = await this._service.create(beer);
      return res.status(201).json(newBeer);
    } catch (error) {
      return next(error);
    }
  };

  public readAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allBeers = await this._service.readAll();
      return res.status(200).json(allBeers);
    } catch (error) {
      return next(error);
    }
  };

  public readById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const beer = await this._service.readById(id);
      return res.status(200).json(beer);
    } catch (error) {
      return next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    const entity = req.body;
    const { id } = req.params;
    try {
      const updatedBeer = await this._service.update(id, entity);
      return res.status(200).json(updatedBeer);
    } catch (error) {
      return next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const { deleted } = await this._service.delete(id);
      console.log(deleted);

      if (deleted) return res.sendStatus(204);
    } catch (error) {
      return next(error);
    }
  };
}

export default BeerController;
