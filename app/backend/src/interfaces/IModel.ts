export interface IModel <T> {
  create(obj:T):Promise<T>,
  readBeer(name: string):Promise<T>
}