import { DeleteBeerById } from '../../../domain/use-cases/delete-beer-by-id'
import { DeleteBeerByIdRepository } from '../../protocols/db/delete-beer-by-id-repository'

export class DbDeleteBeerById implements DeleteBeerById {
	private readonly deleteBeerByIdRepository: DeleteBeerByIdRepository
	constructor (deleteBeerByIdRepository: DeleteBeerByIdRepository) {
		this.deleteBeerByIdRepository = deleteBeerByIdRepository
	}

	async deleteById (id: string): Promise<void> {
		await this.deleteBeerByIdRepository.deleteById(id)
	}
}
