import { DeleteBrewery, DeleteBreweryParams } from '../../domain/usecases/delete-brewery'
import { DeleteBreweryRepository } from '../protocols/db/delete-brewery-repository'

export class DbDeleteBrewery implements DeleteBrewery {
  constructor (private readonly deleteBreweryRepository: DeleteBreweryRepository) {}
  async handle (params: DeleteBreweryParams): Promise<void> {
    await this.deleteBreweryRepository.handle(params)
  }
}
