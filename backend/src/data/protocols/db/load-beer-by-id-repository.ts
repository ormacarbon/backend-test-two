import { BeerModel } from '../../../domain/model/beer'

export interface LoadBeerByIdRepository {
  loadById: () => Promise<BeerModel>
}
