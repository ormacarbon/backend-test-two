export default interface IBeerService<T>{
  create(beer: T): Promise<T>;
}
