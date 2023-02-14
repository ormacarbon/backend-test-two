import { BeerModel } from '../../../domain/model/beer'
import { AddBeer, AddBeerParams } from '../../../domain/use-cases/add-beer'
import { AddBeerRepository } from '../../protocols/db/add-beer-repository'

export class DbAddBeer implements AddBeer {
	private readonly addBeerRepository: AddBeerRepository
	constructor (addBeerRepository: AddBeerRepository) {
		this.addBeerRepository = addBeerRepository
	}

	async add (beerData: AddBeerParams): Promise<BeerModel> {
		const beer = await this.addBeerRepository.add(beerData)
		return beer
	}
}
