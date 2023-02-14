import { UpdateBeerRepository } from "../../../../../data/protocols/update-beer-repository";
import { AddBeerData } from "../../../../../domain/useCases/add-beer";
import { MongoHelper } from "../../helpers/mongo-helper";

export class UpdateBeerMongoRepository implements UpdateBeerRepository {
  async update(name: string, beerData: AddBeerData): Promise<boolean> {
    const beerCollection = await MongoHelper.getCollection('beers');

    await beerCollection.updateOne({ name }, { $set: { ...beerData } });
    
    return true;
  }
}