export interface BreweriesUpdateInterface {
  id?: string;
  abv?: number;
  address?: string;
  category?: string;
  city?: string;
  coordinates?: Coords;
  country?: string;
  description?: string;
  ibu?: number;
  name?: string;
  state?: string;
  website?: string;
  path?: string;
  tags?: string[];
}

export type Coords = number[];
