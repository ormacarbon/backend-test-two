import { UpdateBrewery, UpdateBreweryParams } from '../../domain/usecases/update-brewery'
import { UpdateBreweryRepository } from '../protocols/db/update-brewery-repository'

export class DbUpdateBrewery implements UpdateBrewery {
  constructor (private readonly updateBreweryRepository: UpdateBreweryRepository) {}
  async handle (params: UpdateBreweryParams): Promise<void> {
    await this.updateBreweryRepository.handle(params)
  }
}
