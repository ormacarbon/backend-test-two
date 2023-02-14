import { BreweryEntity } from '../../../domain/entities/brewery'
import { Repository } from '../../abstract/repostory'

export type LoadBreweriesRepository = Repository<null, BreweryEntity[]>
