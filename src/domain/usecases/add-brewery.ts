import { Usecase } from '../abstract/usecase'
import { BreweryEntity } from '../entities/brewery'

export type AddBrewery = Usecase<BreweryEntity, void>
