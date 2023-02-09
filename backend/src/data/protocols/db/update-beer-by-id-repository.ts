import { BeerModel } from '../../../domain/model/beer'
import { UpdateBeer } from '../../../domain/use-cases/update-beer-by-id'

export interface UpdateBeerByIdRepository {
  update: (id: string, beerData: UpdateBeer) => Promise<BeerModel>
}
