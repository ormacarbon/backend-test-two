import { Model, Schema, model, models } from "mongoose";
import IBeer from "../../interfaces/IBeer";

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

  public async create(beer: IBeer): Promise<IBeer> {
    const {
      abv,
      address,
      category,
      city,
      coordinates,
      country,
      description,
      ibu,
      name,
      state,
      website,
    } = beer;
    const newBeer = await this.model.create({
      abv,
      address,
      category,
      city,
      coordinates,
      country,
      description,
      ibu,
      name,
      state,
      website,
    });
    const { _id } = newBeer;
    return {
      id: _id.toHexString(),
      abv: newBeer.abv,
      address: newBeer.address,
      category: newBeer.category,
      city: newBeer.city,
      coordinates: newBeer.coordinates,
      country: newBeer.country,
      description: newBeer.description,
      ibu: newBeer.ibu,
      name: newBeer.name,
      state: newBeer.state,
      website: newBeer.website,
    };
  }

  public async read(): Promise<IBeer[]> {
    const beers = await this.model.find();
    const beersWithId = beers.map((beer) => ({
      id: beer._id.toHexString(),
      abv: beer.abv,
      address: beer.address,
      category: beer.category,
      city: beer.city,
      coordinates: beer.coordinates,
      country: beer.country,
      description: beer.description,
      ibu: beer.ibu,
      name: beer.name,
      state: beer.state,
      website: beer.website,
    }));
    return beersWithId;
  }

  public async update(
    id: string,
    update: Partial<IBeer>
  ): Promise<IBeer | null> {
    await this.model.findByIdAndUpdate({ _id: id }, { ...update });
    const updatedBeer = await this.model.findById(id);
    return updatedBeer;
  }

  public async delete(id: string): Promise<void> {
    await this.model.deleteOne({ _id: id });
  }
}
