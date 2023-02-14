import { UpdateBeerParams } from '../../../domain/use-cases/update-beer-by-id'

export interface UpdateBeerByIdRepository {
  update: (id: string, beerData: UpdateBeerParams) => Promise<void>
}
