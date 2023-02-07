import { Schema, model } from 'mongoose';
import BreweriesInterface from '../interfaces/Breweries.interface';

const BrewerieSchema = new Schema({
  abv: Number,
  address: String,
  category: String,
  city: String,
  coordinates: {
    type: Array,
    unique: true,
    default: [0, 0]
  },
  country: String,
  description: String,
  ibu: Number,
  name: {
    type: String,
    unique: true
  },
  state: String,
  website: {
    type: String,
    unique: true
  }
});

class BreweriesModel {
  brewerie = model('breweries', BrewerieSchema);

  async findAllBreweries() {
    try {
      return await this.brewerie.find();
    } catch (error) {
      return error;
    }
  }

  async saveData(data: BreweriesInterface) {
    try {
      await this.brewerie.create(data);
    } catch (error) {
      return error;
    }
  }
}

export default new BreweriesModel();
