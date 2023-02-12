import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import IBeer from '../../Interfaces/IBeer';
import NotFoundError from '../../Utils/ErrorsTypes/NotFoundError';

class BeersODM {
  private schema: Schema;
  private model: Model<IBeer>;

  constructor() {
    this.schema = new Schema<IBeer>({
      abv: { type: Number, required: true },
      address: { type: String, required: false },
      category: { type: String, required: false },
      city: { type: String, required: false },
      coordinates: { type: [Number], required: false }, // MUST BE ARRAY OF NUMBERS
      country: { type: String, required: false },
      ibu: { type: Number, required: true },
      name: { type: String, required: false },
      description: { type: String, required: false },
      state: { type: String, required: false },
      website: { type: String, required: false },
    }, {
      versionKey: false, // You should be aware of the outcome after set to false
    });

    this.model = models.Beers || model('Beer', this.schema);
  }

  public async create(beer: IBeer) {
    return this.model.create({ ...beer });
  }

  public async readAll() {
    return this.model.find({});
  }

  public async readById(id: string) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      throw new NotFoundError('Document not found. Invalid Id.');
    }
  }

  public async update(id: string, entity: Partial<IBeer>) {
    try {
      const filter = { _id: id };
      const update = { ...entity };
      return await this.model.findOneAndUpdate(filter, update, {
        new: true,
      });
    } catch (error) {
      throw new NotFoundError('Document Not Found. Invalid Id.');
    }
  }

  public async delete(id: string) {
    try {
      const filter = { _id: id };
      return await this.model.deleteOne(filter);
    } catch (error) {
      throw new NotFoundError('Document Not Found. Invalid Id.');
    }
  }
}

export default BeersODM;
