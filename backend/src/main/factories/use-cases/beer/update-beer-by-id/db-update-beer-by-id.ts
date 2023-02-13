import { DbUpdateBeerById } from '../../../../../data/use-cases/beer/db-update-beer-by-id'
import { BeerMongoRepository } from '../../../../../infra/db/mongodb/beer/beer-mongo-repository'

export const makeDbUpdateBeerById = (): DbUpdateBeerById => {
	const beerMongoRepository = new BeerMongoRepository()
	return new DbUpdateBeerById(beerMongoRepository)
}
