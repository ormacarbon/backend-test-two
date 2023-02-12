import { Usecase } from '../../../domain/abstract/usecase'
import { BreweryEntity } from '../../../domain/entities/brewery'

export type AddBreweryRepositoryParams = Omit<BreweryEntity, 'id'>

export type AddBreweryRepository = Usecase<AddBreweryRepositoryParams, BreweryEntity>
