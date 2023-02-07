export interface BeerDTO {
  abv: number;
  address?: string;
  category?: string;
  city?: string;
  coordinates?: [number, number];
  country?: string;
  description?: string;
  ibu: number;
  name: string;
  state?: string;
  website?: string;
}
