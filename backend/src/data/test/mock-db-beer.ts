import { BeerModel } from '../../domain/model/beer'
import { mockBeerModel, mockBeers } from '../../domain/test/mock-beer'
import { AddBeerParams } from '../../domain/use-cases/add-beer'
import { UpdateBeerParams } from '../../domain/use-cases/update-beer-by-id'
import { AddBeerRepository } from '../protocols/db/add-beer-repository'
import { DeleteBeerByIdRepository } from '../protocols/db/delete-beer-by-id-repository'
import { LoadBeerByIdRepository } from '../protocols/db/load-beer-by-id-repository'
import { LoadBeersRepository } from '../protocols/db/load-beers-repository'
import { UpdateBeerByIdRepository } from '../protocols/db/update-beer-by-id-repository'

export const mockAddBeerRepository = (): AddBeerRepository => {
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

export const mockDeleteBeerByIdRepository = (): DeleteBeerByIdRepository => {
	class DeleteBeerByIdRepositoryStub implements DeleteBeerByIdRepository {
		async deleteById (id: string): Promise<void> {
			return Promise.resolve()
		}
	}

	return new DeleteBeerByIdRepositoryStub()
}

export const mockLoadBeerByIdRepository = (): LoadBeerByIdRepository => {
	class LoadBeerByIdRepositoryStub implements LoadBeerByIdRepository {
		async loadById (id: string): Promise<BeerModel> {
			return Promise.resolve(mockBeerModel())
		}
	}

	return new LoadBeerByIdRepositoryStub()
}

export const mockUpdateBeerByIdRepository = (): UpdateBeerByIdRepository => {
	class UpdateBeerByIdRepositoryStub implements UpdateBeerByIdRepository {
		async update (id: string, beerData: UpdateBeerParams): Promise<void> {
			return Promise.resolve()
		}
	}

	return new UpdateBeerByIdRepositoryStub()
}
