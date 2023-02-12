import { AddBrewery, AddBreweryParams } from '../../domain/usecases/add-brewery'
import { AddBreweryRepository } from '../protocols/db/add-brewery-repository'

export class DbAddBrewery implements AddBrewery {
  constructor (private readonly addBreweryRepository: AddBreweryRepository) {}
  async handle (params: AddBreweryParams): Promise<void> {
    await this.addBreweryRepository.handle(params)
  }
}
