export default interface BreweryInterface {
  abv: number;
  address: string;
  category: string;
  city: string;
  coordinates: Coords;
  country: string;
  description: string;
  ibu: number;
  name: string;
  state: string;
  website: string;
}

export type Coords = number[];

export interface constructorBreweryInterface extends BreweryInterface {
  path?: string;
}

export interface ResponseBreweryInterface {
  abv: number;
  address: string;
  category: string;
  city: string;
  coordinates: Coords;
  country: string;
  description: string;
  ibu: number;
  name: string;
  state: string;
  external_url: {
    website: string;
    href: string;
  };
}
