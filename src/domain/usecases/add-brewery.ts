import { Usecase } from '../abstract/usecase'
import { BreweryEntity } from '../entities/brewery'

export type AddBreweryParams = Omit<BreweryEntity, 'id'>

export type AddBrewery = Usecase<AddBreweryParams, void>
