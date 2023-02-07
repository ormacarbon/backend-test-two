import { NextFunction, Request, response, Response } from 'express';
import BreweriesDTO from '../dtos/BreweriesDTO';
import BreweriesService from '../services/Breweries.service';
import { InvalidArgumentError } from '../services/err/Errors';

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

    const data = await BreweriesService.store(body).catch((e) => {
      if (e) {
        throw new InvalidArgumentError(e.message);
      }
    });

    return res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export const find = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const regex = /[0-9A-Fa-f]{6}/g;

  try {
    if (!regex.test(id)) {
      throw new InvalidArgumentError(
        'Error: not-valid-param; hexadecimal neccessity'
      );
    }

    const brewerie = await BreweriesService.find(id);

    return res.json(brewerie);
  } catch (error) {
    next(error);
  }
};
