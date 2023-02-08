interface IBeersService<T> {
  create(obj: T): Promise<T | Error>,
}
  
export default IBeersService;