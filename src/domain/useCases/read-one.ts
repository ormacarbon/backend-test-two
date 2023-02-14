import { BeerModels } from "../models/beer";

export interface ReadOne {
  read(name: string): Promise<BeerModels | void>
}
