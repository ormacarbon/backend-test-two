import { BeerModel } from '../../../domain/model/beer'

export interface LoadBeerByIdRepository {
  loadById: (id: string) => Promise<BeerModel>
}
