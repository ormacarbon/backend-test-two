import IBeersService from '../interfaces/IService';
import { IBeers } from '../interfaces/IBeers';
import { IModel } from '../interfaces/IModel';

const ErrorMsgExist = 'Cerveja já cadastrada';

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
}

export default BeersService;