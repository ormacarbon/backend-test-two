import { DeleteBrewery, DeleteBreweryParams } from '../../domain/usecases/delete-brewery'
import { DeleteBreweryRepository } from '../protocols/db/delete-brewery-repository'
import { LoadBreweryRepository } from '../protocols/db/load-brewery-repository'

export class DbDeleteBrewery implements DeleteBrewery {
  constructor (private readonly deleteBreweryRepository: DeleteBreweryRepository, private readonly loadBreweryRepository: LoadBreweryRepository) {}
  async handle (params: DeleteBreweryParams): Promise<boolean> {
    const breweryExists = await this.loadBreweryRepository.handle({ id: params.id })
    if (breweryExists) {
      await this.deleteBreweryRepository.handle(params)
    }
    return !!breweryExists
  }
}
