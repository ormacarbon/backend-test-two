import { AddBeerData } from '@/domain/useCases/add-beer';
import { readDbFile } from './read-db-file';
import { AddBeerMongoRepository } from '../infra/db/mongodb/repositories/add-beer/add-beer-repository';
import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper';

export const firstSeed = async () => {
  const addBeer = new AddBeerMongoRepository();
  await MongoHelper.connect();
  const beerCollections = await MongoHelper.getCollection("beers");
  await beerCollections.deleteMany({});
  const beersData = await readDbFile();
  await beerCollections.insertMany(beersData);
};
