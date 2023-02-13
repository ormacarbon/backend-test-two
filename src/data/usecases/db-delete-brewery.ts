import { DeleteBrewery, DeleteBreweryParams } from '../../domain/usecases/delete-brewery'
import { DeleteBreweryRepository } from '../protocols/db/delete-brewery-repository'
import { LoadBreweryRepository } from '../protocols/db/load-brewery-repository'

export class DbDeleteBrewery implements DeleteBrewery {
  constructor (private readonly deleteBreweryRepository: DeleteBreweryRepository, private readonly loadBreweryRepository: LoadBreweryRepository) {}
  async handle (params: DeleteBreweryParams): Promise<void> {
    await this.loadBreweryRepository.handle({ id: params.id })
    await this.deleteBreweryRepository.handle(params)
  }
}
