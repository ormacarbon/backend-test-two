export type UpdateBeerParams = {
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
  created_at?: Date
}

export interface UpdateBeerById {
  // to update a beer we need both its id and the fields that will be updated
  update: (id: string, beerRawData: UpdateBeerParams) => Promise<void>
}
