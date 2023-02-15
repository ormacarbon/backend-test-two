import IBeersService from '../interfaces/IService';
import { IBeers } from '../interfaces/IBeers';
import { IModel } from '../interfaces/IModel';

const ErrorMsgExist = 'Cerveja já cadastrada';
const ErrorMsgNotFound = 'Nenhuma cerveja encontrada';

class BeersService implements IBeersService<IBeers> { 
  private beers:IModel<IBeers>;

  constructor(model:IModel<IBeers>) {
    this.beers = model;
  }

  public async create(obj : IBeers):Promise<IBeers | Error> {
    const { name } = obj;
    const Users = await this.beers.readBeer(name);
    if (Users) throw new Error(ErrorMsgExist);
    const result = await this.beers.create(obj);
    return result;
  }

  public async readAll(limit: number, skip: number):Promise<IBeers[]> {
    const result = await this.beers.readAll(limit, skip);
    return result;
  }

  public async update(_id:string, obj:Partial<IBeers>):Promise<IBeers> {
    const resultUpdate = await this.beers.update(_id, obj);
    if (!resultUpdate) throw new Error(ErrorMsgNotFound);
    return resultUpdate;
  }

  public async delete(_id:string):Promise<IBeers> {
    const resultDelete = await this.beers.delete(_id);
    if (!resultDelete) throw new Error(ErrorMsgNotFound);
    return resultDelete;
  }
}

export default BeersService;