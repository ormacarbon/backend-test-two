import { DbAddBeer } from '../../../../../data/use-cases/beer/db-add-beer'
import { BeerMongoRepository } from '../../../../../infra/db/mongodb/beer/beer-mongo-repository'

export const makeDbAddBeer = (): DbAddBeer => {
	const beerMongoRepository = new BeerMongoRepository()
	return new DbAddBeer(beerMongoRepository)
}
