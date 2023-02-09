import { Usecase } from '../abstract/usecase'
import { BreweryEntity } from '../entities/brewery'

export type LoadBreweries = Usecase<null, BreweryEntity[]>
