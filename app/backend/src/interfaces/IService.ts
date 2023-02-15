interface IBeersService<T> {
  create(obj: T): Promise<T | Error>,
  readAll(limit: number, skip: number):Promise<T[]>,
  update(_id:string, obj:Partial<T>):Promise<T>,
  delete(_id:string):Promise<T>,
}
  
export default IBeersService;