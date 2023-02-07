import { BeerModels } from "../models/beer"

export interface AddBeerData {
  abv: number
  address: string
  category: string
  city: string
  coordinates: number[]
  country: string
  description: string
  ibu: number
  name: string
  state: string
  website: string
}

export interface AddBeer {
  add(data: AddBeerData): Promise<BeerModels>;
}
