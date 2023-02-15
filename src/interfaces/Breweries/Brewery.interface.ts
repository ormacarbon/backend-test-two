export default interface BreweryInterface {
  abv: number;
  id?: string;
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
  external_urls: {
    website: string;
    href: string;
  };
  tags: string[];
}
