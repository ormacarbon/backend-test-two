import { Usecase } from '../abstract/usecase'

export type DeleteBreweryParams = {
  id: string
}

export type DeleteBrewery = Usecase<DeleteBreweryParams, void>
