import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected model:Model<T>;

  constructor(model:Model<T>) {
    this.model = model;
  }

  public async create(obj:T):Promise<T> {
    return this.model.create({ ...obj });
  }

  public async readBeer(name: string):Promise<T | null> {
    return this.model.findOne({ name });
  }

  public async readAll():Promise<T[]> {
    return this.model.find();
  }

  public async update(_id:string, obj:Partial<T>):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('InvalidMongoId'); 
    
    const result = this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
    return result;
  }
}

export default MongoModel;