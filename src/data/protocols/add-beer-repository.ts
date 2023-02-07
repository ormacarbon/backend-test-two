import { BeerModels } from "../../domain/models/beer";
import { AddBeerData } from "../../domain/useCases/add-beer";

export interface AddBeerRepository {
  add(beerData: AddBeerData): Promise<BeerModels>
}
