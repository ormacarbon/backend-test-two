import { NextFunction, Request, Response } from 'express';

import BreweryDTO from '../dtos/breweries/Brewery.dto';
import BreweryUpdateDTO from '../dtos/breweries/BreweryUpdate.dto';
import { Filters } from '../interfaces/Filters.interface';

import BreweriesService from '../services/Breweries.service';
import { InvalidArgumentError } from '../services/err/Errors';

class BreweriesHandlerController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const body = BreweryDTO.parse(req.body);

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
  async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    /**
     * @var regex   Check if id param is hexadecimal
     * @default
     * @type {RegExp}
     */

    const regex = /[0-9A-Fa-f]{6}/g;

    try {
      if (!regex.test(id)) {
        throw new InvalidArgumentError(
          'Error: not-valid-param; hexadecimal neccessity'
        );
      }

      await BreweriesService.delete(id);

      return res.status(204).json({
        message: 'deleted with success;',
        statusCode: 204
      });
    } catch (error) {
      next(error);
    }
  }

  async uptade(req: Request, res: Response, next: NextFunction) {
    try {
      const body = BreweryUpdateDTO.parse(req.body);

      const { id } = req.params;

      await BreweriesService.update(id, body);

      res.status(200).json({
        message: 'Updated with sucess.',
        stautsCode: 200
      });
    } catch (error) {
      next(error);
    }
  }

  async storeJsonFile(req: Request, res: Response, next: NextFunction) {
    try {
      const { file } = req;

      const fileJSON = file?.buffer.toString();

      if (fileJSON) {
        const data = await BreweriesService.storeWithJSONFile(fileJSON);

        return res.status(201).json({
          message: data
            ? 'Data was added, but some duplicate keys were rejected, check your file;'
            : 'Dadas was added with sucess.',
          duplicateKeys: data,

          statusCode: 200
        });
      }

      throw new InvalidArgumentError('Error: unknown file');
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
