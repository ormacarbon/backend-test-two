import { DbLoadBeers } from '../../../../../data/use-cases/beer/db-load-beers'
import { BeerMongoRepository } from '../../../../../infra/db/mongodb/beer/beer-mongo-repository'

export const makeDbLoadBeers = (): DbLoadBeers => {
	const beerMongoRepository = new BeerMongoRepository()
	return new DbLoadBeers(beerMongoRepository)
}
