import { BeerModel } from '../../../domain/model/beer'
import { AddBeerParams } from '../../../domain/use-cases/add-beer'

export interface AddBeerRepository {
  add: (beerData: AddBeerParams) => Promise<BeerModel>
}
