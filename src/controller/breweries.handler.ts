import { NextFunction, Request, Response } from 'express';
import BreweriesDTO from '../dtos/BreweriesDTO';
import BreweriesService from '../services/Breweries.service';

export const findAllBrewelers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await BreweriesService.findAllBrewelers();

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = BreweriesDTO.parse(req.body);

    const data = await BreweriesService.store(body);

    return res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};
