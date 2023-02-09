import { BeerModels } from "../models/beer";

export interface ReadAll {
  read(): Promise<BeerModels[]>
}
