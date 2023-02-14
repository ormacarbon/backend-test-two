import { BeerModel } from '../../domain/model/beer'
import { mockBeerModel, mockBeers } from '../../domain/test/mock-beer'
import { AddBeer, AddBeerParams } from '../../domain/use-cases/add-beer'
import { DeleteBeerById } from '../../domain/use-cases/delete-beer-by-id'
import { LoadBeerById } from '../../domain/use-cases/load-beer-by-id'
import { LoadBeers } from '../../domain/use-cases/load-beers'
import { UpdateBeerById, UpdateBeerParams } from '../../domain/use-cases/update-beer-by-id'

export const mockAddBeer = (): AddBeer => {
	class AddBeerStub implements AddBeer {
		async add (Beer: AddBeerParams): Promise<BeerModel> {
			return await Promise.resolve(mockBeerModel())
		}
	}

	return new AddBeerStub()
}

export const mockLoadBeerById = (): LoadBeerById => {
	class LoadBeerByIdStub implements LoadBeerById {
		async loadById (id: string): Promise<BeerModel> {
			return await Promise.resolve(mockBeerModel())
		}
	}

	return new LoadBeerByIdStub()
}

export const mockLoadBeers = (): LoadBeers => {
	class LoadBeersStub implements LoadBeers {
		async loadAll (): Promise<BeerModel[]> {
			return await Promise.resolve(mockBeers())
		}
	}

	return new LoadBeersStub()
}

export const mockUpdateBeerById = (): UpdateBeerById => {
	class UpdateBeerByIdStub implements UpdateBeerById {
		async update (id: string, beerRawData: UpdateBeerParams): Promise<void> {
			await Promise.resolve()
		}
	}

	return new UpdateBeerByIdStub()
}

export const mockDeleteBeerById = (): DeleteBeerById => {
	class DeleteBeerByIdStub implements DeleteBeerById {
		async deleteById (id: string): Promise<void> {
			await Promise.resolve()
		}
	}

	return new DeleteBeerByIdStub()
}
