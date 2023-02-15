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

    const processedCountry = brewery.country.toLowerCase().split(/\W+/);
    const processedName = brewery.name.toLowerCase().split(/\W+/);
    const processedState = brewery.state.toLowerCase().split(/\W+/);
    const processedCity = brewery.city.toLowerCase().split(/\W+/);

    const tokens = [
      ...processedCountry,
      ...processedName,
      ...processedState,
      ...processedCity
    ];

    const data: constructorBreweryInterface = {
      ...brewery,
      path: href_contructor,
      external_urls: {
        website: brewery.website,
        href: `${process.env.ENDPOINT}/${href_contructor}`
      },
      tags: tokens
    };
    return data;
  }

  return;
}
