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
      coordinates: { type: [Number], required: false }, // MUST BE ARRAY OF NUMBERS
      country: { type: String, required: false },
      ibu: { type: Number, required: true },
      name: { type: String, required: false },
      state: { type: String, required: false },
      website: { type: String, required: false },
    });

    this.model = models.Beers || model('Beer', this.schema);
  }

  public async create(beer: IBeer) {
    return this.model.create({ ...beer });
  }
}

export default BeersODM;
