import { BeerModel } from '../../../domain/model/beer'
import { LoadBeers } from '../../../domain/use-cases/load-beers'
import { LoadBeersRepository } from '../../protocols/db/load-beers-repository'

export class DbLoadBeers implements LoadBeers {
	private readonly LoadBeersRepository: LoadBeersRepository
	constructor (LoadBeersRepository: LoadBeersRepository) {
		this.LoadBeersRepository = LoadBeersRepository
	}

	async loadAll (): Promise<BeerModel[]> {
		const beers = await this.LoadBeersRepository.loadAll()
		return beers
	}
}
