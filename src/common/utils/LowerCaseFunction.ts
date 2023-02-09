import BreweriesInterface from '../../interfaces/Breweries/Breweries.interface';

/**
 * Function to define values from Breweries with lower case
 *
 * @param {BreweriesInterface}
 *
 */
export function LowerCaseFunction(brewery: BreweriesInterface): void {
  brewery.city = String(brewery.city).toLowerCase();
  brewery.country = String(brewery.country).toLowerCase();
  brewery.state = String(brewery.state).toLowerCase();
}
