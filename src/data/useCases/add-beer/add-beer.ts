import { BeerModels } from "../../../domain/models/beer";
import { AddBeer, AddBeerData } from "../../../domain/useCases/add-beer";
import { AddBeerRepository } from "../../protocols/add-beer-repository";

export class DbAddBeer implements AddBeer {
  constructor(private repository: AddBeerRepository) {}

  async add(data: AddBeerData): Promise<BeerModels> {
    const beer = await this.repository.add(data);
    return beer;
  }
}
