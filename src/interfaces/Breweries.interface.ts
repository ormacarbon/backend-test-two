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

export type Coords = number[];
