import { BeerModel } from '../../domain/model/beer'
import { mockBeerModel, mockBeers } from '../../domain/test/mock-beer'
import { AddBeerParams } from '../../domain/use-cases/add-beer'
import { AddBeerRepository } from '../protocols/db/add-beer-repository'
import { LoadBeersRepository } from '../protocols/db/load-beers-repository'

export const mockAddBeerRepo = (): AddBeerRepository => {
	class AddBeerRepositoryStub implements AddBeerRepository {
		async add (beer: AddBeerParams): Promise<BeerModel> {
			return Promise.resolve(mockBeerModel())
		}
	}

	return new AddBeerRepositoryStub()
}

export const mockLoadBeersRepository = (): LoadBeersRepository => {
	class LoadBeersRepositoryStub implements LoadBeersRepository {
		async loadAll (): Promise<BeerModel[]> {
			return Promise.resolve(mockBeers())
		}
	}

	return new LoadBeersRepositoryStub()
}
