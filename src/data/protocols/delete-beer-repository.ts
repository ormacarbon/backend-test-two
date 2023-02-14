export interface DeleteBeerRepository {
  delete(name: string): Promise<boolean>
}