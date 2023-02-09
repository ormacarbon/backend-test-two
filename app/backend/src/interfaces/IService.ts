interface IBeersService<T> {
  create(obj: T): Promise<T | Error>,
  readAll():Promise<T[]>
}
  
export default IBeersService;