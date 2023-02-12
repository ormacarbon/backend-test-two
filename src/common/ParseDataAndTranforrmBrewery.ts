import BreweryInterface, {
  constructorBreweryInterface
} from '../interfaces/Breweries/Brewery.interface';
import BreweriesService from '../services/Breweries.service';
import { LowerCaseFunction } from './utils/LowerCaseFunction';

export async function parseDataAndTransform(
  errors: string[],
  brewery: BreweryInterface
) {
  if (brewery.name) {
    const findName = await BreweriesService.findName(brewery.name);

    if (findName) {
      errors.push('Error: Name already in use');
    }

    LowerCaseFunction(brewery);

    const href_contructor = brewery.name.replace(/ /g, '').toLowerCase();

    const data: constructorBreweryInterface = {
      ...brewery,
      path: href_contructor,
      external_urls: {
        website: brewery.website,
        href: `${process.env.ENDPOINT}/${href_contructor}`
      },
      tags: [
        brewery.address.toLowerCase(),
        brewery.city.toLowerCase(),
        brewery.country.toLowerCase(),
        brewery.state.toLowerCase(),
        brewery.name.toLowerCase()
      ]
    };

    return data;
  }
}
