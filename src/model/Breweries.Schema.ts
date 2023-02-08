import { Schema, model } from 'mongoose';
import { handleErrorDatabase } from '../common/utils/errorDatabaseHandler';
import BreweriesInterface from '../interfaces/Breweries.interface';
import { BreweriesUpdateInterface } from '../interfaces/BreweryUptade.interface';
import { InternalServerError } from '../services/err/Errors';

const BrewerieSchema = new Schema({
  abv: Number,
  address: String,
  category: String,
  city: String,
  coordinates: {
    type: Array,
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
    type: String
  }
});

class BreweriesModel {
  brewerie = model('breweries', BrewerieSchema);

  async findAllBreweries() {
    return await this.brewerie.find();
  }

  async find(id: string) {
    try {
      const brewery = await this.brewerie
        .findById(id)
        .catch(handleErrorDatabase);

      return brewery;
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async saveData(brewerie: BreweriesInterface) {
    try {
      const data = await this.brewerie
        .create(brewerie)
        .catch(handleErrorDatabase);

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

  async findAndDelete(id: string) {
    try {
      const brewery = await this.brewerie
        .findByIdAndDelete(id)
        .catch(handleErrorDatabase);

      return brewery;
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async findWebSiteHref(website: string) {
    try {
      const find = await this.brewerie.findOne({
        website: website
      });

      return find;
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async findAndUpdate(brewerieUpdate: BreweriesUpdateInterface) {
    try {
      return await this.brewerie.findByIdAndUpdate(
        brewerieUpdate.id,
        brewerieUpdate
      );
    } catch (error) {
      console.log(error);
      throw new InternalServerError(error as string);
    }
  }
}

export default new BreweriesModel();
