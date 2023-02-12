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
      await this._service.delete(id);
      return res.status(204).json({ message: 'Document deleted.' });
    } catch (error) {
      return next(error);
    }
  };
}

export default BeerController;