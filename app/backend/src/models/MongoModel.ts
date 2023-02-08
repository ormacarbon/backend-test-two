import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected model:Model<T>;

  constructor(model:Model<T>) {
    this.model = model;
  }

  public async create(obj:T):Promise<T> {
    return this.model.create({ ...obj });
  }
}

export default MongoModel;