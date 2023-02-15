import BreweryInterface from '../../interfaces/Breweries/Brewery.interface';

/**
 * Function to define values from Breweries with lower case
 *
 * @param {BreweryInterface}
 *
 */
export function LowerCaseFunction(brewery: BreweryInterface): void {
    brewery.city = String(brewery.city).toLowerCase();
    brewery.country = String(brewery.country).toLowerCase();
    brewery.state = String(brewery.state).toLowerCase();
}
