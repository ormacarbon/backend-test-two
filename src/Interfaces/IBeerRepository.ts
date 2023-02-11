export default interface IBeerRepository<T, U> {
  create(beer: T): Promise<U>;
  readAll(): Promise<U[]>;
  update(id: string, beer: Partial<U>): Promise<U | null>
}
