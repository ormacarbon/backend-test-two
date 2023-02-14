import natural from 'natural';

import BreweryInterface, {
  constructorBreweryInterface
} from '../interfaces/Breweries/Brewery.interface';
import BreweriesService from '../services/Breweries.service';
import { LowerCaseFunction } from './utils/LowerCaseFunction';

export async function parseDataAndTransform(
  errors: string[],
  brewery: BreweryInterface
) {
  const findName = await BreweriesService.findNameNotValidation(brewery.name);

  if (findName) {
    errors.push('Error: Name already in use');
  } else {
    if (brewery.name) {
      LowerCaseFunction(brewery);

      const href_contructor = brewery.name.replace(/ /g, '').toLowerCase();

      const tokenizer = new natural.WordTokenizer();

      const processedCountry = tokenizer.tokenize(
        brewery.country.toLowerCase()
      );
      const processedName = tokenizer.tokenize(brewery.name.toLowerCase());
      const processedState = tokenizer.tokenize(brewery.state.toLowerCase());
      const processCity = tokenizer.tokenize(brewery.city.toLowerCase());

      const data: constructorBreweryInterface = {
        ...brewery,
        path: href_contructor,
        external_urls: {
          website: brewery.website,
          href: `${process.env.ENDPOINT}/${href_contructor}`
        },

        tags: [
          ...processedCountry,
          ...processCity,
          ...processedName,
          ...processedState
        ]
      };

      return data;
    }
  }
}
