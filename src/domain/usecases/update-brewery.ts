import { Usecase } from '../abstract/usecase'

export type UpdateBreweryParams = {
  id: string
  abv?: number
  address?: string
  category?: string
  city?: string
  coordinates?: number[]
  country?: string
  description?: string
  ibu?: number
  name?: string
  state?: string
  website?: string
}

export type UpdateBrewery = Usecase<UpdateBreweryParams, boolean>
