import { DeleteBeer } from "../../../domain/useCases/delete-beer";
import { DeleteBeerRepository } from '../../protocols/delete-beer-repository';

export class DbDeleteBeer implements DeleteBeer {
  constructor(private repository: DeleteBeerRepository) {}

  async delete(name: string): Promise<boolean> {
    await this.repository.delete(name);

    return true
  }
}