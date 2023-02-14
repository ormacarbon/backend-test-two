import { BeerModels } from "../../domain/models/beer";

export interface ReadOneRepository {
  read(name: string): Promise<BeerModels>
}