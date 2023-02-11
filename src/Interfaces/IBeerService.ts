export default interface IBeerService<T>{
  create(beer: T): Promise<T>;
  readAll(): Promise<T[]>;
  update(id: string, beer: Partial<T>): Promise<T | null>;
}
