import { BeerModel } from '../../../domain/model/beer'

export interface LoadBeersRepository {
  loadAll: () => Promise<BeerModel[]>
}
