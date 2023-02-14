export type BeerModel = {
  id: string
  abv: number
  address: string
	category?: string
	city: string
	coordinates: number[]
	country: string
	description?: string
	ibu: number
	name: string
	state: string
	website?: string
  created_at: Date
}
