import { BreweryEntity } from '../../../domain/entities/brewery'
import { Repository } from '../../abstract/repostory'

export type DeleteBreweryRepositoryParams = {
  id: string
}

export type DeleteBreweryRepository = Repository<DeleteBreweryRepositoryParams, BreweryEntity>
