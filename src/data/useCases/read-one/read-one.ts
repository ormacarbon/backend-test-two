import { BeerModels } from "../../../domain/models/beer";
import { ReadOne } from "../../../domain/useCases/read-one";
import { ReadOneRepository } from "../../protocols/read-one-repository";

export class DbReadOne implements ReadOne {
  constructor(private repository: ReadOneRepository) {}

  async read(name: string): Promise<void | BeerModels> {
    const beer = await this.repository.read(name);

    if (beer) {
      return beer;
    }
  }
}