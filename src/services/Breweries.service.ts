import cacthErrosFunctions from '../common/utils/err/catchErrorsFunction';

import BrewelyInterface from '../interfaces/Breweries/Brewery.interface';
import { BreweriesUpdateInterface } from '../interfaces/Breweries/BreweryUptade.interface';
import { Filters } from '../interfaces/Filters.interface';
import BreweriesModel from '../model/Breweries.Schema';
import { InvalidArgumentError } from '../services/err/Errors';
import MenuService from '../services/Menu.service';
import { parseDataAndTransform } from '../common/ParseDataAndTranforrmBrewery';

class BreweriesService {
  async findBrewelers<T>(filters: Filters, limit: T) {
    try {
      const filteredObject = Object.fromEntries(
        Object.entries(filters).filter(([, value]) => value != 'undefined')
      );

      if (filteredObject) {
        return await BreweriesModel.findBreweryWithFilter(
          filteredObject,
          limit
        );
      }

      return await BreweriesModel.findAllBreweries(limit);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findByID(id: string) {
    try {
      const errors = [];

      const brewery = await BreweriesModel.find(id);

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

      const findBrewery = await BreweriesModel.find(id);

      if (!findBrewery) {
        errors.push('Error: Brewery not found');
      }

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      await BreweriesModel.update(id, breweryUptade);
    } catch (error) {
      cacthErrosFunctions(error);
    }
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
            const createdBrewery = await BreweriesModel.create(data);
            if (createdBrewery) {
              await MenuService.store(createdBrewery.id);
            }
          }
        }
        duplicateKey = true;
      }

      return duplicateKey;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async store(brewery: BrewelyInterface) {
    try {
      const errors: string[] = [];

      const data = await parseDataAndTransform(errors, brewery);

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      if (data) {
        const brewelyStored = await BreweriesModel.create(data);
        await MenuService.store(brewelyStored?.id);

        return brewelyStored;
      }
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async delete(id: string) {
    try {
      const errors = [];

      const find = await this.findByID(id);

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

  async verifyCoordenates(coords: number[]) {
    try {
      return await BreweriesModel.findCoordenatesDatabase(coords);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async verifyWebSite(website: string) {
    try {
      return await BreweriesModel.findWebSiteHref(website);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findByName(path: string) {
    try {
      const errors = [];

      const result = await BreweriesModel.findByName(path);

      if (!result) {
        errors.push('Invalid href or not exists');
      }

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      return result;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findName(name: string) {
    try {
      return BreweriesModel.findName(name);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findUserInReputation(idUser: string) {
    try {
      return BreweriesModel.findUserInReputation(idUser);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async searchByTags(data: string[]) {
    try {
      const captureResponse = data.map((search) =>
        BreweriesModel.findByTag(search).then((data) => data)
      );

      return Promise.all(captureResponse).then((resolvedData) => {
        return resolvedData;
      });
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }
}

export default new BreweriesService();
