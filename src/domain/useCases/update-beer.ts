import { AddBeerData } from "./add-beer";

export interface UpdateBeer {
  update(name: string, beerData: AddBeerData): Promise<boolean>
}
