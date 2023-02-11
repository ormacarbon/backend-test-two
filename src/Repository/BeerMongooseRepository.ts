import BeersODM from '../Database/Models/BeersODM';
import IBeerRepository from '../Interfaces/IBeerRepository';
import IBeer from '../Interfaces/IBeer';

class BeerMongooseRepository implements IBeerRepository<IBeer> {
  constructor(private _persistence = new BeersODM()) {}

  public async create(beer: IBeer): Promise<IBeer> {
    return this._persistence.create(beer);
  }

  public async readAll(): Promise<IBeer[]> {
    return this._persistence.readAll();
  }

  public async update(id: string, beer: Partial<IBeer>): Promise<IBeer | null> {
    return this._persistence.update(id, beer);
  }

  public async delete(id: string): Promise<{ deletedCount: number; }> {
    return this._persistence.delete(id);
  }
}

export default BeerMongooseRepository;
