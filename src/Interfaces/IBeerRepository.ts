type deleteReturn = {
  deletedCount: number,
};

export default interface IBeerRepository<T> {
  create(beer: T): Promise<T>;
  readAll(): Promise<T[]>;
  readById(id: string): Promise<T | null>
  update(id: string, beer: Partial<T>): Promise<T | null>
  delete(id: string): Promise<deleteReturn>
}
