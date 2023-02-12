import { DeleteBeerRepository } from "../../../../../data/protocols/delete-beer-repository";
import { MongoHelper } from "../../helpers/mongo-helper";

export class DeleteBeerMongoRepository implements DeleteBeerRepository {
  async delete(name: string): Promise<boolean> {
    const beerCollection = await MongoHelper.getCollection('beers');

    await beerCollection.deleteOne({ name });

    return true;
  }
}