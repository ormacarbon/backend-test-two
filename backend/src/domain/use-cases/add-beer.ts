import { BeerModel } from '../model/beer'

export type AddBeerParams = Omit<BeerModel, 'id'>

export interface AddBeer {
  add: (beerData: AddBeerParams) => Promise<BeerModel>
}
