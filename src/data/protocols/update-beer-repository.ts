import { AddBeerData } from "../../domain/useCases/add-beer";

export interface UpdateBeerRepository {
  update(name: string, beerData: AddBeerData): Promise<boolean>
}
