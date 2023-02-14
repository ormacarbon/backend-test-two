import { UpdateBrewery, UpdateBreweryParams } from '../../domain/usecases/update-brewery'
import { LoadBreweryRepository } from '../protocols/db/load-brewery-repository'
import { UpdateBreweryRepository } from '../protocols/db/update-brewery-repository'

export class DbUpdateBrewery implements UpdateBrewery {
  constructor (private readonly updateBreweryRepository: UpdateBreweryRepository, private readonly loadBreweryRepository: LoadBreweryRepository) {}
  async handle (params: UpdateBreweryParams): Promise<boolean> {
    const breweryExists = await this.loadBreweryRepository.handle({ id: params.id })
    if (breweryExists) {
      await this.updateBreweryRepository.handle(params)
    }
    return !!breweryExists
  }
}
