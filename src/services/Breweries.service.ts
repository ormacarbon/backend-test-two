import cacthErrosFunctions from '../common/utils/catchErrorsFunction';
import { LowerCaseFunction } from '../common/utils/LowerCaseFunction';

import BreweriesInterface, {
  constructorBreweryInterface,
  ResponseBreweryInterface
} from '../interfaces/Breweries/Breweries.interface';
import { BreweriesUpdateInterface } from '../interfaces/Breweries/BreweryUptade.interface';
import { Filters } from '../interfaces/Filters.interface';
import BreweriesModel from '../model/Breweries.Schema';
import { InvalidArgumentError } from './err/Errors';
import MenuService from './Menu.service';

class BreweriesService {
  async findBrewelers(filters: Filters) {
    try {
      if (filters) {
        const filteredObject = Object.fromEntries(
          Object.entries(filters).filter(([, value]) => value != 'undefined')
        );

        return BreweriesModel.findBreweryWithFilter(filteredObject);
      }

      return BreweriesModel.findAllBreweries();
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

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      return brewery;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async update(breweryUptade: BreweriesUpdateInterface) {
    try {
      const errors = [];

      if (breweryUptade.id) {
        const findBrewery = await BreweriesModel.find(breweryUptade.id);

        if (!findBrewery) {
          errors.push('Error: Brewery not found');
        }
      }

      if (breweryUptade.website) {
        const verifyWebSiteHref = await this.verifyWebSite(
          breweryUptade.website
        );

        if (verifyWebSiteHref) {
          errors.push('Error: Website Duplicate');
        }
      }

      const update = await BreweriesModel.update(breweryUptade);

      if (!update) {
        errors.push('Error: Not possible uptade the data;');
      }

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async storeWithJSONFile(data: string) {
    try {
      const content: constructorBreweryInterface[] = JSON.parse(data);

      content.forEach(async (value: constructorBreweryInterface) => {
        await this.store(value);
      });

      return `Data added with success`;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async store(brewery: BreweriesInterface) {
    try {
      const errors: string[] = [];

      let href_contructor = '';

      if (brewery.name) {
        const findName = await this.findName(brewery.name);

        if (findName) {
          errors.push('Error: Name already in use');
        }

        href_contructor = brewery.name.replace(/ /g, '').toLowerCase();
      }

      LowerCaseFunction(brewery);

      const data: constructorBreweryInterface = {
        ...brewery,
        path: href_contructor,
        website: brewery.website
      };

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      const brewelyStored = await BreweriesModel.saveData(data);
      await MenuService.store(brewelyStored?.id);

      const response: ResponseBreweryInterface = {
        ...brewery,
        external_url: {
          website: brewery.website,
          href: `${process.env.ENDPOINT}/brewely/${href_contructor}`
        }
      };

      return response;
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
}

export default new BreweriesService();
