import natural from 'natural';

import BreweryInterface, {
  constructorBreweryInterface
} from '../interfaces/Breweries/Brewery.interface';

import { LowerCaseFunction } from './utils/LowerCaseFunction';

/**
 *
 * @param brewery
 * @returns {constructorBreweryInterface}
 *
 * @description Get information from a brewery dto and prepare it for storage in the database, tokenizing words, building a href for an easily accessible endpoint.
 *
 */
export async function parseDataAndTransform(
  brewery: BreweryInterface
): Promise<constructorBreweryInterface | void> {
  LowerCaseFunction(brewery);
  if (brewery.name) {
    const href_contructor = brewery.name.replace(/ /g, '').toLowerCase();

    const tokenizer = new natural.WordTokenizer();

    const processedCountry = tokenizer.tokenize(brewery.country.toLowerCase());
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

  return;
}
