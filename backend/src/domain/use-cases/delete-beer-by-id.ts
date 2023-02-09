export interface DeleteBeerById {
  deleteById: (id: string) => Promise<void>
}
