import { BreweryEntity } from '../../../domain/entities/brewery'
import { UpdateBreweryParams } from '../../../domain/usecases/update-brewery'
import { Repository } from '../../abstract/repostory'

export type UpdateBreweryRepositoryParams = UpdateBreweryParams

export type UpdateBreweryRepository = Repository<UpdateBreweryRepositoryParams, BreweryEntity>
