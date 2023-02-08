export default interface BreweriesInterface {
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

export interface constructorBreweryInterface extends BreweriesInterface {
  external_urls: {
    website: string;
    href: string;
  };
  href: string;
}

export type Coords = number[];
