import { AddBeerRepository } from "../../../../../data/protocols/add-beer-repository";
import { BeerModels } from "../../../../../domain/models/beer";
import { AddBeerData } from "../../../../../domain/useCases/add-beer";
import { MongoHelper } from "../../helpers/mongo-helper";

export class AddBeerMongoRepository implements AddBeerRepository {
  async add(beerData: AddBeerData): Promise<BeerModels> {
    const beerCollection = await MongoHelper.getCollection('beers');
    const { insertedId } = await beerCollection.insertOne(beerData);
    const beer = { id: insertedId.toString(), ...beerData }
    return beer;
  }
}