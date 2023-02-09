import { BeerModel } from '../../domain/model/beer'
import { mockBeerModel } from '../../domain/test/mock-beer'
import { AddBeer, AddBeerParams } from '../../domain/use-cases/add-beer'

export const mockAddBeer = (): AddBeer => {
	class AddBeerStub implements AddBeer {
		async add (Beer: AddBeerParams): Promise<BeerModel> {
			return await Promise.resolve(mockBeerModel())
		}
	}

	return new AddBeerStub()
}
