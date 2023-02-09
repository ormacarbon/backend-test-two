import { NextFunction, Request, Response } from 'express';
import { catchContent } from '../common/utils/readFileJSON';
import BreweriesDTO from '../dtos/breweries/BreweriesDTO';
import BreweryUpdateDTO from '../dtos/breweries/BreweryUpdate.dto';

import BreweriesService, { Filters } from '../services/Breweries.service';
import { InvalidArgumentError } from '../services/err/Errors';

class BreweriesHandlerController {
  async store(req: Request, res: Response, next: NextFunction) {
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
  }
  async find(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const regex = /[0-9A-Fa-f]{6}/g;

    try {
      if (!regex.test(id)) {
        throw new InvalidArgumentError(
          'Error: not-valid-param; hexadecimal neccessity'
        );
      }

      const brewerie = await BreweriesService.findByID(id);

      return res.json(brewerie);
    } catch (error) {
      next(error);
    }
  }

  async findAllBrewelers(req: Request, res: Response, next: NextFunction) {
    try {
      const filters: Filters = {
        city: String(req.query.city),
        state: String(req.query.state),
        country: String(req.query.country)
      };

      const data = await BreweriesService.findBrewelers(filters);

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async findAndDelete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const regex = /[0-9A-Fa-f]{6}/g;

    try {
      if (!regex.test(id)) {
        throw new InvalidArgumentError(
          'Error: not-valid-param; hexadecimal neccessity'
        );
      }

      const brewery = await BreweriesService.FindAndDelete(id);

      return res.json(brewery);
    } catch (error) {
      next(error);
    }
  }

  async uptade(req: Request, res: Response, next: NextFunction) {
    try {
      const body = BreweryUpdateDTO.parse(req.body);
      const { id } = req.params;
      body.id = id;

      const data = await BreweriesService.update(body);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async storeWithJSONFile(req: Request, res: Response, next: NextFunction) {
    try {
      const { file } = req;

      if (file) {
        const content = await catchContent(file.path);

        if (content) {
          const response = await BreweriesService.storeWithJSONFile(content);

          return res.status(201).json({
            message: response,
            statusCode: 201
          });
        }
      }

      throw new Error('Error: unknown file');
    } catch (error) {
      next(error);
    }
  }

  async findByName(req: Request, res: Response, next: NextFunction) {
    const { name } = req.params;

    try {
      const data = await BreweriesService.findByName(name);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export default new BreweriesHandlerController();
