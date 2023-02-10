import { BeerModels } from "../../../domain/models/beer";
import { ReadAll } from "../../../domain/useCases/read-all";
import { ReadAllRepository } from "../../protocols/read-all-repository";

export class DbReadAll implements ReadAll {
  constructor(private repository: ReadAllRepository) {}

  async read(): Promise<BeerModels[]> {
    const beers = this.repository.read();

    return beers;
  }
}
