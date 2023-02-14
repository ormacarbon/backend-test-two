import cacthErrosFunctions from '../common/utils/err/catchErrorsFunction';

import BrewelyInterface from '../interfaces/Breweries/Brewery.interface';
import { BreweriesUpdateInterface } from '../interfaces/Breweries/BreweryUptade.interface';
import { Filters } from '../interfaces/Filters.interface';

import { InvalidArgumentError } from '../services/err/Errors';
import MenuService from '../services/Menu.service';
import { parseDataAndTransform } from '../common/ParseDataAndTranforrmBrewery';

import BreweriesModel from '../model/Breweries.Schema';
import natural from 'natural';

class BreweriesService {
  async findBreweleries<T>(filters: Filters, limit: T) {
    try {
      const filteredObject = Object.fromEntries(
        Object.entries(filters).filter(([, value]) => value != 'undefined')
      );

      if (filteredObject) {
        return await BreweriesModel.findBreweleries(
          filteredObject,
          limit as number
        );
      }

      return await BreweriesModel.findAllBreweries(limit as number);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findById(id: string) {
    try {
      const errors = [];

      const brewery = await BreweriesModel.findById(id);

      if (!brewery) {
        errors.push(`Error: Brewery not found`);
      }

      if (errors.length) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      return brewery;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async update(id: string, breweryUptade: BreweriesUpdateInterface) {
    try {
      const errors = [];

      const finrewery = await BreweriesModel.findById(id);

      if (!finrewery) {
        errors.push('Error: Brewery not found');
      }

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      if (breweryUptade.name) {
        const href_contructor: string = breweryUptade.name
          .replace(/ /g, '')
          .toLowerCase();

        breweryUptade.path = href_contructor;

        const tokenizer = new natural.WordTokenizer();

        const processedName = tokenizer.tokenize(
          breweryUptade.name.toLowerCase()
        );

        await this.updateTags(id, processedName);
      }

      const data = await BreweriesModel.update(id, breweryUptade);

      return data;
    } catch (error) {
      cacthErrosFunctions(error);
    }

    return breweryUptade;
  }

  async storeWithJSONFile(data: string) {
    try {
      const content: BrewelyInterface[] = JSON.parse(data);

      let duplicateKey = false;

      for (let i = 0; i < content.length; i++) {
        const errors: string[] = [];

        const data = await parseDataAndTransform(errors, content[i]);

        if (!errors.length) {
          if (data) {
            const createrewery = await BreweriesModel.store(data);
            if (createrewery) {
              await MenuService.store(createrewery.id);
            }
          }
        }
        duplicateKey = true;
      }

      return duplicateKey;
    } catch (error) {
      cacthErrosFunctions(error);
    }

    return true;
  }

  async store(brewery: BrewelyInterface) {
    try {
      const errors: string[] = [];

      const data = await parseDataAndTransform(errors, brewery);

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      if (data) {
        const brewelyStored = await BreweriesModel.store(data);
        await MenuService.store(brewelyStored?.id);

        return brewelyStored;
      }
    } catch (error) {
      cacthErrosFunctions(error);
    }

    return brewery;
  }

  async delete(id: string) {
    try {
      const errors = [];

      const find = await this.findById(id);

      if (!find) {
        errors.push('Error: Brewely not found;');
      }

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      const brewery = await BreweriesModel.delete(id);

      return brewery;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findByName(name: string) {
    try {
      const data = await BreweriesModel.findByName(name);

      if (!data) {
        throw new InvalidArgumentError('Invalid href or not exists;');
      }

      return data;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findUserReputation(idUser: string) {
    try {
      return BreweriesModel.findUserByIdReputation(idUser);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async searchByTags(data: string[]) {
    try {
      const captureResponse = data.map((search) =>
        BreweriesModel.searchByTags(search).then((data) => data)
      );

      return Promise.all(captureResponse).then((resolvedData) => {
        return resolvedData;
      });
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async updateTags(id: string, data: string[]) {
    try {
      data.forEach(async (tag) => {
        await BreweriesModel.addTag(id, tag);
      });
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }
}

export default new BreweriesService();
