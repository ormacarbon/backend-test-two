import { DbDeleteBeerById } from '../../../../../data/use-cases/beer/db-delete-beer-by-id'
import { BeerMongoRepository } from '../../../../../infra/db/mongodb/beer/beer-mongo-repository'

export const makeDbDeleteBeerById = (): DbDeleteBeerById => {
	const beerMongoRepository = new BeerMongoRepository()
	return new DbDeleteBeerById(beerMongoRepository)
}
