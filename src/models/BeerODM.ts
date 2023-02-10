import { Model, Schema, model, models } from "mongoose";
import IBeer from "../interfaces/IBeer";

export default class BeerODM {
  private schema: Schema;
  private model: Model<IBeer>;
  constructor() {
    this.schema = new Schema<IBeer>({
      id: { type: String, required: false },
      abv: { type: Number, required: true },
      address: { type: String, required: true },
      category: { type: String, required: true },
      city: { type: String, required: true },
      coordinates: { type: [Number], required: true },
      country: { type: String, required: true },
      description: { type: String, required: true },
      ibu: { type: Number, required: true },
      name: { type: String, required: true },
      state: { type: String, required: true },
      website: { type: String, required: true },
    });
    this.model = models.beers || model<IBeer>("beers", this.schema);
  }
  public async read(): Promise<IBeer[]> {
    const beers = await this.model.find();
    return beers;
  }
}
