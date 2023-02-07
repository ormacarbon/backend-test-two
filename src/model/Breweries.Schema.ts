import { Schema, model } from 'mongoose';
import { handleErrorDatabase } from '../common/utils/errorDatabaseHandler';
import BreweriesInterface from '../interfaces/Breweries.interface';
import { InternalServerError } from '../services/err/Errors';

type Coords = [number, number];

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
    return await this.brewerie.find();
  }

  async find(id: string) {
    try {
      const brewerie = await this.brewerie.findById(id);
      return brewerie;
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async saveData(brewerie: BreweriesInterface) {
    try {
      const data = await this.brewerie.create(brewerie);

      if (data) {
        return data;
      }

      return new InternalServerError('ERROR');
    } catch (error) {
      console.log(error);
    }
  }

  async findCoordenatesDatabase(coords: number[]) {
    return await this.brewerie.findOne({
      coordinates: coords
    });
  }
}

export default new BreweriesModel();
