export default interface IBeerRepository<T, U> {
  create(beer: T): Promise<U>;
  readAll(): Promise<U[]>;
}
