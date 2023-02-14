import { DbLoadBeerById } from '../../../../../data/use-cases/beer/db-load-beer-by-id'
import { BeerMongoRepository } from '../../../../../infra/db/mongodb/beer/beer-mongo-repository'

export const makeDbLoadBeerById = (): DbLoadBeerById => {
	const beerMongoRepository = new BeerMongoRepository()
	return new DbLoadBeerById(beerMongoRepository)
}
