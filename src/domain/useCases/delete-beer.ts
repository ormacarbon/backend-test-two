export interface DeleteBeer {
  delete(name: string): Promise<boolean>
}
