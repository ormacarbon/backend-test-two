import { BeerModel } from '../../../domain/model/beer'
import { LoadBeerById } from '../../../domain/use-cases/load-beer-by-id'
import { LoadBeerByIdRepository } from '../../protocols/db/load-beer-by-id-repository'

export class DbLoadBeerById implements LoadBeerById {
	private readonly loadBeerByIdRepository: LoadBeerByIdRepository
	constructor (loadBeerByIdRepository: LoadBeerByIdRepository) {
		this.loadBeerByIdRepository = loadBeerByIdRepository
	}

	async loadById (id: string): Promise<BeerModel> {
		const beer = await this.loadBeerByIdRepository.loadById(id)
		return beer
	}
}
