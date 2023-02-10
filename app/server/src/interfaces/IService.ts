export interface IService<T> {
  create(obj: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(id: string): Promise<T | null>;
  update(id: string, obj: unknown): Promise<void>;
  delete(id: string): Promise<void>;
}