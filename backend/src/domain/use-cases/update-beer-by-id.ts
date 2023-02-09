export interface UpdateBeerById {
  // to update a beer we need both its id and the fields that will be updated
  add: (id: string, beerRawData: string) => Promise<void>
}
