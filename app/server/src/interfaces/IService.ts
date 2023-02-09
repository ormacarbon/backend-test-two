export interface IService<T> {
  create?(obj: unknown): Promise<T>;
  read(): Promise<T[]>;
  readOne?(id: number): Promise<T | null>;
  update?(id: number, obj: unknown): Promise<T | null>;
  delete?(id: number): Promise<T | null>;
}