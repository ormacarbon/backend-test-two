import { BreweryEntity } from '../../../domain/entities/brewery'
import { Repository } from '../../abstract/repostory'

export type LoadBreweryRepositoryParams = {
  id: string
}

export type LoadBreweryRepository = Repository<LoadBreweryRepositoryParams, BreweryEntity>
