import cacthErrosFunctions from '../common/utils/catchErrorsFunction';
import BreweriesInterface, {
  constructorBreweryInterface
} from '../interfaces/Breweries.interface';
import { BreweriesUpdateInterface } from '../interfaces/BreweryUptade.interface';
import BreweriesModel from '../model/Breweries.Schema';
import { InvalidArgumentError } from './err/Errors';

class BreweriesService {
  async findAllBrewelers() {
    try {
      return BreweriesModel.findAllBreweries();
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async find(id: string) {
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

        if (breweryUptade.website) {
          const verifyWebSiteHref = await this.verifyWebSite(
            breweryUptade.website
          );

          if (verifyWebSiteHref) {
            errors.push('Error: Website Duplicate');
          }
        }

        const update = await BreweriesModel.findAndUpdate(breweryUptade);

        if (!update) {
          errors.push('Error: Breweries not find;');
        }

        if (errors.length > 0) {
          throw new InvalidArgumentError(JSON.stringify(errors));
        }

        return update;
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
      let href = '';
      if (brewery.name) {
        href = brewery.name.replace(/ /g, '').toLowerCase();
      }

      const data: constructorBreweryInterface = {
        ...brewery,
        href,
        external_urls: {
          website: brewery.website,
          href: `${process.env.ENDPOINT}/brewely/${href}`
        }
      };

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      return await BreweriesModel.saveData(data);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async FindAndDelete(id: string) {
    try {
      const errors = [];

      const brewery = await BreweriesModel.findAndDelete(id);

      if (!brewery) {
        errors.push(`Brewerie not found`);
      }

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

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

  async findByName(href: string) {
    try {
      const errors = [];

      const result = await BreweriesModel.findByName(href);

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
}

export default new BreweriesService();
