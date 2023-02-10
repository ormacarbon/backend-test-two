import { UpdateBeer, UpdateBeerById } from '../../../domain/use-cases/update-beer-by-id'
import { UpdateBeerByIdRepository } from '../../protocols/db/update-beer-by-id-repository'

export class DbUpdateBeerById implements UpdateBeerById {
	private readonly updateBeerByIdRepository: UpdateBeerByIdRepository
	constructor (updateBeerRepository: UpdateBeerByIdRepository) {
		this.updateBeerByIdRepository = updateBeerRepository
	}

	async update (id: string, beerRawData: UpdateBeer): Promise<void> {
		await this.updateBeerByIdRepository.update(id, beerRawData)
	}
}
