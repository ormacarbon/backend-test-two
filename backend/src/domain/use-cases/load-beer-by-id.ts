import { BeerModel } from '../model/beer'

export interface LoadBeerById {
  loadById: (id: string) => Promise<BeerModel>
}
