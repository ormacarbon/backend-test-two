export interface IModel <T> {
  create(obj:T):Promise<T>,
  readBeer(name: string):Promise<T>,
  readAll(limit: number, skip: number):Promise<T[]>,
  update(id:string, obj:Partial<T>):Promise<T | null>,
  delete(_id:string):Promise<T | null>,
}