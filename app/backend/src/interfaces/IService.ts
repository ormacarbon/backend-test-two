interface IBeersService<T> {
  create(obj: T): Promise<T | Error>,
  readAll():Promise<T[]>,
  update(_id:string, obj:Partial<T>):Promise<T>,
}
  
export default IBeersService;