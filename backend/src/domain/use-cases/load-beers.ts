import { BeerModel } from '../model/beer'

export interface LoadBeers {
  loadAll: () => Promise<BeerModel[]>
}
