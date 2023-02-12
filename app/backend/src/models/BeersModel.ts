import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IBeers } from '../interfaces/IBeers';
import MongoModel from './MongoModel';

const frameMongooseSchema = new Schema<IBeers>({
  abv: Number,
  address: String,
  category: String,
  city: String,
  coordinates: Array<number>,
  country: String,
  description: String,
  ibu: Number,
  state: String,
  name: String,
  website: String,
}, { versionKey: false });

class Beer extends MongoModel<IBeers> {
  constructor(model = mongooseCreateModel('beers', frameMongooseSchema)) {
    super(model);
  }
}

export default Beer;