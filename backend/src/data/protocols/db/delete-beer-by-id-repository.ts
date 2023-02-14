export interface DeleteBeerByIdRepository {
  deleteById: (id: string) => Promise<void>
}
