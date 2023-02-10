import { BeerModels } from "../../domain/models/beer";

export interface ReadAllRepository {
  read(): Promise<BeerModels[]>
}