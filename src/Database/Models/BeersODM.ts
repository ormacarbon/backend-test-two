import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import IBeer from '../../Interfaces/IBeer';

class BeersODM {
  private schema: Schema;
  private model: Model<IBeer>;

  constructor() {
    this.schema = new Schema<IBeer>({
      abv: { type: Number, required: true },
      address: { type: String, required: false },
      category: { type: String, required: false },
      city: { type: String, required: false },
      coordinates: [Number], // MUST BE ARRAY OF NUMBERS
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

  public async update(id: string, entity: Partial<IBeer>) {
    const filter = { _id: id };
    const update = { ...entity };
    return this.model.findOneAndUpdate(filter, update, {
      new: true,
    });
  }
}

export default BeersODM;
