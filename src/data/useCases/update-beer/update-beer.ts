import { AddBeerData } from "../../../domain/useCases/add-beer";
import { UpdateBeer } from "../../../domain/useCases/update-beer";
import { UpdateBeerRepository } from '../../protocols/update-beer-repository';

export class DbUpdateBeer implements UpdateBeer {
  constructor(
    private repository: UpdateBeerRepository
  ) {}

  async update(name: string, beerData: AddBeerData): Promise<boolean> {
    await this.repository.update(name, beerData);
    return true;
  }
}
