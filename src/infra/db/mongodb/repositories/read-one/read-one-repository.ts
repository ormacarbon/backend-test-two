import { ReadOneRepository } from "../../../../../data/protocols/read-one-repository";
import { BeerModels } from "../../../../../domain/models/beer";
import { MongoHelper } from "../../helpers/mongo-helper";

export class ReadOneMongoRepository implements ReadOneRepository {
  async read(name: string): Promise<BeerModels> {
    const beerCollection = await MongoHelper.getCollection('beers');

    const beer = await beerCollection.findOne({ name });

    return beer as unknown as BeerModels;
  }
}